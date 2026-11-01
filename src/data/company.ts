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
    description: "From architecture and user interface design to full-scale deployment. We engineer robust web systems, progressive web applications, and mobile solutions tailored for Kenyan commerce and international standards.",
    icon: "Code2",
    highlight: "Vue, React, TypeScript",
    capabilities: [
      "Custom Frontend Architecture (Vue.js, React, Tailwind CSS)",
      "High-Fidelity UI/UX & Responsive Systems",
      "E-Commerce, Marketplace & PropTech Platforms",
      "API Design & Secure Client-Side Systems"
    ]
  },
  {
    id: "whatsapp-solutions",
    title: "Enterprise WhatsApp Business Automation",
    subtitle: "Conversational Workflows & Notifications",
    description: "Automated business messaging for customer service, instant billing receipts, payment reminders, and order tracking directly via WhatsApp. Designed for seamless customer interaction across Kenya.",
    icon: "MessageSquare",
    highlight: "High Engagement Automation",
    capabilities: [
      "Automated Payment & Rent Receipts via WhatsApp",
      "Real-Time Inquiry Bots & Property Discovery",
      "Customer Billing Reminders & Status Alerts",
      "Strict Opt-In & Privacy-Compliant Workflows"
    ]
  },
  {
    id: "cloudflare-edge",
    title: "Cloudflare Serverless & Edge Engineering",
    subtitle: "Zero-Backend Overhead, Blazing Fast",
    description: "Lightning-fast edge computing powered by Cloudflare's global CDN network. We deliver sub-10ms response times for Kenyan users, ironclad DDoS protection, and 99.99% uptime with zero server maintenance.",
    icon: "CloudLightning",
    highlight: "100% Serverless Edge",
    capabilities: [
      "Static Web Apps on Cloudflare Pages & Workers",
      "Ultra-Low Latency for Kenyan Mobile Devices",
      "Automated SSL/TLS Security & DDoS Mitigation",
      "Zero Expensive Server Upkeep or Database Vulnerabilities"
    ]
  },
  {
    id: "system-maintenance",
    title: "Software Maintenance & 24/7 SLA Support",
    subtitle: "Continuous Health, Security & Reliability",
    description: "Ongoing technical maintenance, vulnerability assessments, performance tuning, and guaranteed SLA uptime support for business-critical software systems and public marketplaces.",
    icon: "ShieldCheck",
    highlight: "Continuous Monitoring",
    capabilities: [
      "Regular Codebase Upgrades & Dependency Auditing",
      "Mobile Performance & Core Web Vitals Optimization",
      "System Disaster Recovery & Data Integrity",
      "Direct Priority Support Hotline for Businesses"
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
