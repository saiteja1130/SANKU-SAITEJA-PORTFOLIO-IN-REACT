import { Smartphone, Globe, Database, Layout, Server, Cpu } from "lucide-react";
import HomeBanner from "./src/assets/Images/HomeBanner.png";
import cwavehubImg from "./src/assets/Images/cwavehub.png";
import detailxmechanicImg from "./src/assets/Images/detailxmechanic.png";
import jackpepperImg from "./src/assets/Images/jackpepper.png";
import risunsolarImg from "./src/assets/Images/risunsolar.png";
import thedetailmechanicImg from "./src/assets/Images/thedetailmechanics.png";

export { HomeBanner };

export const PERSONAL_INFO = {
  name: "Sanku Saiteja",
  role: "React Native & MERN Stack Developer",
  email: "saitejanetha1130@gmail.com",
  phone: "+91 7288909906",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/saiteja-sanku-04287b330",
  github: "https://github.com/saiteja1130",
  portfolio: "https://saiteja-portfolio-frontend.netlify.app/",
  summary:
    "Professional React Native & MERN Full-Stack Developer with a track record of building high-quality, cross-platform mobile applications and responsive web solutions. Experienced in real-time location tracking, Firebase integration, and complex e-commerce architectures. Passionate about delivering premium user experiences through clean code and modern design patterns.",
};

export const SKILLS = [
  {
    category: "Front-End",
    icon: Layout,
    items: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: [
      "React Native (Android/iOS)",
      "React Navigation",
      "Redux",
      "Firebase",
      "Geolocation",
      "AsyncStorage",
    ],
  },
  {
    category: "Back-End",
    icon: Server,
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL", "SQLite", "Firebase Realtime DB"],
  },
  {
    category: "Tools & Others",
    icon: Cpu,
    items: [
      "Git/GitHub",
      "VS Code",
      "Postman",
      "React-Native-Maps",
      "jQuery",
      "Slick Js",
    ],
  },
];

export const EXPERIENCE = [
  {
    title: "React Native Mobile Application Developer",
    company: "Infasta Soft Solutions Private Ltd.",
    location: "Hyderabad",
    period: "May 2024 - Present",
    description: [
      "Full-time role focused on developing complex mobile ecosystems for pet services and logistics.",
      "Implementing real-time tracking using Geolocation and Firebase for pet transportation solutions.",
      "Developing multi-app architectures (Client vs Service Provider) with shared logic and distinct user experiences.",
      "Collaborating with backend teams to optimize API responses and ensure low-latency data syncing.",
    ],
  },
  {
    title: "Freelance Web & Mobile Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Delivered end-to-end web solutions for diverse industries including automotive, solar energy, and agriculture.",
      "Built cross-platform mobile applications featuring multivendor e-commerce and home service booking systems.",
      "Integrated WhatsApp-based lead generation and enquiry systems for small to medium-sized businesses.",
      "Successfully collaborated in multi-developer environments for large-scale mobile projects.",
    ],
  },
];

export const PROJECTS = {
  professional: [
    {
      title: "IKC - Pet Transport",
      description:
        "A specialized pet delivery and transportation app with real-time tracking and live chat.",
      tech: ["React Native", "Firebase", "Geolocation", "Chat Engine"],
      features: ["Live Tracking", "Real-time Chat", "Service Booking"],
      image: "",
      // "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      title: "Petsfolio Ecosystem",
      description:
        "Dual-app system (Client & Master) for pet services like walking, training, grooming, and insurance.",
      tech: ["React Native", "Redux", "Native Maps", "Insurance API"],
      features: [
        "Multi-role Architecture",
        "Insurance Management",
        "Service Scheduling",
      ],
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
  ],
  freelanceMobile: [
    {
      title: "ExpertSpace",
      description:
        "Service booking platform inspired by Urban Company for interior, event exhibition, and branding services, with an integrated ecommerce module.",
      tech: [
        "React Native",
        "Firebase (FCM Token)",
        "Node.js APIs",
        "MySQL",
        "Hostinger VPS",
      ],
      team: "Sahil (React Native), Saiteja (React Native + Backend APIs)",
      features: [
        "Interior, Event Exhibition and Branding Services",
        "Integrated Ecommerce Module",
        "Backend APIs with Node.js and MySQL",
      ],
      image:
        "https://images.unsplash.com/photo-1556911220-e152021bed33?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      title: "ExpertSpace Provider",
      description:
        "Provider-side app for service partners to manage job requests, status updates, and customer workflows in the same ExpertSpace ecosystem.",
      tech: ["React Native", "Node.js APIs", "MySQL", "Hostinger VPS"],
      team: "Sahil (Team Member), Saiteja (React Native + Backend APIs)",
      features: [
        "Provider Dashboard",
        "Service Request Management",
        "Realtime Notifications via FCM",
      ],
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
  ],
  freelanceWeb: [
    {
      title: "DetailXMechanics",
      description:
        "Premium car and bike mechanical services showcase with direct WhatsApp enquiry integration.",
      tech: ["React", "Bootstrap", "WhatsApp API"],
      image: detailxmechanicImg,
      link: "https://detailxmechanic.com/",
    },
    {
      title: "SolarRisun",
      description:
        "Solar panel installation website showcasing sustainable energy solutions and services.",
      tech: ["HTML5", "CSS3", "JavaScript", "Slick JS"],
      image: risunsolarImg,
      link: "https://risunsolar.in/",
    },
    {
      title: "JackPepperfarms",
      description:
        "Agricultural product gallery with 20+ listings and WhatsApp-based enquiry flow.",
      tech: ["React", "Tailwind", "Responsive Design"],
      image: jackpepperImg,
      link: "https://jackpepperfarms.com/",
    },
    {
      title: "Detailingmaniacs",
      description:
        "High-end automotive detailing website focusing on luxury vehicle aesthetics and care.",
      tech: ["React", "Bootstrap", "Gallery System"],
      image: thedetailmechanicImg,
      link: "https://thedetailingmaniacs.in/",
    },
    {
      title: "Srisai Security Services",
      description:
        "Website for a security services company that provides trained security guards for businesses and properties.",
      tech: ["React", "Tailwind CSS", "Responsive Design"],
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
    {
      title: "CWaveHub",
      description:
        "IT startup company website showcasing services, company profile, and digital capabilities.",
      tech: ["React", "Tailwind CSS", "Modern UI"],
      image: cwavehubImg,
      link: "https://cwavehub.com/",
    },
    {
      title: "IDPS School Website",
      description:
        "Portfolio-style school website presenting academics, institution highlights, and campus information.",
      tech: ["React", "Tailwind CSS", "Responsive Layout"],
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
      link: "#",
    },
  ],
};

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Aurora Degree And PG College Chikkadpally",
    period: "2024 - 2026",
    grade: "Pursuing",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Sree Chaitanya Degree & PG College, Karimnagar",
    period: "2021 - 2024",
    grade: "73%",
  },
];

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
