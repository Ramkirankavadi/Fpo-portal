// Verified Dataset grounded in:
// 1. SFAC Annual Report 2024-25 (Tables 2A, 2B, 2C, 2D, 2E, Chapters 2-5)
// 2. Lok Sabha Starred Question No. 137 (29 July 2025, Annexures I-VII)
// 3. MoA&FW Statewise List of FPOs Registry & SFAC State-Level Producer Companies

window.FPO_DATA = {
  nationalKPIs: [
    { value: "10,000", label: "FPOs Registered (Target Achieved)", meta: "As on 31.03.2025 across 34 States/UTs" },
    { value: "36,71,356", label: "Beneficiary Farmers Onboarded", meta: "Lok Sabha Q.137 (as on 30.06.2025)" },
    { value: "14", label: "Implementing Agencies (IAs)", meta: "Central, Cooperative, State & Universities" },
    { value: "494 + 9", label: "CBBOs & VCOs Engaged", meta: "144 CBBOs & 9 VCOs under SFAC alone" },
    { value: "5,694", label: "FPOs Availed Equity Grant", meta: "Up to Rs. 15 lakh matching grant per FPO" },
    { value: "4,761", label: "FPOs Onboarded on ONDC", meta: "5,000+ products & Rs. 1+ Cr sales" },
    { value: "4,404", label: "FPOs Registered on e-NAM", meta: "1,158 traded 1.77L MT worth Rs. 277.07 Cr" },
    { value: "2,612", label: "Women-Centric FPOs", meta: "1,663 all-women + 949 (>50% women)" }
  ],

  sfacPerformance24_25: [
    { metric: "No. of FPOs Registered by SFAC", fy24_25: "228", cumulative: "3,711" },
    { metric: "Total Matching Equity Grant Released (INR Cr.)", fy24_25: "49.1", cumulative: "124.8" },
    { metric: "Total FPO Management Cost Released (INR Cr.)", fy24_25: "66.0", cumulative: "270.7" },
    { metric: "Total CBBO Management Cost Released (INR Cr.)", fy24_25: "32.3", cumulative: "146.1" },
    { metric: "No. of FPOs Covered under Credit Guarantee Fund", fy24_25: "126", cumulative: "283" },
    { metric: "Loan Sanctioned under Credit Guarantee Fund (INR Cr.)", fy24_25: "159", cumulative: "327" },
    { metric: "LMS Users Registered (BoDs, CEOs, Accountants, Farmers)", fy24_25: "47,057", cumulative: "59,261" }
  ],

  // Table 2A of SFAC Annual Report 2024-25 (Page 13)
  implementingAgencies: [
    {
      sno: 1,
      shortName: "SFAC",
      fullName: "Small Farmers' Agribusiness Consortium",
      category: "Central Nodal Agency",
      allocated: 3711,
      fy24_25: 228,
      registered: 3711,
      cbbosCount: "144 CBBOs + 9 VCOs",
      location: "New Delhi (Hauz Khas, NCUI Building)",
      website: "https://sfacindia.com/",
      role: "Central Nodal Agency (CNA) for the 10,000 FPO Scheme, lead agency for e-NAM, Equity Grant & Venture Capital manager, and organizer of national FPO Melas & ONDC onboarding."
    },
    {
      sno: 2,
      shortName: "NCDC",
      fullName: "National Cooperative Development Corporation",
      category: "Cooperative Apex",
      allocated: 1863,
      fy24_25: 1085,
      registered: 1863,
      cbbosCount: "Empanelled Cooperative CBBOs",
      location: "New Delhi (Siri Institutional Area)",
      website: "https://www.ncdc.in/",
      role: "Exclusively promotes FPOs registered under State/Multi-State Cooperative Societies Acts, including integration with Primary Agricultural Credit Societies (PACS)."
    },
    {
      sno: 3,
      shortName: "NABARD",
      fullName: "National Bank for Agriculture & Rural Development",
      category: "Development Bank",
      allocated: 1694,
      fy24_25: 8,
      registered: 1694,
      cbbosCount: "Empanelled POPIs & CBBOs",
      location: "Mumbai, Maharashtra (Bandra Kurla Complex)",
      website: "https://www.nabard.org/",
      role: "Promotes FPOs via Producer Organization Promoting Institutions (POPIs)/CBBOs, manages Credit Guarantee Fund (NABSanrakshan), institutional credit via NABKISAN, and BIRD Lucknow nodal training."
    },
    {
      sno: 4,
      shortName: "NAFED",
      fullName: "National Agricultural Cooperative Marketing Federation of India Ltd.",
      category: "Marketing Federation",
      allocated: 1191,
      fy24_25: 98,
      registered: 1191,
      cbbosCount: "Empanelled Value Chain CBBOs",
      location: "New Delhi (Ashram Chowk)",
      website: "https://www.nafed-india.com/",
      role: "Focuses on specialized commodity value chains, MSP/PSS procurement linkages, warehousing, processing, and domestic/export market access for FPOs."
    },
    {
      sno: 5,
      shortName: "FDRVC",
      fullName: "Foundation for Development of Rural Value Chains (MoRD-NRLM)",
      category: "Rural Value Chain",
      allocated: 800,
      fy24_25: 134,
      registered: 800,
      cbbosCount: "SRLM & Value Chain CBBOs",
      location: "New Delhi (Janakpuri Institutional Area)",
      website: "https://fdrvc.org/",
      role: "Joint initiative of Ministry of Rural Development & Tata Trusts mobilizing women SHG farmers into large producer enterprises and value chains."
    },
    {
      sno: 6,
      shortName: "NERAMAC",
      fullName: "North Eastern Regional Agricultural Marketing Corporation Ltd.",
      category: "Regional Marketing",
      allocated: 220,
      fy24_25: 10,
      registered: 220,
      cbbosCount: "North-East Cluster CBBOs",
      location: "Guwahati, Assam",
      website: "https://www.neramac.com/",
      role: "Promotes high-value horticultural, spice, organic, and GI-tagged FPOs across the 8 North-Eastern states with marketing and processing linkages."
    },
    {
      sno: 7,
      shortName: "NDDB",
      fullName: "National Dairy Development Board",
      category: "Allied / Dairy",
      allocated: 126,
      fy24_25: 9,
      registered: 126,
      cbbosCount: "Dairy & Allied CBBOs",
      location: "Anand, Gujarat",
      website: "https://www.nddb.coop/",
      role: "Promotes dairy, fodder, animal husbandry, and manure-value-chain FPOs leveraging cooperative dairy infrastructure and veterinary services."
    },
    {
      sno: 8,
      shortName: "WDD Karnataka",
      fullName: "Watershed Development Department, Karnataka",
      category: "State Govt. Dept.",
      allocated: 100,
      fy24_25: 0,
      registered: 100,
      cbbosCount: "Karnataka Watershed CBBOs",
      location: "Bengaluru, Karnataka (Cauvery Bhavan)",
      website: "https://raitamitra.karnataka.gov.in/",
      role: "Integrates watershed development and rainfed farming clusters in Karnataka into resilient dryland and millet FPOs."
    },
    {
      sno: 9,
      shortName: "GNFSU",
      fullName: "Gujarat Natural Farming Science University (formerly GAICL)",
      category: "Agri University",
      allocated: 97,
      fy24_25: 0,
      registered: 97,
      cbbosCount: "Gujarat Cluster CBBOs",
      location: "Halol, Panchmahal, Gujarat",
      website: "https://goau.gujarat.gov.in/",
      role: "Promotes natural farming, organic crop clusters, and sustainable agribusiness FPOs across Gujarat."
    },
    {
      sno: 10,
      shortName: "CAU, Manipur",
      fullName: "Central Agricultural University, Manipur",
      category: "Agri University",
      allocated: 60,
      fy24_25: 0,
      registered: 60,
      cbbosCount: "University & KVK CBBOs",
      location: "Imphal, Manipur (Lamphelpat)",
      website: "https://www.cau.ac.in/",
      role: "Uses Krishi Vigyan Kendras (KVKs) and agricultural research faculty to incubate hill-agriculture and horticulture FPOs in the North-East."
    },
    {
      sno: 11,
      shortName: "SFAC-TN",
      fullName: "Small Farmers' Agri-Business Consortium – Tamil Nadu",
      category: "State Agency",
      allocated: 50,
      fy24_25: 0,
      registered: 50,
      cbbosCount: "Tamil Nadu State CBBOs",
      location: "Chennai, Tamil Nadu",
      website: "https://sfacindia.com/",
      role: "State-level nodal arm driving precision farming, mango, banana, turmeric, coconut, and millet FPOs in Tamil Nadu."
    },
    {
      sno: 12,
      shortName: "UPDASP",
      fullName: "Uttar Pradesh Diversified Agriculture Support Project",
      category: "State Project Agency",
      allocated: 50,
      fy24_25: 0,
      registered: 50,
      cbbosCount: "UP District Cluster CBBOs",
      location: "Lucknow, Uttar Pradesh (Gomti Nagar)",
      website: "https://updasp.co.in/",
      role: "Supports diversified horticulture, oilseed, pulse, and aromatic crop FPOs across Uttar Pradesh districts."
    },
    {
      sno: 13,
      shortName: "PAMCL, West Bengal",
      fullName: "Paschimbanga Agri Marketing Corporation Limited",
      category: "State Corporation",
      allocated: 25,
      fy24_25: 0,
      registered: 25,
      cbbosCount: "West Bengal Cluster CBBOs",
      location: "Kolkata, West Bengal (Anandapur)",
      website: "https://wb.gov.in/",
      role: "Facilitates horticultural, vegetable, and rice FPOs with Sufal Bangla and state agricultural marketing infrastructure."
    },
    {
      sno: 14,
      shortName: "TRIFED",
      fullName: "Tribal Cooperative Marketing Development Federation of India",
      category: "Tribal Cooperative",
      allocated: 13,
      fy24_25: 0,
      registered: 13,
      cbbosCount: "Tribal & MFP CBBOs",
      location: "New Delhi (NCUI Building, Hauz Khas)",
      website: "https://trifed.tribal.gov.in/",
      role: "Empowers tribal farmers and Minor Forest Produce (MFP) gatherers through Van Dhan & tribal FPO value-addition enterprises."
    }
  ],

  // Combined State-wise Data (SFAC Report Table 2B & 2C + Lok Sabha Q.137 Annexures I, III, IV, V, VII)
  stateWiseStats: [
    { state: "Uttar Pradesh", total10k: 1275, sfacTotal: 758, farmers: 535725, women100: 48, women50: 63, equityGrant: 775, trainings: 4946, exposure: 1656 },
    { state: "Andhra Pradesh", total10k: 714, sfacTotal: 232, farmers: 170647, women100: 228, women50: 45, equityGrant: 227, trainings: 3111, exposure: 809 },
    { state: "Bihar", total10k: 696, sfacTotal: 305, farmers: 245920, women100: 84, women50: 77, equityGrant: 312, trainings: 2705, exposure: 881 },
    { state: "Madhya Pradesh", total10k: 642, sfacTotal: 348, farmers: 299618, women100: 69, women50: 43, equityGrant: 462, trainings: 2178, exposure: 826 },
    { state: "Telangana", total10k: 617, sfacTotal: 116, farmers: 148323, women100: 359, women50: 20, equityGrant: 212, trainings: 1744, exposure: 814 },
    { state: "Maharashtra", total10k: 589, sfacTotal: 213, farmers: 281954, women100: 92, women50: 16, equityGrant: 414, trainings: 4279, exposure: 1459 },
    { state: "Rajasthan", total10k: 589, sfacTotal: 225, farmers: 250513, women100: 76, women50: 9, equityGrant: 414, trainings: 2669, exposure: 768 },
    { state: "Odisha", total10k: 471, sfacTotal: 153, farmers: 200292, women100: 102, women50: 89, equityGrant: 294, trainings: 1994, exposure: 596 },
    { state: "Tamil Nadu", total10k: 465, sfacTotal: 90, farmers: 190136, women100: 60, women50: 111, equityGrant: 337, trainings: 2893, exposure: 1052 },
    { state: "Assam", total10k: 429, sfacTotal: 176, farmers: 144312, women100: 78, women50: 70, equityGrant: 270, trainings: 1424, exposure: 446 },
    { state: "Gujarat", total10k: 426, sfacTotal: 137, farmers: 162116, women100: 30, women50: 5, equityGrant: 297, trainings: 4223, exposure: 1021 },
    { state: "West Bengal", total10k: 383, sfacTotal: 156, farmers: 141588, women100: 27, women50: 20, equityGrant: 177, trainings: 2664, exposure: 531 },
    { state: "Jharkhand", total10k: 367, sfacTotal: 93, farmers: 147514, women100: 117, women50: 60, equityGrant: 153, trainings: 1231, exposure: 425 },
    { state: "Karnataka", total10k: 351, sfacTotal: 52, farmers: 239421, women100: 61, women50: 12, equityGrant: 250, trainings: 2713, exposure: 805 },
    { state: "Jammu and Kashmir", total10k: 330, sfacTotal: 141, farmers: 58828, women100: 34, women50: 22, equityGrant: 131, trainings: 629, exposure: 311 },
    { state: "Chhattisgarh", total10k: 232, sfacTotal: 68, farmers: 93760, women100: 35, women50: 20, equityGrant: 128, trainings: 1015, exposure: 275 },
    { state: "Himachal Pradesh", total10k: 180, sfacTotal: 60, farmers: 51803, women100: 47, women50: 21, equityGrant: 113, trainings: 4064, exposure: 407 },
    { state: "Haryana", total10k: 179, sfacTotal: 119, farmers: 51941, women100: 24, women50: 2, equityGrant: 115, trainings: 715, exposure: 243 },
    { state: "Kerala", total10k: 176, sfacTotal: 44, farmers: 51332, women100: 2, women50: 1, equityGrant: 104, trainings: 1107, exposure: 287 },
    { state: "Arunachal Pradesh", total10k: 171, sfacTotal: 39, farmers: 24659, women100: 23, women50: 58, equityGrant: 72, trainings: 347, exposure: 149 },
    { state: "Uttarakhand", total10k: 162, sfacTotal: 43, farmers: 50962, women100: 19, women50: 56, equityGrant: 115, trainings: 978, exposure: 224 },
    { state: "Punjab", total10k: 152, sfacTotal: 77, farmers: 44613, women100: 11, women50: 6, equityGrant: 50, trainings: 480, exposure: 137 },
    { state: "Nagaland", total10k: 88, sfacTotal: 8, farmers: 21515, women100: 8, women50: 30, equityGrant: 77, trainings: 390, exposure: 96 },
    { state: "Manipur", total10k: 78, sfacTotal: 9, farmers: 22654, women100: 4, women50: 31, equityGrant: 54, trainings: 281, exposure: 90 },
    { state: "Meghalaya", total10k: 67, sfacTotal: 13, farmers: 7324, women100: 11, women50: 35, equityGrant: 42, trainings: 183, exposure: 66 },
    { state: "Tripura", total10k: 59, sfacTotal: 22, farmers: 13669, women100: 6, women50: 8, equityGrant: 45, trainings: 176, exposure: 65 },
    { state: "Mizoram", total10k: 49, sfacTotal: 14, farmers: 10730, women100: 0, women50: 8, equityGrant: 35, trainings: 159, exposure: 67 },
    { state: "Ladakh", total10k: 23, sfacTotal: 0, farmers: 1313, women100: 4, women50: 5, equityGrant: 2, trainings: 22, exposure: 6 },
    { state: "Sikkim", total10k: 15, sfacTotal: 0, farmers: 2132, women100: 0, women50: 2, equityGrant: 8, trainings: 29, exposure: 8 },
    { state: "Goa", total10k: 8, sfacTotal: 0, farmers: 2275, women100: 0, women50: 1, equityGrant: 4, trainings: 129, exposure: 14 },
    { state: "Andaman & Nicobar", total10k: 7, sfacTotal: 0, farmers: 1196, women100: 3, women50: 2, equityGrant: 3, trainings: 26, exposure: 16 },
    { state: "Puducherry", total10k: 6, sfacTotal: 0, farmers: 2452, women100: 1, women50: 1, equityGrant: 1, trainings: 43, exposure: 13 },
    { state: "Dadra & Nagar Haveli", total10k: 2, sfacTotal: 0, farmers: 0, women100: 0, women50: 0, equityGrant: 0, trainings: 0, exposure: 0 },
    { state: "Lakshadweep", total10k: 2, sfacTotal: 0, farmers: 119, women100: 0, women50: 0, equityGrant: 1, trainings: 6, exposure: 1 }
  ],

  // Featured CBBO Case Studies & Documented CBBO-FPO Mappings (SFAC Annual Report 2024-25 + Registry)
  cbboProfiles: [
    {
      cbboName: "Arunodaya Sarveshwari LokKalyan Samiti",
      ia: "SFAC",
      state: "Madhya Pradesh",
      category: "Empanelled NGO / Social Enterprise CBBO",
      fposShown: 1,
      focus: "Beekeeping & Honey Processing, Cereals & Pulses",
      fpos: [
        {
          name: "Moyakheda Farm Producer Company Limited",
          location: "Mahidpur Block, Ujjain, MP",
          incorporation: "22 March 2022",
          shareholders: 643,
          villages: 11,
          equityGrant: "Rs. 12.40 Lakh (Paid-up: Rs. 25.60L)",
          revenue: "Rs. 7.85 Crore",
          activities: "Honey & beekeeping, input supply, wheat, soyabean, makka, chana"
        }
      ]
    },
    {
      cbboName: "CISSA (Centre for Innovation in Science & Social Action)",
      ia: "SFAC",
      state: "Kerala",
      category: "Research & Technical CBBO",
      fposShown: 1,
      focus: "Horticulture, Value-Added Foods & AgTech Drones",
      fpos: [
        {
          name: "Gram Samrudhi Farmer Producer Company Limited",
          location: "Parassala Block, Thiruvananthapuram, Kerala",
          incorporation: "29 July 2021",
          shareholders: 552,
          villages: 6,
          equityGrant: "Rs. 10.18 Lakh (Paid-up: Rs. 21.18L)",
          revenue: "Rs. 2.99 Crore",
          activities: "Input shop, animal feeds, custom hiring, drone spraying (240 ha), ONDC & tapioca/banana processing"
        }
      ]
    },
    {
      cbboName: "BKSL",
      ia: "SFAC",
      state: "Bihar",
      category: "Empanelled Cluster CBBO",
      fposShown: 1,
      focus: "Cereals, Custom Hiring & Digital Market Linkages",
      fpos: [
        {
          name: "MinapurKisan Producer Company Limited",
          location: "Minapur Block, Muzaffarpur, Bihar",
          incorporation: "1 April 2021",
          shareholders: 812,
          villages: 20,
          equityGrant: "Rs. 15.00 Lakh (Share Capital: Rs. 15L)",
          revenue: "Rs. 4.41 Crore",
          activities: "Maize, wheat, paddy aggregation, wheat dalia processing, ONDC, e-NAM, NCCF & NSC supply"
        }
      ]
    },
    {
      cbboName: "Wellnext Seeds India Pvt. Ltd.",
      ia: "SFAC",
      state: "Uttar Pradesh",
      category: "Agri-Input & Value Chain CBBO",
      fposShown: 1,
      focus: "Millets, Super Seeds & Integrated Pack House",
      fpos: [
        {
          name: "Svapan Farmer Producer Company Limited",
          location: "Deegh Block, Bhadohi, UP",
          incorporation: "7 April 2023",
          shareholders: 1012,
          villages: 18,
          equityGrant: "Rs. 15.00 Lakh (Paid-up: Rs. 30.00L)",
          revenue: "Rs. 1.23 Crore",
          activities: "Wheat, rice, flax, quinoa, sorghum; ragi/jowar/bajra cookies & dalia; ONDC & FSSAI licensed"
        }
      ]
    },
    {
      cbboName: "Access Development Services",
      ia: "SFAC",
      state: "Rajasthan",
      category: "National Livelihoods & Agribusiness CBBO",
      fposShown: 1,
      focus: "Seed Spices (Fennel & Cumin) & Value-Added Branding",
      fpos: [
        {
          name: "Bilara Agro Producer Company Limited",
          location: "Bilara Block, Jodhpur, Rajasthan",
          incorporation: "12 March 2021",
          shareholders: 750,
          villages: 8,
          equityGrant: "Rs. 5.22 Lakh (Paid-up: Rs. 10.44L)",
          revenue: "Rs. 3.59 Crore",
          activities: "IPM fennel & cumin procurement, Mukhwas niche branding, NABKISAN credit, Spices Board commended"
        }
      ]
    },
    {
      cbboName: "AFARM (Action for Agricultural Renewal in Maharashtra)",
      ia: "SFAC / NABARD",
      state: "Maharashtra",
      category: "Resource & Cluster Promoting Institution",
      fposShown: 5,
      focus: "Pulses, Soyabean & Oilseeds (Marathwada Cluster)",
      fpos: [
        { name: "Jaylaxmi Farmers Producer Company Ltd.", location: "Osmanabad, Maharashtra", incorporation: "26 July 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Credit: BOI & BOM", revenue: "Active Mandi & Warehouse", activities: "Soyabean, Gram, Tur procurement & input licenses" },
        { name: "Nagraj Agri & Farmers Producer Company Ltd.", location: "Ausa, Latur, Maharashtra", incorporation: "27 Aug 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Mandi Licensed", revenue: "Active", activities: "Soyabean, Gram, Tur marketing" },
        { name: "Phinix Farmers Producer Company Ltd.", location: "Shirur-Anantpal, Latur, Maharashtra", incorporation: "25 July 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Owned Warehouse", revenue: "Sorting & Grading", activities: "Gram, Tur, Jowar aggregation & marketing" },
        { name: "Shivguru Farmers Producer Company Ltd.", location: "Osmanabad, Maharashtra", incorporation: "23 July 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Credit: Bank of India", revenue: "Sorting & Grading", activities: "Soyabean, Gram, Tur full input & mandi trading" },
        { name: "Viksit Farmers Producer Company Ltd.", location: "Nilanga, Latur, Maharashtra", incorporation: "4 July 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Rented Warehouse", revenue: "Sorting & Grading", activities: "Collective sorting, grading & regional sales" }
      ]
    },
    {
      cbboName: "IFFDC (Indian Farm Forestry Development Cooperative) & BASIX",
      ia: "SFAC / NCDC",
      state: "Madhya Pradesh, Haryana & Maharashtra",
      category: "Cooperative & Livelihood CBBOs",
      fposShown: 6,
      focus: "Pulses, Vegetables, Cotton & Soyabean",
      fpos: [
        { name: "Jagriti Dalhan Producer Company Ltd.", location: "Sagar, Madhya Pradesh", incorporation: "18 Mar 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Applied Licenses", revenue: "Active", activities: "Gram, Soyabean, Wheat" },
        { name: "Bundelkhand Kisan (Dalhan) Producer Company Ltd.", location: "Sagar, Madhya Pradesh", incorporation: "22 Mar 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Rented Warehouse", revenue: "Sorting & Grading", activities: "Soyabean, Gram, Wheat" },
        { name: "Kurukshetra Vegetable Producer Company", location: "Kurukshetra, Haryana", incorporation: "20 June 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Input Licensed", revenue: "Active", activities: "Potato, Peas, Cabbage" },
        { name: "Amravati Soya & Cotton Producer Company Ltd.", location: "Chandur Railway, Amravati, MH", incorporation: "21 Dec 2011", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Owned Grading Unit", revenue: "Sorting & Grading", activities: "Soya & Cotton processing/grading" },
        { name: "Pragatishil Vipnan Sahakari Samiti Maryadit", location: "Arang, Raipur, Chhattisgarh", incorporation: "30 Apr 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "FIG Credit", revenue: "Active", activities: "Okra, Brinjal, Bitter Gourd" },
        { name: "Upraudh Kisan Producer Company Ltd.", location: "Bara, Prayagraj, UP", incorporation: "5 June 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Registered FPC", revenue: "Active", activities: "Cereals & Pulses" }
      ]
    },
    {
      cbboName: "Cohesion Foundation & ASA (Action for Social Advancement)",
      ia: "SFAC",
      state: "Gujarat & Madhya Pradesh",
      category: "Tribal & Rainfed Agriculture CBBOs",
      fposShown: 6,
      focus: "Tribal Crops, Castor, Cotton, Pulses & Maize",
      fpos: [
        { name: "Adivasi Khet Vikas Sangathan Producer Company Ltd.", location: "Naswadi, Vadodara, Gujarat", incorporation: "19 May 2013", shareholders: "Tribal Farmers", villages: "Cluster", equityGrant: "Sorting & Grading", revenue: "Active", activities: "Cotton, Tur, Maize" },
        { name: "Kankrej Kisan Producer Company Ltd.", location: "Thara, Banaskantha, Gujarat", incorporation: "3 May 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Registered FPC", revenue: "Active", activities: "Regional crops & inputs" },
        { name: "Vadhiyar Kisan Producer Company Ltd.", location: "Santalpur, Patan, Gujarat", incorporation: "14 May 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Sorting & Grading", revenue: "Active", activities: "Castor Seed, Cotton, Guar Seed" },
        { name: "Vagad Kisan Producer Company Ltd.", location: "Rapar, Kachchh, Gujarat", incorporation: "13 Jun 2013", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Registered FPC", revenue: "Active", activities: "Castor Seed, Guar Seed, Cumin Seed" },
        { name: "Dada Darbar Producer Company Ltd.", location: "Tendukheda, Narsinghpur, MP", incorporation: "9 Sep 2011", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Registered FPC", revenue: "Active", activities: "Pulses & Grains" },
        { name: "Dindori Tribal Farmer Producer Company", location: "Dindori, Madhya Pradesh", incorporation: "27 Apr 2013", shareholders: "Tribal Farmers", villages: "Cluster", equityGrant: "Owned Spraying Machinery", revenue: "Sorting & Grading", activities: "Paddy, Wheat, Gram" }
      ]
    },
    {
      cbboName: "DHAN Foundation, Bedroc & CSA (Centre for Sustainable Agriculture)",
      ia: "SFAC / NABARD",
      state: "Tamil Nadu & Andhra Pradesh/Telangana",
      category: "Sustainable Agri & Value Chain CBBOs",
      fposShown: 6,
      focus: "Organic Produce, Millets, Coconut, Cashew & Dairy",
      fpos: [
        { name: "Chettinad Producer Company Limited", location: "Karaikudi, Sivagangai, TN", incorporation: "CIN U93000TN2010PTC074592", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Registered", revenue: "Active", activities: "Rural enterprise & farm goods" },
        { name: "Small And Marginal Agriculture (India) PCL", location: "Shenoy Nagar, Chennai, TN", incorporation: "CIN U01100TN2011PTC083514", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Registered", revenue: "Active", activities: "Agri aggregation" },
        { name: "Nagai Agricultural Producer Company Limited", location: "Nagapattinam, Tamil Nadu", incorporation: "CIN U01404TN2010PTC075763", shareholders: "Member-owned", villages: "Cluster", equityGrant: "Registered", revenue: "Active", activities: "Delta crops & marketing" },
        { name: "Nagai Milk Producer Company Limited", location: "Nagapattinam, Tamil Nadu", incorporation: "CIN U01131TN2010PTC075759", shareholders: "Dairy Farmers", villages: "Cluster", equityGrant: "Registered", revenue: "Active", activities: "Milk procurement & dairy" },
        { name: "Sahaja Aharam Consumers Cooperative", location: "Hyderabad, AP/Telangana", incorporation: "Cooperative", shareholders: "Organic Farmers", villages: "Cluster", equityGrant: "Full Input Licenses", revenue: "Active", activities: "Paddy, Tur, Turmeric (Organic)" },
        { name: "Swayam Krushi Organic Cooperative", location: "Hyderabad, AP/Telangana", incorporation: "Cooperative", shareholders: "Organic Farmers", villages: "Cluster", equityGrant: "Full Input Licenses", revenue: "Active", activities: "Paddy, Tur, Jowar (Organic)" }
      ]
    }
  ],

  // Statewise FPO Registry Sample (Extracted across all states from attached 30-page Statewise FPO Registry PDF + 2024-25 SFAC Report)
  fpoRegistry: [
    { sno: 1, state: "Andhra Pradesh", name: "Angadi Raichur Farmer Services Producer Company Ltd.", form: "Producer Company", regNo: "U01407AP2013PTC091017", date: "14-Nov-13", location: "Kodangal, Mahabubnagar", crops: "Tur, Cotton, Paddy", credit: "SBI", warehouse: "Rented" },
    { sno: 2, state: "Andhra Pradesh", name: "Hasnabad Farmer Services Producer Company Ltd.", form: "Producer Company", regNo: "U01400AP2013PTC086661", date: "27-Mar-13", location: "Kodangal, Mahabubnagar", crops: "Tur, Groundnut, Cotton", credit: "SBI", warehouse: "Rented" },
    { sno: 4, state: "Andhra Pradesh", name: "Karshaka Mitra Mutually Aided Cooperative Society", form: "Producer Company", regNo: "U01403AP2013PTC090509", date: "11-Oct-13", location: "Tamsi, Adilabad", crops: "Tur, Cotton, Gram", credit: "NA", warehouse: "Owned" },
    { sno: 12, state: "Andhra Pradesh", name: "Chetna Organic Agriculture Producer Company Ltd.", form: "Producer Company", regNo: "Registered", date: "—", location: "Hyderabad", crops: "Paddy, Maize, Cotton", credit: "—", warehouse: "—" },
    { sno: 50, state: "Arunachal Pradesh", name: "Papumpare Vegetables Farmer's Co-operative Society Ltd.", form: "Cooperative", regNo: "AP/596/29.4.13", date: "29-Apr-13", location: "Naharlagun, Papumpare", crops: "Vegetables", credit: "—", warehouse: "—" },
    { sno: 51, state: "Arunachal Pradesh", name: "Lower Subansiri Vegetables Grower's Co-operative Society", form: "Cooperative", regNo: "AP/597/29.4.13", date: "29-Apr-13", location: "Ziro, Lower Subansiri", crops: "Vegetables", credit: "—", warehouse: "—" },
    { sno: 52, state: "Bihar", name: "Farmer Agro Producer Company Ltd.", form: "Producer Company", regNo: "U01119BR2013PTC020541", date: "13-Jun-13", location: "S.K. Nagar, Patna", crops: "Potato, Tomato, Cauliflower", credit: "—", warehouse: "—" },
    { sno: 53, state: "Bihar", name: "Nalanda Agro Producer Company Ltd.", form: "Producer Company", regNo: "U01400BR2013PTC020599", date: "29-Jun-13", location: "Sohsarai, Nalanda", crops: "Wheat, Lentil", credit: "—", warehouse: "—" },
    { sno: 54, state: "Bihar", name: "MinapurKisan Producer Company Limited (SFAC Case Study)", form: "Producer Company", regNo: "SFAC 10K Scheme", date: "01-Apr-21", location: "Minapur, Muzaffarpur", crops: "Maize, Wheat, Paddy, Dalia", credit: "Equity Grant Rs.15L", warehouse: "Active (Rs.4.41 Cr)" },
    { sno: 59, state: "Chhattisgarh", name: "Pragatishil Vipnan Sahakari Samiti Maryadit", form: "Cooperative Society", regNo: "328/30 April 2013", date: "30-Apr-13", location: "Arang, Raipur", crops: "Okra, Brinjal, Bitter Gourd", credit: "FIGs", warehouse: "Proposed" },
    { sno: 61, state: "Chhattisgarh", name: "Prakriti Jareli Farmers Producer Company (NBHM)", form: "Producer Company", regNo: "SFAC NBHM", date: "2022", location: "Bilaspur, Chhattisgarh", crops: "Honey, Litchi & Jamun Honey, Wax", credit: "NBHM Rs.126.16L", warehouse: "10 MT/day Plant + Cold Storage" },
    { sno: 65, state: "Delhi", name: "Dabar Kishan Society New Delhi", form: "Cooperative Society", regNo: "S/RS/SW/0915/2013", date: "18-Mar-13", location: "Ghumanheram, West Delhi", crops: "Cabbage, Bottle Guard, Wheat", credit: "—", warehouse: "Rented" },
    { sno: 67, state: "Delhi", name: "Spv Organic Agro Producers Private Ltd.", form: "Producer Company", regNo: "U01403DL2013PTC252771", date: "25-May-13", location: "Palla, Alipur, New Delhi", crops: "Spinach, Brinjal, Radish", credit: "—", warehouse: "Owned" },
    { sno: 68, state: "Gujarat", name: "Adivasi Khet Vikas Sangathan Producer Company Ltd.", form: "Producer Company", regNo: "U0120GJ2013PTC074964", date: "19-May-13", location: "Naswadi, Vadodara", crops: "Cotton, Tur, Maize", credit: "—", warehouse: "—" },
    { sno: 83, state: "Gujarat", name: "Amalsad Vibhag Vividh Karyakari Sahakari Mandali Ltd.", form: "Cooperative / PC", regNo: "8005", date: "—", location: "Gandevi, Navsari", crops: "Sapota, Green Mango, Paddy", credit: "—", warehouse: "—" },
    { sno: 88, state: "Gujarat", name: "Babra Khedut Utpadak & Rupantar Sahakari Mandali", form: "Cooperative", regNo: "10K FPO Top Performer", date: "FY25 Top #1", location: "Amreli, Gujarat", crops: "Agri Commodities", credit: "Active", warehouse: "Rs. 102 Cr Turnover (FY25)" },
    { sno: 90, state: "Haryana", name: "Karnal Vegetable Producer Company", form: "Producer Company", regNo: "U01400HR2013PTC049934", date: "26-Jul-13", location: "New Grain Market, Karnal", crops: "Potato, Tomato, Capsicum", credit: "—", warehouse: "—" },
    { sno: 99, state: "Haryana", name: "The Sonipat Vegetable Producer Co. Ltd.", form: "Producer Company", regNo: "B81226003", date: "23-Aug-13", location: "Kabirpur, Sonipat", crops: "Potato, Wheat, Sweet Corn", credit: "—", warehouse: "Rented" },
    { sno: 103, state: "Jammu & Kashmir", name: "Jammu Oriental Fresh Farmers Producer Co Ltd.", form: "Producer Company", regNo: "U01122JK2012PTC003580", date: "6-Jan-13", location: "Trikuta Nagar, Jammu", crops: "Fresh Produce", credit: "—", warehouse: "Machinery Rented" },
    { sno: 104, state: "Jammu & Kashmir", name: "Zazna Farmers Producer Company Limited (e-NAM 1.2)", form: "Producer Company", regNo: "SFAC e-NAM", date: "Active FY25", location: "Ganderbal, J&K", crops: "Apple, Cherry, Walnut, Almond, Honey", credit: "e-NAM 1.2 Retail", warehouse: "Direct Digital Trade" },
    { sno: 106, state: "Jharkhand", name: "Kanke Fresh And Green Vegetable Producer Company Ltd.", form: "Producer Company", regNo: "SRN B72190606", date: "7-Apr-13", location: "Pithoria, Ranchi", crops: "Cauliflower, Cabbage, French Bean", credit: "—", warehouse: "Owned" },
    { sno: 114, state: "Karnataka", name: "Jai Kisan Souhardha Multipurpose Co Operative Ltd.", form: "Cooperative Society", regNo: "UNB/V4/SS/RegNo/954/2012-13", date: "15-Sep-12", location: "Bhalki, Bidar", crops: "Soyabean, Tur, Gram", credit: "NABARD Bank", warehouse: "Owned" },
    { sno: 120, state: "Karnataka", name: "Nandhi Farmer Producer Company Ltd.", form: "Producer Company", regNo: "U01403KA2014PTC073150", date: "21-Jan-14", location: "Kirange, Gulbarga", crops: "Tur, Gram, Jowar", credit: "—", warehouse: "—" },
    { sno: 126, state: "Kerala", name: "Indian Organic Farmers PCL", form: "Producer Company", regNo: "Registered", date: "—", location: "Alwaye, Ernakulam", crops: "Organic Spices & Crops", credit: "—", warehouse: "—" },
    { sno: 129, state: "Kerala", name: "Gram Samrudhi Farmer Producer Company Limited", form: "Producer Company", regNo: "SFAC 10K Scheme", date: "29-Jul-21", location: "Parassala, Thiruvananthapuram", crops: "Banana, Tapioca, Vegetables, Mushrooms", credit: "SBI / UCO / Canara", warehouse: "Drones & ONDC (Rs.2.99 Cr)" },
    { sno: 137, state: "Madhya Pradesh", name: "Bundelkhand Kisan (Dalhan) Producer Company Ltd.", form: "Producer Company", regNo: "U01400MP2013PTC030369", date: "22-Mar-13", location: "Mokalpur, Sagar", crops: "Soyabean, Gram, Wheat", credit: "—", warehouse: "Rented" },
    { sno: 158, state: "Madhya Pradesh", name: "Moyakheda Farm Producer Company Limited", form: "Producer Company", regNo: "SFAC 10K Scheme", date: "22-Mar-22", location: "Mahidpur, Ujjain", crops: "Honey, Wheat, Soyabean, Makka, Chana", credit: "Equity Grant Rs.12.4L", warehouse: "Rs. 7.85 Cr Revenue" },
    { sno: 170, state: "Maharashtra", name: "Jaylaxmi Farmers Producer Company Ltd.", form: "Producer Company", regNo: "U01403MH2013PTC246228", date: "26-Jul-13", location: "Paduli, Osmanabad", crops: "Soyabean, Gram, Tur", credit: "BOI & Bank of Maharashtra", warehouse: "Rented" },
    { sno: 195, state: "Maharashtra", name: "Wani Vibhag Navyug Shetkari Producer Company Ltd.", form: "Producer Company", regNo: "U01403MH2013PTC244519", date: "14-Jun-13", location: "Wani, Yavatmal", crops: "Tur, Soyabean, Gram", credit: "—", warehouse: "Owned" },
    { sno: 204, state: "Manipur", name: "Bishnupur Veg. Farmers Cooperative Society", form: "Cooperative Society", regNo: "No. 46", date: "1-Oct-12", location: "Moirang, Bishnupur", crops: "Vegetables", credit: "—", warehouse: "—" },
    { sno: 206, state: "Meghalaya", name: "Iai-Jyrngam Vegetables Farmers Co-Operative Society Ltd.", form: "Cooperative", regNo: "SHILL/2 OF 2013", date: "21-Mar-13", location: "Mylliem, East Khasi Hills", crops: "Potato, Beans, Cabbage", credit: "—", warehouse: "Power Tiller Owned" },
    { sno: 208, state: "Nagaland", name: "Bade Area Agri Allied Cooperative Society", form: "Cooperative Society", regNo: "9302/09-10/9697-705", date: "12-Aug-09", location: "Bade Basa, Dimapur", crops: "Agri Allied", credit: "—", warehouse: "—" },
    { sno: 209, state: "Odisha", name: "Rasulpur Green Vegetable Farmer Producer Company Ltd.", form: "Producer Company", regNo: "U01400OR2013PTC016853", date: "10-May-13", location: "Dharmasala, Jajpur", crops: "Cauliflower, Tomato, Cucumber", credit: "—", warehouse: "—" },
    { sno: 211, state: "Odisha", name: "Padmeswar Farmers Producer Company Ltd.", form: "Producer Company", regNo: "e-NAM Top Trader", date: "2021", location: "Anandpur, Keonjhar", crops: "Pumpkin, Brinjal, Watermelon, Mango, Veg", credit: "e-NAM", warehouse: "Sold 15,761 qtls (Rs.1.82 Cr)" },
    { sno: 220, state: "Punjab", name: "Jalandhar Vegetable Producer Company Ltd.", form: "Producer Company", regNo: "U01403PB2013PTC037758", date: "23-Jul-13", location: "Nakodar, Jalandhar", crops: "Tomato, Peas, Cauliflower", credit: "—", warehouse: "Tractor & Cutter Owned" },
    { sno: 224, state: "Rajasthan", name: "Veer Biggaji Dalhan Utpadak Sangh Private Ltd.", form: "Producer Company", regNo: "U01122RJ2013PTC043858", date: "8-Sep-13", location: "Tejrasar, Bikaner", crops: "Guar, Wheat, Mustard Seed", credit: "—", warehouse: "—" },
    { sno: 239, state: "Rajasthan", name: "Bilara Agro Producer Company Limited", form: "Producer Company", regNo: "SFAC 10K Scheme", date: "12-Mar-21", location: "Bilara, Jodhpur", crops: "IPM Fennel, Cumin, Mukhwas", credit: "NABKISAN Rs. 5L", warehouse: "Rs. 3.59 Cr Revenue" },
    { sno: 244, state: "Sikkim", name: "Himalaya Kalyan Farmers Producer Organization-South", form: "Producer Company", regNo: "Registered", date: "—", location: "South Sikkim", crops: "Organic Hill Crops", credit: "—", warehouse: "—" },
    { sno: 247, state: "Tamil Nadu", name: "Erode Precision Farm Producers Company Ltd.", form: "Producer Company", regNo: "U51909TZ2008PTC014802", date: "16-Oct-08", location: "Sivagiri, Erode", crops: "Turmeric, Paddy, Banana, Pomegranate", credit: "Bank", warehouse: "Rented" },
    { sno: 276, state: "Tamil Nadu", name: "Nachalur Farmers Producer Company Limited", form: "Producer Company", regNo: "U01400TN2012PTC086262", date: "12-Jun-12", location: "Kulithalai, Karur", crops: "Paddy, Sesame, Sorghum, Pulses, Banana", credit: "ADFT (NABARD)", warehouse: "Rented + Seed Machine" },
    { sno: 298, state: "Tripura", name: "Shubhadeep Vegetable Growers Co-operative Society Ltd.", form: "Cooperative Society", regNo: "No-2175", date: "18-May-13", location: "Bishalgarh, Sepahijala", crops: "Vegetables", credit: "—", warehouse: "—" },
    { sno: 303, state: "Uttar Pradesh", name: "Svapan Farmer Producer Company Limited", form: "Producer Company", regNo: "SFAC 10K Scheme", date: "07-Apr-23", location: "Deegh, Bhadohi", crops: "Wheat, Rice, Millets, Cookies, Flax", credit: "Equity Grant Rs.15L", warehouse: "Pack House & ONDC (Rs.1.23 Cr)" },
    { sno: 310, state: "Uttar Pradesh", name: "Aryahi Farmers Producer Company Ltd. (NBHM)", form: "Producer Company", regNo: "SFAC NBHM", date: "2021", location: "Saharanpur, UP", crops: "Multiflora/Litchi/Jamun Honey, Beeswax", credit: "NBHM Rs.286.31L + SBI", warehouse: "20 MT/day Plant + ONDC (Rs.2 Cr)" },
    { sno: 330, state: "Uttarakhand", name: "Maarkhamgrand Producer Company Ltd.", form: "Producer Company", regNo: "U01403UR2013PTC000747", date: "17-Jun-13", location: "Doiwala, Dehradun", crops: "Tomato, Potato, French Bean", credit: "—", warehouse: "Rented" },
    { sno: 373, state: "West Bengal", name: "Barasat Progressive Vegetable Producer Company Ltd.", form: "Producer Company", regNo: "U01403WB2012PTC189107", date: "12-Dec-12", location: "Barasat Sadar, North 24 Parganas", crops: "Tomato, Potato, Paddy", credit: "—", warehouse: "—" },
    { sno: 378, state: "West Bengal", name: "Howrah Agro Producer Company Ltd.", form: "Producer Company", regNo: "U01403WB2013PTC190438", date: "8-Feb-13", location: "Uluberia, Howrah", crops: "Tomato, Brinjal, Cauliflower", credit: "Bank of Baroda", warehouse: "Power Spray & Drip Pump Owned" }
  ],

  // State Level Producer Companies (SLPCs) & Federations promoted/supported by SFAC
  federations: [
    {
      name: "MAHA Farmers Producer Company Limited (MAHAFPC)",
      level: "State Level Federation (SLPC)",
      state: "Maharashtra",
      location: "Pune, Maharashtra",
      legalForm: "Producer Company (Companies Act)",
      focus: "Pulses (Tur, Gram), Soyabean, Onion, Maize & MSP/PSF Procurement",
      role: "Flagship state-level consortium of Maharashtra FPOs aggregating pulses, oilseeds, and onions, linking member FPOs to NAFED/SFAC procurement and corporate buyers.",
      website: "https://www.mahafpc.org/"
    },
    {
      name: "GUJPRO Agribusiness Consortium Producer Company Limited",
      level: "State Level Federation (SLPC)",
      state: "Gujarat",
      location: "Ahmedabad, Gujarat",
      legalForm: "Producer Company (Companies Act)",
      focus: "Groundnut, Cotton, Cumin, Mango, Pulses & Sesame",
      role: "Apex Gujarat federation of FPOs enabling bulk input procurement, groundnut/oilseed grading, branded consumer sales, and institutional credit.",
      website: "https://gujpro.in/"
    },
    {
      name: "Madhya Bharat Consortium of Farmer Producers Company Limited (MBCFPCL)",
      level: "State Level Federation (SLPC)",
      state: "Madhya Pradesh",
      location: "Bhopal, Madhya Pradesh",
      legalForm: "Producer Company (Companies Act)",
      focus: "Wheat, Soyabean, Gram, Pulses, Seed Production & Honey",
      role: "State consortium of MP FPOs featured in SFAC's Credit Guarantee records (IDBI Bank CG cover), supporting input retailing, MSP procurement, and value addition.",
      website: "https://sfacindia.com/State-Level-Producer-Companies.aspx"
    },
    {
      name: "All Rajasthan Small Farmer Agri Producer Company Limited",
      level: "State Level Federation (SLPC)",
      state: "Rajasthan",
      location: "Jaipur, Rajasthan",
      legalForm: "Producer Company (Companies Act)",
      focus: "Mustard, Guar, Cumin, Fennel, Gram & Bajra",
      role: "State umbrella federation coordinating Rajasthan's arid and semi-arid FPOs for collective seed-spice marketing, MSP linkages, and policy advocacy.",
      website: "https://sfacindia.com/State-Level-Producer-Companies.aspx"
    },
    {
      name: "UPPRO Kisan Producer Company Limited",
      level: "State Level Federation (SLPC)",
      state: "Uttar Pradesh",
      location: "Lucknow, Uttar Pradesh",
      legalForm: "Producer Company (Companies Act)",
      focus: "Wheat, Paddy, Potato, Pulses, Vegetables & Honey",
      role: "State-level federation serving India's largest FPO state (1,275 FPOs under 10K scheme), facilitating bulk fertilizers/seeds, warehousing, and e-NAM trade.",
      website: "https://sfacindia.com/State-Level-Producer-Companies.aspx"
    },
    {
      name: "Tamil Nadu Consortium of Farmers Producer Company Limited",
      level: "State Level Federation (SLPC)",
      state: "Tamil Nadu",
      location: "Chennai / Madurai, Tamil Nadu",
      legalForm: "Producer Company (Companies Act)",
      focus: "Millets, Coconut, Banana, Turmeric, Pulses & Cotton",
      role: "State umbrella consortium aggregating southern precision-farm and millet FPOs for processing, export readiness, and retail branding.",
      website: "https://sfacindia.com/State-Level-Producer-Companies.aspx"
    },
    {
      name: "Telangana Rythu Producer Company Limited (TRPCL)",
      level: "State Level Federation (SLPC)",
      state: "Telangana",
      location: "Hyderabad, Telangana",
      legalForm: "Producer Company (Companies Act)",
      focus: "Turmeric, Cotton, Paddy, Red Gram & Maize",
      role: "State-level consortium supporting Telangana's high-performing cooperative & women-led FPOs (359 all-women FPOs) with collective market access.",
      website: "https://sfacindia.com/State-Level-Producer-Companies.aspx"
    },
    {
      name: "Bangia Farmer Producer Company Limited",
      level: "State Level Federation (SLPC)",
      state: "West Bengal",
      location: "Kolkata, West Bengal",
      legalForm: "Producer Company (Companies Act)",
      focus: "Vegetables, Potato, Paddy, Jute & Sundarban Honey",
      role: "State consortium linking West Bengal horticultural and apiculture FPOs with urban retail hubs, ONDC, and cold-chain logistics.",
      website: "https://sfacindia.com/State-Level-Producer-Companies.aspx"
    },
    {
      name: "National Association for Farmer Producer Organisations (NAFPO)",
      level: "National Multi-Stakeholder Ecosystem Platform",
      state: "Pan-India",
      location: "New Delhi",
      legalForm: "Non-Profit National Ecosystem Association",
      focus: "Policy Advocacy, Capacity Building, Credit & Federation Standards",
      role: "National platform uniting FPOs, CBBOs, federations, financial institutions, and policymakers to scale resilient farmer-owned enterprises across India.",
      website: "https://www.nafpo.in/"
    }
  ]
};
