// Shared Header, Footer & Navigation across all 5 FPO Portal pages
(function () {
  const NAV_ITEMS = [
    { href: "index.html", label: "Home" },
    { href: "history-scheme.html", label: "10K FPOs" },
    { href: "implementing-agencies.html", label: "14 Implementing Agencies" },
    { href: "cbbos.html", label: "CBBOs & FPO List" },
    { href: "federations.html", label: "Federations & Interest Form" }
  ];

  function getCurrentFile() {
    const path = window.location.pathname.split("/").pop();
    return path || "index.html";
  }

  function renderHeader() {
    const mount = document.getElementById("site-header-mount");
    if (!mount) return;
    const current = getCurrentFile();

    mount.innerHTML = `
      <header class="site-header">
        <div class="container nav-bar">
          <a class="brand" href="index.html">
            <div class="brand-mark" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22V10"/>
                <path d="M12 10C12 6 8 3 3 3c0 5 3 9 9 7Z"/>
                <path d="M12 10c0-4 4-7 9-7 0 5-3 9-9 7Z"/>
                <path d="M5 22h14"/>
              </svg>
            </div>
            <div class="brand-text">
              <strong>FPO Portal</strong>
              <span>Farmer Producer Organizations Ecosystem</span>
            </div>
          </a>

          <button class="nav-toggle" id="nav-toggle-btn" aria-expanded="false" aria-controls="primary-nav">
            &#9776; Menu
          </button>

          <ul class="nav-links" id="primary-nav">
            ${NAV_ITEMS.map(item => {
              const isActive = current === item.href ? "active" : "";
              return `<li><a href="${item.href}" class="${isActive}">${item.label}</a></li>`;
            }).join("")}
          </ul>
        </div>
      </header>
    `;

    const toggleBtn = document.getElementById("nav-toggle-btn");
    const navList = document.getElementById("primary-nav");
    if (toggleBtn && navList) {
      toggleBtn.addEventListener("click", () => {
        const open = navList.classList.toggle("open");
        toggleBtn.setAttribute("aria-expanded", String(open));
      });
    }
  }

  function renderFooter() {
    const mount = document.getElementById("site-footer-mount");
    if (!mount) return;
    mount.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <h4>FPO Knowledge Portal</h4>
              <p class="small">
                An institutional portal presenting the Central Sector Scheme for Formation &amp; Promotion of 10,000 Farmer Producer Organizations (FPOs), Implementing Agencies, Cluster-Based Business Organizations (CBBOs), and State-Level Federations.
              </p>
            </div>
            <div>
              <h4>Portal Pages</h4>
              <ul>
                ${NAV_ITEMS.map(i => `<li><a href="${i.href}">${i.label}</a></li>`).join("")}
              </ul>
            </div>
            <div>
              <h4>Official Portals &amp; Resources</h4>
              <ul>
                <li><a href="https://sfacindia.com/" target="_blank" rel="noopener noreferrer">SFAC India</a></li>
                <li><a href="https://sfacindia.com/UploadFile/Statistics/Final%20Printed%20print%20English%20Annual%20report%202024%2025.pdf" target="_blank" rel="noopener noreferrer">Official SFAC Annual Report 2024–25 PDF &nearr;</a></li>
                <li><a href="https://enam.gov.in/" target="_blank" rel="noopener noreferrer">e-NAM Platform</a></li>
                <li><a href="https://10kfpo.lms.gov.in/" target="_blank" rel="noopener noreferrer">10K FPO LMS Portal</a></li>
                <li><a href="https://agriwelfare.gov.in/" target="_blank" rel="noopener noreferrer">Dept. of Agriculture &amp; FW</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>Empowering Small &amp; Marginal Farmers through Collectivization.</span>
          </div>
        </div>
      </footer>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
  });
})();
