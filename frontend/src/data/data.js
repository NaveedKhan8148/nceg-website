// ─── NAVIGATION DATA ───────────────────────────────────────────────
export const navItems = [
  { label: "Home", href: "#home" },
  {
    label: "Academics",
    children: [
      { label: "Academic Program", href: "#" },
      { label: "Courses", href: "#" },
      { label: "Academic Committee", href: "#" },
      { label: "Academic Work Plan", href: "#" },
      { label: "Graduate Studies Committee", href: "#" },
      { label: "Graduate Students Office", href: "#" },
      { label: "Students Guidelines", href: "#" },
      {
        label: "Students Section",
        children: [
          { label: "Students Academic Progress", href: "#" },
          { label: "Enrolled Students", href: "#" },
          { label: "Successful Ph.D. Graduates", href: "#" },
          { label: "Successful M.Phil Graduates", href: "#" },
          { label: "Successful M.S Graduates", href: "#" },
          { label: "Successful GIS Diploma Graduates", href: "#" },
        ],
      },
    ],
  },
  {
    label: "People",
    children: [
      { label: "Board of Governors", href: "#" },
      { label: "Faculty", href: "#" },
      { label: "Office Staff", href: "#" },
      { label: "Technical Staff", href: "#" },
    ],
  },
  {
    label: "Research",
    children: [
      { label: "Publications", href: "#" },
      { label: "Research Projects", href: "#" },
      { label: "Books/Special Volumes", href: "#" },
    ],
  },
  {
    label: "Prospective Students",
    children: [
      { label: "Admission Schedule", href: "#" },
      { label: "Eligibility Criteria", href: "#" },
      { label: "Fee Structure", href: "#" },
      { label: "Loan/Scholarships", href: "#" },
      { label: "Test Pattern", href: "#" },
      { label: "Hostel Facility", href: "#" },
    ],
  },
  {
    label: "Laboratories",
    children: [
      { label: "Scanning Electron Microscope (SEM)", href: "#" },
      { label: "Geochemistry", href: "#" },
      { label: "X-Ray Fluorescence (XRF)", href: "#" },
      { label: "X-Ray Diffractometre (XRD)", href: "#" },
      { label: "GIS/RS", href: "#" },
      { label: "Thin Section Cutting & Polishing", href: "#" },
      { label: "Geodesy", href: "#" },
      { label: "Gemology", href: "#" },
      { label: "Petroleum Geology", href: "#" },
      { label: "Environmental Soil Science", href: "#" },
      { label: "Paleontology", href: "#" },
      { label: "Hydro-Geophysics / Seismology", href: "#" },
      { label: "Geotechnical", href: "#" },
      { label: "Sedimentology & Palynology", href: "#" },
    ],
  },
  { label: "Online Library", href: "#" },
  { label: "Journal", href: "#" },
  { label: "G-SAG", href: "#" },
  { label: "Downloads", href: "#" },
];

// ─── STATS ─────────────────────────────────────────────────────────
export const stats = [
  { value: "50+", label: "Years of Excellence", icon: "🏛️" },
  { value: "14", label: "Research Laboratories", icon: "🔬" },
  { value: "200+", label: "Publications", icon: "📄" },
  { value: "500+", label: "Graduates", icon: "🎓" },
];

