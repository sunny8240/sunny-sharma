export const PROFILE = {
  name: "Sunny Sharma",
  role: "Full Stack Developer (MERN) — Penetration Tester",
  email: "sunnytarunsharma67@gmail.com",
  phone: "+91 87676 08240",
  location: "Lonavala, Pune, Maharashtra",
  intro:
    "Building secure, modern web applications with React, JavaScript, Node.js & Python. B.Sc. Cybersecurity (CGPA: 9.10/10).",
  socials: {
    github: "https://github.com/sunny8240",
    tryhackme: "https://tryhackme.com/p/0xSunny",
    linkedin: "www.linkedin.com/in/sunny-sharma-4b75a6325",
  },
  resumeUrl: "public/Sunny_Sharma_Resume.pdf",
};

export const STATS = [
  { label: "Status", value: "Open to Work" },
  { label: "TryHackMe", value: "200+ Rooms" },
  { label: "CGPA", value: "9.10 / 10" },
  { label: "Projects", value: "3+ Shipped" },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "SQL / NoSQL", "REST APIs", "JWT Auth"],
  },
  {
    title: "Python",
    items: ["Python Programming", "Django (Basic)", "Flask (Basic)"],
  },
  {
    title: "Security",
    items: ["Kali Linux", "Penetration Testing", "OWASP Top 10", "Burp Suite", "Metasploit", "Nmap", "Wireshark", "Gobuster", "Hydra"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Kubernetes", "Linux"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Bash / Shell Scripting"],
  },
];

export const PROJECTS = [
  {
    id: "sparkhotstar",
    title: "SparkHotstar",
    subtitle: "OTT Streaming Platform",
    image:
      "https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBhcHAlMjBtb3ZpZSUyMGludGVyZmFjZSUyMGRhcmt8ZW58MHx8fHwxNzgxOTMzOTY0fDA&ixlib=rb-4.1.0&q=85",
    tech: ["HTML5", "CSS3", "JavaScript"],
    bullets: ["SPA with routing", "Dynamic UI animations", "Search & JWT auth", "Watchlist & history"],
    description:
      "A Netflix / Hotstar-inspired streaming platform built from scratch with a custom SPA router in vanilla JS — no frameworks.",
    code: "https://github.com/sunny8240/SparkHotstar.git",
    demo: "https://sunny8240.github.io/SparkHotstar/",
    featured: true,
    year: "2025",
  },
  {
    id: "travel-bharat",
    title: "Travel Bharat",
    subtitle: "Tourism Discovery Platform",
    image:
      "https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    bullets: ["Search & filters", "REST API", "JWT auth", "Admin dashboard"],
    description:
      "End-to-end MERN tourism app for state-wise / city-wise destination discovery with role-based admin dashboard.",
    code: "https://github.com/sunny8240/travelbharat.git",
    demo: "https://travelbharat-web.vercel.app/",
    featured: true,
    year: "2026",
  },
  {
    id: "client-portfolios",
    title: "Client Portfolio Projects",
    subtitle: "Professional & Academic Websites",
    image:
      "https://images.unsplash.com/photo-1710438399422-2fca27686bcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGFyayUyMGFic3RyYWN0JTIwdGV4dHVyZSUyMHByZW1pdW18ZW58MHx8fHwxNzgxOTMzOTY0fDA&ixlib=rb-4.1.0&q=85",
    tech: ["HTML", "CSS", "JavaScript"],
    bullets: ["Clean UI", "Responsive", "Modern design", "Optimized"],
    description:
      "Responsive portfolio and academic websites for professionals and university faculty — content-first, fast, accessible.",
    code: "#",
    demo: "https://adityakatkar.vercel.app/",
    featured: false,
    year: "2025",
  },
];

export const EXPERIENCE = [
  {
    title: "Full Stack Developer · Project-Based",
    org: "Independent Projects",
    when: "2024 — Present",
    where: "Lonavala, Pune",
    points: [
      "Shipped 6+ production-ready web apps including OTT and tourism platforms.",
      "Built frontends in React + Tailwind and backends in Node, Express & MongoDB.",
      "Designed animation-rich, responsive UIs with Framer Motion.",
      "Implemented auth, REST APIs and dynamic content pipelines.",
    ],
  },
  {
    title: "TryHackMe · Practical Training",
    org: "Cybersecurity Labs",
    when: "Ongoing",
    where: "Online",
    points: [
      "Completed 200+ rooms across Web, PenTest, SOC and DFIR tracks.",
      "Hands-on OWASP Top 10 exploitation and remediation.",
      "Daily use of Nmap, Burp Suite, Metasploit, Wireshark.",
    ],
  },
  {
    title: "B.Sc. Cybersecurity",
    org: "Pimpri Chinchwad University",
    when: "2024 — Present",
    where: "Pune, India",
    points: [
      "CGPA 9.1 / 10 — Semesters: 9.05, 9.10, 8.67,9.55.",
      "Strong focus on secure development and applied cryptography.",
      "Combining academics with real-world client projects.",
    ],
  },
];

export const SERVICES_PREVIEW = [
  { title: "Frontend Engineering", desc: "Modern, responsive UI with smooth animations and great UX." },
  { title: "Full Stack Development", desc: "Secure backend systems, APIs & scalable architecture." },
  { title: "Penetration Testing", desc: "Identify vulnerabilities & improve application security." },
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
