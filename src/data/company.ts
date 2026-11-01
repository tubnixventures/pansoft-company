export interface CompanyProfile {
  name: string;
  legalName: string;
  registrationNumber: string;
  jurisdiction: string;
  postalAddress: string;
  physicalAddress: string;
  town: string;
  county: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneRaw: string;
  phoneIntl: string;
  email: string;
  founderName: string;
  founderRole: string;
  foundedYear: string;
  website: string;
  housikaWebsite: string;
  status: string;
}

export const PANSOFT_PROFILE: CompanyProfile = {
  name: "Pansoft Technologies",
  legalName: "Pansoft Technologies",
  registrationNumber: "BN-36S5WLAP",
  jurisdiction: "Republic of Kenya - Registrar of Companies",
  postalAddress: "P.O. Box 50200, Bungoma, Kenya",
  physicalAddress: "Kanduyi Commercial Plaza, Suite 3B, Bungoma-Malaba Highway",
  town: "Bungoma",
  county: "Bungoma County",
  postalCode: "50200",
  country: "Kenya",
  phone: "+254 141 380 666",
  phoneRaw: "0141380666",
  phoneIntl: "+254141380666",
  email: "tubnixventures@gmail.com",
  founderName: "Movin Juma",
  founderRole: "Founder & Chief Executive Officer",
  foundedYear: "2023",
  website: "https://pansoft.co.ke",
  housikaWebsite: "https://www.housika.co.ke",
  status: "Active Registered Enterprise"
};

export const CORE_SERVICES = [
  {
    id: "software-dev",
    title: "Custom Software Design & Development",
    subtitle: "End-to-End Product Engineering",
    description: "From conceptual UI/UX wireframing to enterprise delivery. We build robust web systems, progressive web apps, and native mobile applications using Vue.js, React, TypeScript, and modern component systems.",
    icon: "Code2",
    highlight: "Vue, React, TypeScript",
    capabilities: [
      "Intuitive UI/UX Systems & Responsive Architecture",
      "Progressive Web Apps (PWAs) & Mobile Interfaces",
      "E-Commerce, Marketplace & PropTech Platforms",
      "Clean TypeScript & Secure Frontend Codebases"
    ]
  },
  {
    id: "cloudflare-edge",
    title: "Cloudflare Edge & Serverless Architecture",
    subtitle: "Sub-10ms Global Delivery & Zero Server Lag",
    description: "Specialized engineering on Cloudflare's 300+ city edge network. We design serverless Workers, Cloudflare Pages, edge caching, and DDoS mitigation for lightning-fast speeds without bulky server maintenance.",
    icon: "CloudLightning",
    highlight: "Cloudflare Specialist",
    capabilities: [
      "Cloudflare Workers & Cloudflare Pages Deployments",
      "Zero-Backend Architecture with High Edge Caching",
      "Automated SSL/TLS Security & DDoS Shielding",
      "Sub-10ms Response Times for African Mobile Users"
    ]
  },
  {
    id: "google-cloud",
    title: "Google Cloud Run & Cloud Firestore",
    subtitle: "Elastic Serverless Containers & Real-Time Data",
    description: "Expert implementation of Google Cloud services. We deploy scalable containerized microservices on Google Cloud Run and architect low-latency NoSQL databases with Google Cloud Firestore.",
    icon: "Server",
    highlight: "GCP Expert",
    capabilities: [
      "Google Cloud Run Containerized Microservices",
      "Google Cloud Firestore Real-Time Sync & Security Rules",
      "Automated Autoscaling from 0 to Millions of Requests",
      "Google Cloud IAM & Enterprise Data Protection"
    ]
  },
  {
    id: "azure-cloud",
    title: "Microsoft Azure & Cosmos DB Solutions",
    subtitle: "Mission-Critical Cloud & Multi-Model DBs",
    description: "Enterprise cloud solutions with Microsoft Azure. We architect globally distributed, multi-model databases on Azure Cosmos DB for mission-critical applications demanding single-digit millisecond latency.",
    icon: "Database",
    highlight: "Azure Specialist",
    capabilities: [
      "Azure Cosmos DB Multi-Region Data Distribution",
      "Azure App Services & Serverless Functions",
      "Enterprise SLA Guarantees & Disaster Recovery",
      "High Availability & Multi-Tenant Partitioning"
    ]
  },
  {
    id: "api-integrations",
    title: "Enterprise API & Messaging Integrations",
    subtitle: "WhatsApp, Payment Gateways & Webhooks",
    description: "Connecting business systems with external APIs. As part of our integration suite, we build WhatsApp Business automation for digital receipt delivery and billing alerts, alongside Safaricom M-Pesa STK push and banking APIs.",
    icon: "Workflow",
    highlight: "Multi-API Integrator",
    capabilities: [
      "WhatsApp Business API Integration for Invoices & Receipts",
      "Safaricom M-Pesa Daraja STK Push & Webhook Listeners",
      "Custom RESTful & GraphQL API Gateway Development",
      "Strict Opt-In & Privacy-Compliant Notification Flows"
    ]
  },
  {
    id: "system-maintenance",
    title: "Software Maintenance & 24/7 SLA Support",
    subtitle: "Continuous Health, Audits & Uptime",
    description: "Ongoing technical maintenance, vulnerability patching, database optimization, and guaranteed uptime monitoring for mission-critical client software and public marketplaces.",
    icon: "ShieldCheck",
    highlight: "24/7 Reliability",
    capabilities: [
      "Regular Security & Dependency Auditing",
      "Core Web Vitals & Mobile Performance Tuning",
      "Data Integrity Checks & Automated Backups",
      "Direct Developer Priority Hotline"
    ]
  }
];

