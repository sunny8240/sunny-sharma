import sparkHotstar from "@/lib/img/sparkHotstar.png";
import travelBharat from "@/lib/img/travelBharat.png";
import faculty from "@/lib/img/faculty.png";
import driveOnyx from "@/lib/img/driveOnyx-screenshot.png";

export const PROFILE = {
  name: "Sunny Sharma",
  role: "MERN & React Native Developer Intern",
  email: "sunnytarunsharma67@gmail.com",
  phone: "+91 87676 08240",
  location: "Pune, Maharashtra, India",
  intro:
    "MERN and React Native Developer Intern building web and mobile features for DriveOnyx. B.Sc. Cyber Security student with hands-on VAPT practice and a 9.10/10 CGPA.",
  socials: {
    github: "https://github.com/sunny8240",
    tryhackme: "https://tryhackme.com/p/0xSunny",
    linkedin: "https://www.linkedin.com/in/sunny-sharma-4b75a6325",
  },
  resumeUrl: "/Sunny_Sharma_Resume.pdf",
};

export const STATS = [
  { label: "Current Role", value: "Developer Intern" },
  { label: "TryHackMe", value: "200+ Labs" },
  { label: "CGPA", value: "9.10 / 10" },
  { label: "Product Work", value: "Web + Mobile" },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "bcrypt",
      "Zod",
      "Multer",
      "Helmet",
      "Razorpay Integration",
    ],
  },
  {
    title: "Database",
    items: [
      "MongoDB",
      "Mongoose",
      "SQL",
      "Database Design",
      "Validation",
      "Indexing",
      "Pagination",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Android & iOS Apps",
      "Camera & Image Upload",
      "API Integration",
    ],
  },
  {
    title: "State & Data",
    items: [
      "Context API",
      "Zustand",
      "Redux Toolkit",
      "TanStack Query",
      "Axios",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, IAM)",
      "Docker",
      "Kubernetes Basics",
      "CI/CD Concepts",
      "Linux",
    ],
  },
  {
    title: "Cybersecurity & VAPT",
    items: [
      "Vulnerability Assessment & Penetration Testing",
      "Web Application Security Testing",
      "OWASP Top 10",
      "Secure Coding",
      "Burp Suite",
      "Nmap",
      "Wireshark",
    ],
  },
  {
    title: "Languages & Tools",
    items: ["JavaScript", "TypeScript", "Python", "C", "SQL", "Git", "GitHub", "Postman"],
  },
];

export const PROJECTS = [
  {
    id: "driveonyx",
    title: "DriveOnyx",
    subtitle: "Full-Stack Vehicle Rental · Web & Mobile",
    image: driveOnyx,
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "React Native",
      "Expo",
      "Razorpay",
    ],
    bullets: [
      "Customer, vehicle-owner and admin workflows",
      "Vehicle listings, availability, KYC and approvals",
      "Booking lifecycle, payments and live trip maps",
      "React Native app for Android and iOS, integrated with REST APIs",
      "Mobile onboarding, vehicle discovery, bookings and profile screens",
      "KYC camera capture and document image uploads",
    ],
    description:
      "A vehicle-rental marketplace spanning web, backend and mobile. Contributed to the React Native and Expo app for Android and iOS, building customer screens and integrating mobile workflows with backend APIs, alongside web and platform features.",
    code: "#",
    demo: "https://driveonyx.in",
    appLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.driveonyx.app&pcampaignid=web_share",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/driveonyx-car-bike-rental/id6822633256",
      },
    ],
    featured: true,
    year: "2026",
    privateRepo: true,
  },
  {
    id: "sparkhotstar",
    title: "SparkHotstar",
    subtitle: "OTT Streaming Platform",
    image: sparkHotstar,
    tech: ["HTML5", "CSS3", "JavaScript"],
    bullets: [
      "SPA with routing",
      "Dynamic UI animations",
      "Search & Filter",
      "Watchlist & history",
    ],
    description:
      "A Netflix / Hotstar-inspired streaming platform built from scratch with a custom SPA router in vanilla JS — no frameworks.",
    code: "https://github.com/sunny8240/SparkHotstar.git",
    demo: "https://sunny8240.github.io/SparkHotstar/",
    featured: false,
    year: "2025",
    privateRepo: false,
  },
  {
    id: "travel-bharat",
    title: "Travel Bharat",
    subtitle: "Tourism Discovery Platform",
    image: travelBharat,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    bullets: ["Search & filters", "REST API", "JWT auth", "Admin dashboard"],
    description:
      "End-to-end MERN tourism app for state-wise / city-wise destination discovery with role-based admin dashboard.",
    code: "https://github.com/sunny8240/travelbharat.git",
    demo: "https://travelbharat-web.vercel.app/",
    featured: true,
    year: "2026",
    privateRepo: false,
  },
  {
    id: "adkinest",
    title: "Adkinest & Faculty Websites",
    subtitle: "Agency & Academic Web Experiences",
    image: faculty,
    tech: ["React", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    bullets: [
      "Responsive digital-agency website",
      "Reusable service and portfolio sections",
      "Professional and academic web pages",
    ],
    description:
      "A collection of responsive agency and academic websites, including Adkinest, built around clear content, reusable UI and mobile-friendly layouts.",
    code: "#",
    demo: null,
    featured: false,
    year: "2026",
    privateRepo: true,
  },
];

