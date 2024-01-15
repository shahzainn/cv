import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shahzain Arshad",
  initials: "SA",
  location: "London, United Kingdom, GMT",
  locationLink: "https://www.google.com/maps/place/London",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. At the age of 13, I worked on products that amounted to over £150,000 in revenue.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://shahzain.bento.me",
  contact: {
    email: "shahzainarshad06@gmail.com",
    tel: "+447869772009",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shahzainn",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shahzainarshad/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Loxford School of Science and Technology",
      degree: "A-Levels in Computer Science, Physics and Maths",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Barclays",
      link: "https://www.barclays.co.uk/",
      badges: ["Degree Apprenticeship"],
      title: "Technology Developer",
      logo: ParabolLogo,
      start: "2024",
      end: "2028",
      description:
        "Building technology solutions alongside FinTech industry experts. Design, install and test new and existing systems.",
    },
    {
      company: "GetLearning.ai",
      link: "https://getlearning.ai/",
      badges: [""],
      title: "Head Developer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2023",
      description:
        "Designed and built iterative prototypes for an EdTech startup, leading to orders worth over £30,000 in 2 days. Worked with Tailwind, React, Node and Firebase.",
    },
    {
      company: "Nomad Interactive",
      link: "",
      badges: ["Remote"],
      title: "Head Executive",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2022",
      description:
        "Launched a design consultancy at the age of 13, working with large businesses and contributing to thousands of product sales. Employed and co-ordinated a global team of 6.",
    },
  ],
  skills: [
    "JavaScript",
    "TailwindCSS",
    "React/Next.js",
    "Node.js",
    "Firebase",
    "Python",
  ],
  projects: [
    {
      title: "KyroMark",
      techStack: [
        "Side Project",
        "JavaScript",
        "TailwindCSS",
        "Firebase",
        "OpenAI",
        "Axios",
      ],
      description: "An AI based revision tool. Not complete.",
      logo: ConsultlyLogo,
      link: {
        label: "kyromark",
        href: "https://simplylearning-ad8e8.web.app/",
      },
    },
    {
      title: "Kairos",
      techStack: ["Side Project", "Databases", "Flutter", "Big Data"],
      description:
        "App that notifies pilots when approaching a hazard. Not complete.",
      logo: MonitoLogo,
      link: {
        label: "kairos",
        href: "",
      },
    },
    {
      title: "The West London Project",
      techStack: ["Side Project", "Luau", "Figma"],
      description:
        "Building a game that accurately mirrors the transportation of West London.",
      logo: JarockiMeLogo,
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