export const HOUSIKA_FEATURES = [
  {
    title: "Fair & Honest Pricing",
    desc: "Only a flat, affordable listing fee and a nominal booking fee. Zero predatory middleman cuts or exorbitant broker commissions.",
    badge: "Cost-Effective"
  },
  {
    title: "Free Landlord Receipts",
    desc: "Automated, customized digital rent and booking receipts for landlords with printable formats and legal tenant records.",
    badge: "100% Free for Landlords"
  },
  {
    title: "Tamper-Proof QR Verification",
    desc: "Every receipt issued on Housika includes a unique cryptographic QR code verifiable instantly by landlords, tenants, or banks.",
    badge: "Fraud-Proof"
  },
  {
    title: "Diverse Real Estate Portfolios",
    desc: "Residential apartments, single rooms, commercial retail premises, agricultural farming land, and registered title deed plots.",
    badge: "Comprehensive Marketplace"
  }
];

export const SAMPLE_PROPERTIES = [
  {
    id: "hsk-01",
    title: "Executive 2-Bedroom Haven",
    type: "Rental Apartment",
    location: "Kanduyi, Bungoma (Near Referral Hospital)",
    price: "KES 14,500 / mo",
    landlord: "Pansoft Verified Estates",
    features: ["Borehole Water", "Prepaid KPLC", "CCTV Security", "Dedicated Parking"],
    status: "Available"
  },
  {
    id: "hsk-02",
    title: "Prime 50x100 Commercial Plot",
    type: "Plot for Sale",
    location: "Bungoma Town Outskirts, Webuye Highway",
    price: "KES 950,000",
    landlord: "Ready Title Deed",
    features: ["Piped Water Ready", "Electricity On Site", "Fenced", "Direct Road Access"],
    status: "Available"
  },
  {
    id: "hsk-03",
    title: "2-Acre Fertile Agricultural Land",
    type: "Farming Land",
    location: "Chwele / Malakisi Belt, Bungoma",
    price: "KES 650,000 / Acre",
    landlord: "Agri-Properties Kenya",
    features: ["All-Year River Frontage", "Loam Soil", "Maize & Sugarcane Ready", "Clear Boundaries"],
    status: "Verified Listing"
  }
];
