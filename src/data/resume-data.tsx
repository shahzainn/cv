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
    "Full Stack Engineer",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. At the age of 13, I worked on products that amounted to over £150,000 in revenue.",
  avatarUrl: "https://creatorspace.imgix.net/users/cloyqxygl00ctm7010rja8hzd/4wA6Y2zOSHWEKdqo-icon.png?w=300&h=300",
  personalWebsiteUrl: "https://bento.me/shahzain",
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
      school: "Manchester Metropolitan University",
      degree: "MSc Digital and Technology Solutions (Software Engineering)",
      start: "2024",
      end: "2028",
    },
    {
      school: "Loxford School",
      degree: "A-Levels in Computer Science, Physics and Maths",
      start: "2022",
      end: "2024",
    },
    {
      school: "Loxford School",
      degree: "10 GCSE A*-A",
      start: "2017",
      end: "2022",
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
        "Building technology solutions alongside FinTech industry experts. Designing, installing and testing new and existing systems.",
    },
    {
      company: "KyroMark",
      link: "https://kyromark.netlify.app/",
      badges: ["Startup"],
      title: "Founder",
      logo: ClevertechLogo,
      start: "2023",
      end: "Present",
      description:
        "Building a platform to revolutionise the way students revise for GCSE. Working with Tailwind, Firebase, socket.io and OpenAI.",
    },
    {
      company: "GetLearning.ai",
      link: "https://getlearning.ai/",
      badges: ["Startup"],
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
        "Launched a design consultancy with an S&P500 business at the age of 13, working with large businesses and contributing to thousands of product sales. Employed and co-ordinated a global team of 6.",
    },
    {
      company: "RFI Global",
      link: "https://rfi.global/",
      badges: ["Work Experience"],
      title: "Intern",
      logo: JojoMobileLogo,
      start: "2023",
      end: "2023",
      description:
        "Shadowed the Director of Finance at a globally-renowned Data-as-a-Service firm, assisting them with the day-to-day running and operation of a global tech firm.",
    },
    {
      company: "British Airways",
      link: "https://www.britishairways.com/travel/home/public/en_gb",
      badges: ["Virtual Work Experience"],
      title: "Data Scientist",
      logo: JojoMobileLogo,
      start: "2023",
      end: "2023",
      description:
        "Created a dataset from user reviews and analysed common trends that allowed me to view the weaknesses for customers. Presented my findings to decision-makers. Experience sourced via The Forage.",
    },
    {
      company: "Cognizant",
      link: "https://www.cognizant.com/uk/en",
      badges: ["Virtual Work Experience"],
      title: "Intern",
      logo: JojoMobileLogo,
      start: "2022",
      end: "2022",
      description:
        "Analysed the different methodologies and consolidated learning on the agile methodology, studying examples of scrums and conflict resolution in a work environment. Experience sourced via The Forage.",
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
        href: "https://kyromark.netlify.app/",
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
    {
      title: "Blackboard",
      techStack: [
        "Side Project",
        "JavaScript",
        "TailwindCSS",
        "Socket.IO",
        "Realtime Data Processing",
      ],
      description: "A chat app built for students in schools, providing a safe and secure portal for student communication.",
      logo: ConsultlyLogo,
      link: {
        label: "blackboard",
        href: "",
      },
    },
    {
      title: "Railworks",
      techStack: [
        "Side Project",
        "Luau",
        "Architecture",
        "Community Interaction",
      ],
      description: "A set of intuitive transportation simulation tools built for the ROBLOX community, changing the quality standard for transport games.",
      logo: ConsultlyLogo,
      link: {
        label: "blackboard",
        href: "",
      },
    },
  ],
} as const;