// ─── ONGOING PROJECTS ───────────────────────────────────────────────
export const ongoingProjects = [
  {
    id: 1,
    title: "Vulnerability Assessment of Swat, Dir and Chitral with respect to Earthquakes of Pamir-Hindu Kush Region",
    pi: "Dr. Khaista Rehman",
    sponsor: "PSF — PKR 3 Million",
    duration: "3 Years",
  },
  {
    id: 2,
    title: "Efficacy of Clay Minerals Sorbent for Toxic Elements and Antibiotic Removal from Industrial Effluents",
    pi: "Dr. Shah Rukh",
    sponsor: "NSLP-PSF — PKR 3.68 Million",
    duration: "3 Years",
  },
  {
    id: 3,
    title: "Production of Biogas from Organic Waste using Microbially Triggered Clay Mineral as an Accelerant",
    pi: "Dr. Shah Rukh",
    sponsor: "NLSP-PSF — PKR 4.03 Million",
    duration: "3 Years",
  },
  {
    id: 4,
    title: "GIS & Space Applications in Geosciences (G-SAG)",
    pi: "Dr. Muhammad Shafique",
    sponsor: "HEC, Pakistan — PKR 96 Million",
    duration: "3 Years",
  },
  {
    id: 5,
    title: "Climate Change Induced Multi-Hazard Risk Mitigation for Marginalized Communities along CPEC in Northern Pakistan",
    pi: "Dr. Muhammad Shafique",
    sponsor: "CPEC-CRG, HEC — PKR 18.5 Million",
    duration: "3 Years",
  },
  {
    id: 6,
    title: "Evaluation of Dynamic Soil Properties for Seismic Ground Response Analysis of Islamabad and Peshawar",
    pi: "Dr. Waqas Ahmad",
    sponsor: "NRPU, HEC — PKR 6.5 Million",
    duration: "3 Years",
  },
  {
    id: 7,
    title: "Arsenic and Heavy Metals in Poultry Feed, Meat and Manure",
    pi: "Dr. Said Muhammad",
    sponsor: "NRPU-HEC — PKR 4.3 Million",
    duration: "3 Years",
  },
];

// ─── LATEST RESEARCH ───────────────────────────────────────────────
export const latestResearch = [
  {
    id: 1,
    authors: "Rafi, M., Aktas, Y.D., Smars, P. et al.",
    title: "31 August 2025 Eastern Afghanistan Earthquake: A Joint Virtual Reconnaissance Report",
    journal: "EEFIT Report 2025",
    href: "https://www.istructe.org/resources/report/eefit-august-2025-afghanistan-earthquake-report/",
  },
  {
    id: 2,
    authors: "Razaq, M., Ali, A., Rehman, K., Hussain, M., & Amin, Y.",
    title: "Carbon Storage Assessment using Machine Learning Approaches in Qadirpur Gas Field, Pakistan",
    journal: "Acta Geophysica, 2025",
    href: "https://link.springer.com/article/10.1007/s11600-025-01649-8",
  },
  {
    id: 3,
    authors: "Huma Shakoor, Fahad Alshehri, Muhammad Shahab et al.",
    title: "Vulnerability and Risk Assessment of Lead (Pb) Concentrations in Drinking Water via Statistical and Geostatistical Analyses",
    journal: "Frontiers in Water, 2025",
    href: "https://www.frontiersin.org/journals/water/articles/10.3389/frwa.2025.1548110/full",
  },
  {
    id: 4,
    authors: "Butt, N. A., Khan, M. Y., Khattak, S. A. et al.",
    title: "Multi-disciplinary Investigation for Detection, Characterisation and Monitoring of Contamination from a Solid Waste Illegal Dumpsite, Peshawar",
    journal: "Geomatics, Natural Hazards and Risk, 2025",
    href: "#",
  },
  {
    id: 5,
    authors: "Tariq, M., Rashid, A., Khattak, S.A. et al.",
    title: "Hydrogeochemical Characteristics, Source Distribution, and Health Risk of High-Fluoride Groundwater in Swabi, Pakistan",
    journal: "Environmental Monitoring and Assessment, 2024",
    href: "https://link.springer.com/article/10.1007/s10661-024-13458-5",
  },
  {
    id: 6,
    authors: "Tanveer Ahmed, Khaista Rehman, Muhammad Shafique et al.",
    title: "Proxy-Based Vs30 Modelling of the Muzaffarabad, Northern Pakistan",
    journal: "Environmental Earth Sciences, 2024",
    href: "https://link.springer.com/article/10.1007/s12665-024-11502-8",
  },
];

