export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "#projects", key: "projects", label: "Projects" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#contact", key: "contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Ishan-Ekanayaka",
  linkedin: "https://www.linkedin.com/in/ishan-ekanayaka", // ඔයාගේ ලින්ක් එක නිවැරදි කරගන්න
  email: "ishandilhara57@gmail.com",
  phone: "0768370886",
};

export const PROJECTS = [
  {
    title: "MediCura Medical System",
    description: "Full-stack Billing & Payment Management module for medical centers. Features include automated invoice generation, expense tracking, and comprehensive PDF/Excel financial reports.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Ishan-Ekanayaka",
    demo: "#",
    size: "large",
  },
  {
    title: "MindEase Mobile App",
    description: "A mental health and meditation app designed with a 60-30-10 color rule and neumorphic 3D UI. Includes a meditation player and relaxing soundscapes.",
    tags: ["Kotlin", "Android Studio", "UI/UX"],
    github: "#",
    demo: "#",
    size: "small",
  },
  {
    title: "Reina Fashion Store",
    description: "Ladies' slippers e-commerce platform. Built with an admin panel for product management, cart system, order tracking, and automated PDF invoices.",
    tags: ["Java", "JSP", "MySQL", "Tomcat"],
    github: "#",
    demo: "#",
    size: "small",
  },
  {
    title: "Employee Management System",
    description: "Desktop application with role-based login and internationalization (English/Sinhala). Generates PDF salary slips and manages CRUD operations.",
    tags: ["Java Swing", "MySQL", "i18n"],
    github: "#",
    demo: "#",
    size: "small",
  },
  {
    title: "Transport Management",
    description: "Web application using MVC pattern to manage driver records and transport logs efficiently.",
    tags: ["JSP", "Servlets", "JDBC", "MySQL"],
    github: "#",
    demo: "#",
    size: "small",
  }
];

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "HTML", "CSS", "SQL", "PHP"],
  },
  {
    category: "Frameworks & Tools",
    items: ["React.js", "Next.js", "Node.js", "Spring Boot", "Tailwind CSS", "Kotlin", "Git"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
];

export const CERTIFICATES = [
  "Web Development - University of Moratuwa",
  "Front-End Development - University of Moratuwa",
  "Python Programming - University of Moratuwa",
  "Java Programming - SLIIT & Alison",
  "AI & Machine Learning Stage I & II - SLIIT",
];

// Email.js Configurations (Updated with your IDs)
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
};