export const workCategories = [
  { id: "all", label: "All Works" },
  { id: "private-sector", label: "Private Sector" },
  { id: "government", label: "Government" },
  { id: "ngo", label: "NGOs" },
  { id: "software-erp", label: "Software & ERP" },
  { id: "websites", label: "Websites" },
  { id: "mobile-apps", label: "Mobile Applications" },
  { id: "ai-solutions", label: "AI Solutions" },
  { id: "digital-transformation", label: "Digital Transformation" },
];

export const works = [
  {
    slug: "enterprise-operations-platform",
    title: "Enterprise Operations Platform",
    client: "Private Manufacturing Enterprise",
    sector: "Private Sector",
    categories: ["private-sector", "software-erp", "digital-transformation"],
    year: "2023",
    image: "/assets/img/works/01.jpg",
    summary:
      "A custom operations and reporting platform that streamlined production tracking, inventory visibility, and management decision-making.",
    description:
      "Csolve Technology designed and delivered a custom enterprise operations platform for a private-sector manufacturer. The system consolidated fragmented workflows into one connected environment for teams across operations, finance, and leadership.",
    outcomes: [
      "Centralized daily operations and reporting",
      "Improved visibility across inventory and workflows",
      "Reduced manual coordination between departments",
    ],
    services: ["Software Development", "ERP Solutions"],
  },
  {
    slug: "government-digital-service-portal",
    title: "Public Service Information Portal",
    client: "Government Institution Partner",
    sector: "Government",
    categories: ["government", "websites", "digital-transformation"],
    year: "2024",
    image: "/assets/img/works/02.jpg",
    summary:
      "A secure, responsive institutional website and information portal built to improve public access to services and organizational communication.",
    description:
      "We developed a modern digital presence for a government institution, focusing on clarity, accessibility, and trustworthy communication for citizens and stakeholders.",
    outcomes: [
      "Clearer public access to institutional information",
      "Mobile-friendly experience for wider reach",
      "A professional digital foundation for future services",
    ],
    services: ["Website Development", "Cybersecurity"],
  },
  {
    slug: "ngo-field-reporting-app",
    title: "Field Reporting Mobile Application",
    client: "Development NGO Partner",
    sector: "NGOs",
    categories: ["ngo", "mobile-apps", "digital-transformation"],
    year: "2022",
    image: "/assets/img/works/03.jpg",
    summary:
      "A cross-platform mobile application that helped field teams capture, sync, and report program data more efficiently.",
    description:
      "Csolve built a mobile reporting application for an NGO partner working across distributed locations. The app helped teams collect structured data in the field and reduce delays in reporting.",
    outcomes: [
      "Faster field data collection and submission",
      "Improved coordination between field and office teams",
      "Better visibility for program monitoring",
    ],
    services: ["Mobile App Development", "Software Development"],
  },
  {
    slug: "ai-assisted-support-assistant",
    title: "AI-Assisted Support Assistant",
    client: "Growing Service Enterprise",
    sector: "Private Sector",
    categories: ["private-sector", "ai-solutions"],
    year: "2024",
    image: "/assets/img/works/04.jpg",
    summary:
      "An AI-supported assistant that improved response times for common customer and internal support requests.",
    description:
      "We implemented an AI-assisted support experience to handle frequent inquiries, guide users to the right information, and free teams to focus on higher-value work.",
    outcomes: [
      "Faster responses to common questions",
      "Reduced pressure on support teams",
      "A practical entry point into AI-powered service delivery",
    ],
    services: ["AI Solutions", "Software Development"],
  },
  {
    slug: "institutional-erp-rollout",
    title: "Integrated ERP System Rollout",
    client: "Multi-department Organization",
    sector: "Private Sector",
    categories: ["private-sector", "software-erp", "digital-transformation"],
    year: "2021",
    image: "/assets/img/works/05.jpg",
    summary:
      "An integrated ERP implementation covering finance, HR, inventory, and operational reporting for stronger business control.",
    description:
      "Csolve Technology supported an organization-wide ERP rollout that connected core business functions and replaced disconnected spreadsheets and manual processes.",
    outcomes: [
      "Unified finance, HR, and inventory workflows",
      "Stronger reporting for leadership decisions",
      "A scalable system ready for organizational growth",
    ],
    services: ["ERP Solutions", "Software Development"],
  },
  {
    slug: "secure-network-modernization",
    title: "Secure Network Modernization",
    client: "Public & Institutional Client",
    sector: "Government",
    categories: ["government", "digital-transformation"],
    year: "2023",
    image: "/assets/img/works/06.jpg",
    summary:
      "Network and infrastructure improvements that strengthened reliability, security posture, and day-to-day operational continuity.",
    description:
      "We planned and delivered networking and infrastructure upgrades to help an institutional client operate more securely and dependably as digital usage expanded.",
    outcomes: [
      "More stable connectivity for teams",
      "Improved security foundations",
      "Infrastructure prepared for future digital services",
    ],
    services: ["Networking and IT Infrastructure", "Cybersecurity"],
  },
];

export const featuredWorks = works.slice(0, 3);

export const getWorkBySlug = (slug) => works.find((work) => work.slug === slug);