// ─── NEWS UPDATES ──────────────────────────────────────────────────
export const newsUpdates = [
  {
    id: 1,
    date: "May 2026",
    tag: "Workshop",
    title: "Two-day International Workshop on Arsenic and Heavy Metals in Soil–Food Systems: Pathways and Impacts",
    isNew: true,
  },
  {
    id: 2,
    date: "Apr 2026",
    tag: "Recruitment",
    title: "Walk-In Interview — Mali Project",
    isNew: true,
  },
  {
    id: 3,
    date: "Apr 2026",
    tag: "Recruitment",
    title: "Walk-In Interview",
    isNew: true,
  },
  {
    id: 4,
    date: "Mar 2026",
    tag: "Journal",
    title: "JHES Vol 59(1), 2026 Now Available Online",
    isNew: true,
  },
  {
    id: 5,
    date: "Feb 2026",
    tag: "Conference",
    title: "8th International Conference — Earth Sciences Pakistan 2026",
    isNew: true,
  },
  {
    id: 6,
    date: "Dec 2025",
    tag: "Visit",
    title: "IRH Abu Dhabi Visit to NCEG",
    isNew: false,
  },
  {
    id: 7,
    date: "Nov 2025",
    tag: "Publication",
    title: "Book Released: 'Indus Water System'",
    isNew: false,
  },
  {
    id: 8,
    date: "Oct 2025",
    tag: "Journal",
    title: "JHES Volume 58(1), 2025 — Published",
    isNew: false,
  },
];

// ─── LABORATORIES ──────────────────────────────────────────────────
export const laboratories = [
  { name: "Scanning Electron Microscope", abbr: "SEM", icon: "🔬", color: "teal" },
  { name: "X-Ray Fluorescence Spectrometer", abbr: "XRF", icon: "⚡", color: "gold" },
  { name: "X-Ray Diffractometre", abbr: "XRD", icon: "🌀", color: "teal" },
  { name: "GIS / Remote Sensing", abbr: "GIS/RS", icon: "🛰️", color: "gold" },
  { name: "Geochemistry Laboratory", abbr: "GEO", icon: "🧪", color: "teal" },
  { name: "Petroleum Geology", abbr: "PET", icon: "🛢️", color: "gold" },
  { name: "Paleontology", abbr: "PAL", icon: "🦴", color: "teal" },
  { name: "Gemology", abbr: "GEM", icon: "💎", color: "gold" },
  { name: "Geodesy", abbr: "GDS", icon: "🌍", color: "teal" },
  { name: "Hydro-Geophysics & Seismology", abbr: "HGS", icon: "📡", color: "gold" },
  { name: "Geotechnical Laboratory", abbr: "GTC", icon: "⚙️", color: "teal" },
  { name: "Sedimentology & Palynology", abbr: "S&P", icon: "🪨", color: "gold" },
  { name: "Environmental Soil Science", abbr: "ESS", icon: "🌱", color: "teal" },
  { name: "Thin Section Cutting & Polishing", abbr: "TSC", icon: "🔭", color: "gold" },
];

// ─── USEFUL LINKS ──────────────────────────────────────────────────
export const usefulLinks = [
  { label: "Faculty Login", href: "#", icon: "🔐" },
  { label: "Faculty Awards", href: "#", icon: "🏆" },
  { label: "Faculty Scholarships", href: "#", icon: "🎓" },
  { label: "Phone Directory", href: "#", icon: "📞" },
  { label: "MoU's", href: "#", icon: "🤝" },
  { label: "Workshop / Conference", href: "#", icon: "🎤" },
  { label: "Archives", href: "#", icon: "🗄️" },
  { label: "Contact Details of News Papers", href: "#", icon: "📰" },
  { label: "JHES Vol 59(1), 2026 Online", href: "#", icon: "📖", isNew: true },
  { label: "E-Courses offered by NCEG Faculty", href: "#", icon: "💻" },
  { label: "List of Online Resources for Geoscientists", href: "#", icon: "🌐" },
  { label: "Consultancy Rules & Regulations", href: "#", icon: "📋" },
];
