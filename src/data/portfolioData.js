import {
  Boxes,
  Braces,
  CloudCog,
  Code2,
  Container,
  Database,
  GitBranch,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Pipeline", href: "#pipeline" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const techGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: Braces,
    items: ["Java", "PHP", "Laravel"],
  },
  {
    title: "DevOps",
    icon: CloudCog,
    items: [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Jenkins",
      "GitHub Actions",
      "GitLab CI/CD",
      "Git",
      "Linux",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Architecture",
    icon: Boxes,
    items: ["Microservices", "REST APIs", "API Gateway", "Containerized Services"],
  },
];

export const pipelineStages = [
  "Developer",
  "Git",
  "CI/CD",
  "Build",
  "Docker",
  "Kubernetes",
  "Production",
];

export const microservices = [
  "Auth Service",
  "User Service",
  "Order Service",
  "Payment Service",
];

export const devopsProjects = [
  {
    title: "Microservice Flight Reservation System",
    description:
      "Microservices-based flight reservation system deployed with Kubernetes and automated CI/CD pipelines.",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Microservices Architecture"],
    github: "https://github.com/abdelilah-mo",
    demo: "https://github.com/abdelilah-mo",
  },
  {
    title: "Maintenance on Demand Platform",
    description:
      "Full stack platform deployed using Docker containers and Kubernetes with automated CI/CD pipelines.",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
    github: "https://github.com/abdelilah-mo/maintenance-on-demand",
    demo: "https://github.com/abdelilah-mo/maintenance-on-demand",
  },
  {
    title: "Task Manager",
    description:
      "Task management application demonstrating DevOps automation and container orchestration.",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
    github: "https://github.com/abdelilah-mo/task_manager",
    demo: "https://github.com/abdelilah-mo/task_manager",
  },
];

export const fullStackProjects = [
  {
    title: "L_shop",
    description:
      "E-commerce platform with product management and database integration.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    github: "https://github.com/abdelilah-mo/L-shop",
    demo: "https://github.com/abdelilah-mo/L-shop",
  },
  {
    title: "Ai_learning voice",
    description:
      "AI learning platform using voice interaction and OpenAI integration.",
    technologies: [
      "React",
      "TailwindCSS",
      "Vite",
      "Laravel API",
      "Sanctum",
      "MySQL",
      "Web Speech API",
      "OpenAI API",
    ],
    github: "https://github.com/abdelilah-mo/Ai_Learning_Voice",
    demo: "https://github.com/abdelilah-mo/Ai_Learning_Voice",
  },
  {
    title: "mailsender",
    description:
      "Automated email sender using Laravel and Gmail SMTP.",
    technologies: ["Laravel", "PHP", "Gmail SMTP"],
    github: "https://github.com/abdelilah-mo/MailsSenderAuto",
    demo: "https://github.com/abdelilah-mo/MailsSenderAuto",
  },
  {
    title: "group-de-reussite",
    description: "React-based collaboration platform for learning groups.",
    technologies: ["React"],
    github: "https://github.com/abdelilah-mo/group-de-reussite",
    demo: "https://github.com/abdelilah-mo/group-de-reussite",
  },
  {
    title: "maintenance on demand platform",
    description:
      "Maintenance service platform built with full stack architecture and deployed using Docker, Kubernetes and CI/CD.",
    technologies: ["Laravel", "React", "OpenAI API", "Docker", "Kubernetes", "CI/CD"],
    github: "https://github.com/abdelilah-mo/maintenance-on-demand",
    demo: "https://github.com/abdelilah-mo/maintenance-on-demand",
  },
];

export const timeline = [
  {
    year: "2024",
    title: "Programming & Web Development Foundations",
    detail:
      "Started learning programming fundamentals and modern web development. Technologies learned: HTML, CSS, JavaScript, Git, GitHub, MySQL basics. Worked on first web projects to understand frontend and backend fundamentals.",
    icon: Code2,
  },
  {
    year: "2025",
    title: "Full Stack Development",
    detail:
      "Learned to build complete web applications using modern frameworks. Technologies: Laravel, PHP, React, REST APIs, MySQL. Built several full stack applications and automation tools.",
    icon: ServerCog,
  },
  {
    year: "2025",
    title: "DevOps & Cloud Native Training",
    detail:
      "Completed a DevOps-focused training program and learned modern deployment practices. Technologies and tools: Docker, Kubernetes, GitHub Actions CI/CD, Linux, Git workflows, Microservices architecture. Worked on containerized applications and automated deployment pipelines.",
    icon: Container,
  },
  {
    year: "2026",
    title: "Microservices & Scalable Systems",
    detail:
      "Currently working on microservices architecture and automated CI/CD pipelines using Docker, Kubernetes and modern DevOps tools.",
    icon: ShieldCheck,
  },
];
