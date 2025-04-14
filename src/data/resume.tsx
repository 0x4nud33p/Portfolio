import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Anudeep Avula",
  initials: "AA",
  url: "https://github.com/0x4nud33p/portfolio",
  location: "Andhra Pradesh, India",
  locationLink: "https://www.google.com/maps/place/andhrapradesh",
  description:
    "A Full Stack Developer from India.",
  summary:
    "A final year Information Technology student at [Seshadri Rao Gudlavalleru Engineering College](https://gecgudlavalleru.ac.in/index.php), specialize in modern web development and am actively working on [open-source projects](https://github.com/0x4nud33p?tab=repositories). I'm passionate about creating impactful solutions and sharing knowledge through my [technical blog](https://medium.com/@0x4nud33p) as well as on [X(Twitter)](https://x.com/0x4nud33p) too | Free-lancer.",
  avatarUrl: "https://res.cloudinary.com/dbghbvuhb/image/upload/v1744607716/profileprofessional_nmfavf.jpg",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Solidity",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "Java",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "git",
    "GitHub",
    "Linux",
  ],
  videos: [
    {
      title: "",
      description: "",
      thumbnail: "",
      url: "",
      date: ""
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/gadgets", icon: Icons.shop, label: "Gadgets" },
  ],
  contact: {
    email: "anudeepavula009@gmail.com",
    tel: "+91 6300447414",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0x4nud33p",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/0x4nud33p/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/0x4nud33p",
        icon: Icons.x,

        navbar: true,
      },
      Medium: {
        name: "GitHub",
        url: "https://medium.com/@0x4nud33p",
        icon: Icons.medium,

        navbar: true,
      },
      Leetcode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/xanudeep009/",
        icon: Icons.leetcode,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:anudeepavula009@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  // work: [
  //   {
  //     company: "",
  //     href: "",
  //     badges: [],
  //     location: "",
  //     title: "",
  //     logoUrl: "",
  //     start: "",
  //     end: "",
  //     description:
  //       "",
  //   },
  // ],
  education: [
    {
      school: "Seshadri Rao Gudlavalleru Engineering Collge, Gudlavalleru",
      href: "https://tat.ac.in/",
      degree: "B.Tech in Information Technology",
      logoUrl: "/buildspace.webp",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Sketch",
      href: "https://github.com/0x4nud33p/sketch",
      dates: "January 2025 - February 2025",
      active: true,
      description:
        "A real-time collaborative whiteboard built with Next.js, WebSockets, and Prisma. This project allows multiple users to draw and interact on a shared canvas in real time, making it perfect for brainstorming, sketching, and online collaboration.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Framer-motion",
        "TypeScript",
        "shadcnUI",
        "PostgreSQL",
        "WebSockets",
        "Prisma",
        "Nodejs",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/0x4nud33p/sketch",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0x4nud33p/sketch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dbghbvuhb/video/upload/v1744347121/sxafl0jua3fscb70f81b.mp4",
    },
    {
      title: "Chat-App",
      href: "https://github.com/0x4nud33p/chat-app",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "A lightweight and fast real-time chat application built with Socket.io, TypeScript, Vite, and Tailwind CSS. This application allows anyone to create and join chat rooms to communicate anonymously or with a chosen name. Styled with Tailwind CSS for modern and responsive design.",
      technologies: [
        "CSS",
        "javascript",
        "typescript",
        "MongoDB",
        "Express.js",
        "HTML",
        "WebSockets",
        "Reactjs",
        "TailwindCSS",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/0x4nud33p/chat-app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0x4nud33p/chat-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      
      image: "",
      video:
        "https://res.cloudinary.com/dbghbvuhb/video/upload/v1744519853/ozwx6ct1zjlmwbmj2k0d.mp4",
    },
    {
      title: "Brainly",
      href: "https://github.com/0x4nud33p/brainly",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Brainly is a MERN stack application designed to help users save, organize, and share their favorite links.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Rest API",
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "Javascript",
        "react-router-dom",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/0x4nud33p/brainly",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0x4nud33p/brainly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dbghbvuhb/video/upload/v1744606950/wf6whxwdxvg8h41m9dnx.mp4",
    },
    {
      title: "Coin Whiz",
      href: "https://github.com/0x4nud33p/coinwhiz",
      dates: "July 2024 - Aug 2024",
      active: true,
      description:
        "CoinWhiz is a cryptocurrency price tracking web application that provides real-time data on various cryptocurrencies using the CoinGecko API.",
      technologies: [
        "React.js",
        "Redux",
        "TailwindCSS",
        "react-dom",
        "Nodejs",
        "Expressjs",
        "MongoDB",
        "Vite",
        "Git",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/0x4nud33p/coinwhiz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://res.cloudinary.com/dbghbvuhb/video/upload/v1744607299/gfjsv3vpzqobssus0dsc.mp4",
    },
  ],
  hackathons: [
    {
      title: "ITernity2025",
      dates: "March 26th 2025",
      location: "Andhra Pradesh, India",
      description:
        "Developed a learing portal with some free education content with the best paid contents too, the project was called as 'EducationX'.",
      image:
        "",
      mlh: "",
      links: [],
    },
  ],
} as const;
