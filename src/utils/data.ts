import type { Job, NavLink } from "../types";

export const jobList: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    image: "./src/assets/frontend.jpg",
    link: "form",
  },
  {
    id: 2,
    title: "App Developer",
    image: "./src/assets/appdevelopment.jpg",
    link: "form",
  },
  {
    id: 3,
    title: "Blockchain Engineer",
    image: "./src/assets/blockchain.jpg",
    link: "form",
  },
  {
    id: 4,
    title: "AI / ML Engineer",
    image: "./src/assets/ai-ml.jpg",
    link: "form",
  },
  {
    id: 5,
    title: "Deep Learning",
    image: "./src/assets/deeplearning.jpg",
    link: "form",
  },
  {
    id: 6,
    title: "Data Scientist",
    image: "./src/assets/data-scientist.jpg",
    link: "form",
  },
  {
    id: 7,
    title: "HR Manager",
    image: "./src/assets/hr-team.jpg",
    link: "form",
  },
  {
    id: 8,
    title: "Marketing Specialist",
    image: "./src/assets/marketing-team.jpg",
    link: "form",
  },
  {
    id: 9,
    title: "Product Team",
    image: "./src/assets/product-team.jpg",
    link: "form",
  },
];

export const NavLinks: NavLink[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
  {
    title: "Jobs",
    href: "#jobs",
  },
  {
    title: "Internships",
    href: "internships",
  },
  {
    title: "Applications",
    href: "applications",
  },
];
