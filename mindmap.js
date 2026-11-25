/**
 * Interactive SVG Mind Map Engine
 * Supports radial/balanced tree layout, category filtering, click-to-inspect details,
 * pan & zoom, and responsive fit-to-view.
 */
window.createInteractiveMindMap = function createInteractiveMindMap(config) {
  const container = document.getElementById(config.containerId);
  if (!container) return;

  const categories = config.categories || [];
  let activeCategory = "all";
  let selectedId = config.root.id;
  let scale = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  container.innerHTML = `
    <div class="mindmap-shell">
      <div class="mindmap-toolbar">
        <div class="mindmap-filters">
          <button class="chip-btn active" data-cat="all">All Pillars</button>
          ${categories.map(c => `<button class="chip-btn" data-cat="${c.id}">${c.label}</button>`).join("")}
        </div>
        <div class="mindmap-controls">
          <button class="btn btn-outline btn-sm" data-zoom="in" title="Zoom In">+ Zoom</button>
          <button class="btn btn-outline btn-sm" data-zoom="out" title="Zoom Out">&minus; Zoom</button>
          <button class="btn btn-outline btn-sm" data-zoom="reset" title="Reset View">Reset View</button>
        </div>
      </div>
      <div class="mindmap-workspace">
        <div class="mindmap-canvas-wrap" id="${config.containerId}-canvas">
          <svg class="mindmap-svg" viewBox="0 0 1120 680" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="${config.containerId}-shadow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#0f291c" flood-opacity="0.10" />
              </filter>
            </defs>
            <g class="mm-viewport" id="${config.containerId}-viewport"></g>
          </svg>
        </div>
        <aside class="mindmap-inspector" id="${config.containerId}-inspector" aria-live="polite"></aside>
      </div>
    </div>
  `;

  const svg = container.querySelector("svg");
  const viewport = document.getElementById(`${config.containerId}-viewport`);
  const inspector = document.getElementById(`${config.containerId}-inspector`);
  const canvasWrap = document.getElementById(`${config.containerId}-canvas`);

  const nodeMap = new Map();
  const edges = [];

  // Layout engine: Center root at (560, 340), branches left & right, leaves fanned cleanly
  function buildLayout() {
    nodeMap.clear();
    edges.length = 0;

    const cx = 560;
    const cy = 340;
    const rootNode = { ...config.root, x: cx, y: cy, w: 204, h: 74, type: "root", category: "all" };
    nodeMap.set(rootNode.id, rootNode);

    const branches = config.branches || [];
    const leftBranches = [];
    const rightBranches = [];
    branches.forEach((b, idx) => {
      if (idx % 2 === 0) rightBranches.push(b);
      else leftBranches.push(b);
    });

    function layoutSide(list, dir) {
      const total = list.length;
      const verticalSpan = 560;
      const startY = cy - verticalSpan / 2 + verticalSpan / (total * 2);
      const stepY = verticalSpan / total;

      list.forEach((b, idx) => {
        const bx = cx + dir * 235;
        const by = startY + idx * stepY;
        const bNode = {
          ...b,
          x: bx,
          y: by,
          w: 176,
          h: 52,
          type: "branch",
          dir,
          category: b.category || b.id
        };
        nodeMap.set(bNode.id, bNode);
        edges.push({ from: rootNode, to: bNode, color: b.color || "#145338", category: bNode.category });

        const leaves = b.children || [];
        const leafSpread = Math.min(44, 130 / Math.max(1, leaves.length));
        const leafStartY = by - ((leaves.length - 1) * leafSpread) / 2;

        leaves.forEach((leaf, lIdx) => {
          const lx = bx + dir * 205;
          const ly = leafStartY + lIdx * leafSpread;
          const lNode = {
            ...leaf,
            x: lx,
            y: ly,
            w: 158,
            h: 34,
            type: "leaf",
            color: b.color || "#145338",
            category: bNode.category
          };
          nodeMap.set(lNode.id, lNode);
          edges.push({ from: bNode, to: lNode, color: b.color || "#145338", category: bNode.category });
        });
      });
    }

    layoutSide(rightBranches, 1);
    layoutSide(leftBranches, -1);
  }

  function svgEl(tag, attrs = {}) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  }

  function wrapLines(text, maxChars) {
    const words = text.split(" ");
    const lines = [];
    let current = "";
    words.forEach(w => {
      if ((current + " " + w).trim().length <= maxChars) {
        current = (current + " " + w).trim();
      } else {
        if (current) lines.push(current);
        current = w;
      }
    });
    if (current) lines.push(current);
    return lines.slice(0, 3);
  }

  function renderGraph() {
    viewport.innerHTML = "";

    // Edges first
    edges.forEach(edge => {
      const { from, to, color, category } = edge;
      const midX = (from.x + to.x) / 2;
      const d = `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
      const dimmed = activeCategory !== "all" && category !== activeCategory;
      const path = svgEl("path", {
        d,
        class: `mm-link ${dimmed ? "dimmed" : ""}`,
        stroke: color,
        "stroke-width": from.type === "root" ? "3" : "2",
        "stroke-opacity": from.type === "root" ? "0.65" : "0.45"
      });
      viewport.appendChild(path);
    });

    // Nodes
    nodeMap.forEach(node => {
      const isRoot = node.type === "root";
      const isBranch = node.type === "branch";
      const isSelected = node.id === selectedId;
      const dimmed = !isRoot && activeCategory !== "all" && node.category !== activeCategory;

      const g = svgEl("g", {
        class: `mm-node ${isSelected ? "selected" : ""} ${dimmed ? "dimmed" : ""}`,
        transform: `translate(${node.x}, ${node.y})`,
        tabindex: "0",
        role: "button",
        "aria-label": node.title
      });

      const fill = isRoot
        ? "#145338"
        : isBranch
          ? (node.color || "#1e734f")
          : "#ffffff";
      const stroke = isRoot
        ? "#fcd34d"
        : isBranch
          ? (isSelected ? "#111827" : "rgba(255,255,255,0.4)")
          : (isSelected ? (node.color || "#145338") : (node.color || "#cbd5e1"));
      const textColor = isRoot || isBranch ? "#ffffff" : "#16241d";

      const rect = svgEl("rect", {
        x: -node.w / 2,
        y: -node.h / 2,
        width: node.w,
        height: node.h,
        rx: isRoot ? 18 : isBranch ? 12 : 9,
        fill,
        stroke,
        "stroke-width": isSelected ? "3" : isBranch ? "1.5" : "1.6",
        filter: `url(#${config.containerId}-shadow)`
      });
      g.appendChild(rect);

      const maxChars = isRoot ? 20 : isBranch ? 18 : 21;
      const lines = wrapLines(node.title, maxChars);
      const fontSize = isRoot ? 13.5 : isBranch ? 11.5 : 10.5;
      const lineHeight = fontSize * 1.25;
      const startY = -((lines.length - 1) * lineHeight) / 2 + 4;

      const text = svgEl("text", {
        "text-anchor": "middle",
        fill: textColor,
        "font-size": fontSize,
        "font-weight": isRoot || isBranch ? "700" : "600",
        "font-family": "Plus Jakarta Sans, sans-serif"
      });

      lines.forEach((line, i) => {
        const tspan = svgEl("tspan", {
          x: 0,
          y: startY + i * lineHeight
        });
        tspan.textContent = line;
        text.appendChild(tspan);
      });

      g.appendChild(text);

      g.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedId = node.id;
        renderGraph();
        renderInspector();
      });

      g.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectedId = node.id;
          renderGraph();
          renderInspector();
        }
      });

      viewport.appendChild(g);
    });

    applyTransform();
  }

  function renderInspector() {
    const node = nodeMap.get(selectedId) || config.root;
    const bullets = node.points || [];
    inspector.innerHTML = `
      <div>
        <span class="badge badge-green">${node.tag || (node.type === "root" ? "Core Framework" : "Business Pillar")}</span>
        <h3 style="margin: 0.65rem 0 0.35rem; font-family: var(--font-serif); font-size: 1.28rem; line-height: 1.25;">${node.title}</h3>
        <p class="muted small" style="margin: 0;">${node.summary || "Click any branch or sub-node in the mind map to explore detailed operational models and SFAC report insights."}</p>
      </div>
      ${node.metric ? `<div class="inspector-metric"><strong>Key Benchmark:</strong> ${node.metric}</div>` : ""}
      ${bullets.length ? `
        <div>
          <strong class="small" style="display:block; margin-bottom:0.4rem;">Key Mechanisms &amp; Activities</strong>
          <ul class="inspector-list">
            ${bullets.map(p => `<li>${p}</li>`).join("")}
          </ul>
        </div>
      ` : ""}
      ${node.example ? `<div class="small" style="background: var(--surface-alt); padding: 0.75rem 0.9rem; border-radius: 10px; border: 1px solid var(--border);"><strong>SFAC 2024–25 Example:</strong> ${node.example}</div>` : ""}
      <div class="small muted" style="margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--border);">
        Tip: Drag canvas to pan, scroll or use buttons to zoom, or filter pillars above.
      </div>
    `;
  }

  function applyTransform() {
    viewport.setAttribute("transform", `translate(${panX}, ${panY}) scale(${scale})`);
  }

  // Filter buttons
  container.querySelectorAll(".chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.cat;
      renderGraph();
    });
  });

  // Zoom controls
  container.querySelectorAll("[data-zoom]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.zoom;
      if (action === "in") scale = Math.min(1.65, scale + 0.15);
      else if (action === "out") scale = Math.max(0.65, scale - 0.15);
      else {
        scale = 1;
        panX = 0;
        panY = 0;
      }
      applyTransform();
    });
  });

  // Panning
  canvasWrap.addEventListener("mousedown", (e) => {
    if (e.target.closest(".mm-node")) return;
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    applyTransform();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  buildLayout();
  renderGraph();
  renderInspector();
};