export const EXPERIENCE = [
  {
    title: "MERN & React Native Developer Intern",
    org: "Darshan Productions",
    when: "Sep 2026 — Present",
    where: "Pune, India",
    points: [
      "Develop and maintain DriveOnyx features across the web platform, backend and React Native (Expo) mobile app for Android and iOS.",
      "Build mobile onboarding, vehicle browse, search, filters, vehicle details, booking and profile screens.",
      "Integrate mobile and web clients with Node.js and Express REST APIs; implement KYC camera capture and document image uploads.",
      "Debug customer, vehicle-owner and admin workflows; collaborate using Git and GitHub.",
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    org: "Unified Mentor Pvt. Ltd.",
    when: "Jan 2026 — Apr 2026",
    where: "India",
    points: [
      "Completed a three-month internship covering frontend, backend and API-driven workflows.",
      "Applied full-stack development practices through project work, code review and debugging.",
    ],
  },
  {
    title: "Self-Directed Software Development",
    org: "Independent Projects",
    when: "Oct 2025 — Present",
    where: "Pune, India",
    points: [
      "Build full-stack applications using React, TypeScript, Node.js, Express and MongoDB.",
      "Implement authentication, role-based access, search, bookings, reviews and image uploads.",
      "Apply secure-coding principles and explore Docker and foundational AWS deployment.",
    ],
  },
  {
    title: "B.Sc. Computer Science (Cyber Security)",
    org: "Pimpri Chinchwad University",
    when: "2024 — Present",
    where: "Pune, India",
    points: [
      "CGPA: 9.10 / 10.",
      "Combining computer science foundations with cybersecurity studies and applied development.",
    ],
  },
];

export const SERVICES_PREVIEW = [
  {
    title: "Web Development",
    desc: "Responsive React interfaces connected to reliable REST APIs.",
  },
  {
    title: "Full-Stack MERN",
    desc: "Database-driven features, authentication and role-based workflows.",
  },
  {
    title: "React Native",
    desc: "Cross-platform mobile experiences built with React Native and Expo.",
  },
  {
    title: "Cybersecurity & VAPT",
    desc: "Hands-on security labs, OWASP concepts and vulnerability assessment fundamentals.",
  },
];

export const PRICING = [
  {
    tier: "Basic",
    price: "₹2,999",
    delivery: "5 – 7 Days",
    blurb: "Perfect for small businesses and personal projects",
    features: [
      "Up to 5 responsive pages",
      "Modern UI with Tailwind CSS",
      "Mobile-first design",
      "Contact form integration",
      "Basic SEO optimization",
      "Fast loading performance",
      "Cross-browser compatibility",
      "1 month free support",
      "Source code delivery",
    ],
  },
  {
    tier: "Medium",
    price: "₹5,999",
    delivery: "7 – 14 Days",
    blurb: "Ideal for growing businesses with dynamic needs",
    highlighted: true,
    features: [
      "Everything in Basic",
      "Up to 10 responsive pages",
      "Custom React.js components",
      "Advanced animations (Framer Motion)",
      "Blog / CMS integration",
      "MongoDB database integration",
      "REST API development",
      "User authentication system",
      "Admin dashboard",
      "Advanced SEO & performance",
      "3 months free support",
      "Deployment assistance",
    ],
  },
  {
    tier: "Premium",
    price: "₹8,999+",
    delivery: "2 – 4 Weeks",
    blurb: "Enterprise-grade full-stack solutions",
    features: [
      "Everything in Medium",
      "Unlimited pages & features",
      "Full-stack MERN development",
      "Custom backend architecture",
      "Advanced user roles & permissions",
      "Payment gateway integration",
      "3D web experiences (Three.js)",
      "Real-time features (WebSockets)",
      "Advanced security implementation",
      "API security & OWASP protection",
      "Cloud deployment (AWS / Vercel)",
      "CI/CD pipeline setup",
      "6 months priority support",
    ],
  },
];

export const ADDONS = [
  { name: "3D Web Experiences", price: "₹2,000" },
  { name: "Advanced Animations", price: "₹1,200" },
  { name: "Payment Gateway Setup", price: "₹1,500" },
  { name: "Custom Admin Dashboard", price: "₹1,000" },
  { name: "API Development", price: "₹1,500" },
  { name: "Security Audit", price: "₹800" },
  { name: "PWA Conversion", price: "₹900" },
  { name: "Additional Month Support", price: "₹500" },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const INQUIRY_TYPES = [
  "Job Opportunity",
  "Internship",
  "Freelance Project",
  "Web Development Service",
  "Penetration Testing",
  "General Inquiry",
];
