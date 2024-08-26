import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Guillaume LE BERRE",
  initials: "GLB",
  url: "https://dillion.io", // TODO: Change this to your domain
  location: "Paris, France",
  description:
    "AWS Certified Solutions Architect & Backend Engineer",
  summary:
    "Accomplished Software Engineer with a Master’s from EPITECH Paris and an international stint at Brockport, USA. Adept in Golang, Python, and Cloud architecture, I consistently enhance backend solutions with an eye for efficiency and scalability. Driven by innovation and a pragmatic approach, I bring a track record of substantive contributions to fast-evolving tech environments, focusing on developing systems that are at the forefront of the industry",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D4E03AQG8bwNEqZcpAw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724594158059?e=1730332800&v=beta&t=ehSBCjqHZ800_beOBcaxPn6X8jO2wDMmmnvWGzw7bpQ",
  spokenLanguages: [
    "French - Native",
    "English - Fluent",
    "Japanese - Conversational"
  ],
  hobbies: [
    "Art & Science",
    "Climbing",
    "Pentesting",
    "State of the Art IT",
    "Video games competition"
  ],
  skillsLanguages: [
    "Golang",
    "Python",
    "C++",
    "C",
    "Bash",
    "Haskell"
  ],
  skillsArchitecture: [
    "AWS",
    "REST API",
    "Batch Processing",
    "Backend & Cloud",
    "Design Patterns",
    "Micro Services",
  ],
  skillsDevops: [
    "Terraform",
    "Docker",
    "CloudFormation",
    "CI/CD",
    "Monitoring",
    "Cyber Security - Red & Purple",
    "Network",
    "Makefile"
  ],
  skillsSoft: [
    "Pro-Active",
    "Outreach",
    "Functional view",
    "Aunomous",
    "Leadership",
    "SCRUM Agile",
    "KANBAN"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AmayaHena",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guillaume-le-berre-a2082216b/",
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Traid",
      badges: ["AWS", "Golang", "Python", "Terraform"],
      location: "Remote",
      title: "Co-Founder & CTO",
      logoUrl: "/",
      start: "June 2024",
      end: "Present",
      description:
        "Finance Solution",
    },
    {
      company: "PerfectStay",
      badges: ["AWS", "Golang", "Python", "Terraform"],
      location: "Hybrid",
      title: "Backend Engineer & Solutions Architect",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9D5XMxoTW6RCu9WVrFO3hVXNNZy4dw024Aw&s",
      start: "July 2023",
      end: "June 2024",
      description:
        "Developed and maintained a cutting-edge travel package solution involving multiple providers, implementing modern architecture principles to optimize performance, enhance reliability, and achieve cost savings, while consistently raising the bar for quality standards within the company",
    },
    {
      company: "Dalma",
      badges: ["AWS", "Python", "Architecture", "Docker"],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQHz-tWaOaG8Kg/company-logo_200_200/company-logo_200_200/0/1640267918307/dalma_assurance_logo?e=2147483647&v=beta&t=aLfzEWV8S43jZdk5BtVDsphQ8pFJtvdJC75k2l0rvyE",
      start: "January 2023",
      end: "June 2023",
      description:
        "Actively contributed towards the development and enhancement of a client-responsive pet insurance project, encompassing continuous improvements and cost savings.",
    },
    {
      company: "SafeTel",
      badges: ["AWS", "Golang", "Python", "Architecture"],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "/",
      start: "December 2021",
      end: "December 2022",
      description:
        "Developed a ground-breaking solution utilizing the SCRUM methodology to block nuisance calls from all landline phones.",
    },
    {
      company: "Inovatic",
      badges: ["Golang", ".NET", "Architecture"],
      location: "Remote",
      title: "Backend Engineer",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQG1wPZyIG8bBg/company-logo_200_200/company-logo_200_200/0/1630566001714/inovatic_logo?e=2147483647&v=beta&t=jqKc710XacOGN6E1DdUo0zGKmTwSOBqBAJfE1JGBFyE",
      start: "April 2021",
      end: "December 2021",
      description:
        "Contributed as a software engineer in the backend team, driving the development of an innovative automated accounting engine that utilizes image recognition technology, adopting the efficient Kanban workflow.",
    }
  ],
  education: [
    {
      school: "MASTER DEGREE at EPITECH Paris",
      href: "https://www.epitech.eu/programme-grande-ecole-informatique/",
      degree: "PGE Program - In Software Engineering",
      logoUrl: "https://epitech.bj/wp-content/uploads/2020/03/EPI-LOGO-SIGNATURE-2018.png"
    },
    {
      school: "BACHELOR College at Brockport",
      href: "https://www.brockport.edu/",
      degree: "N.Y.S. USA - Computer Science",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6a2jzllKvx_OHAa8kxwI9_tYFsWL4W-yfA&s"
    },
    {
      school: "BACHELOR DEGREE at EPITECH Paris",
      href: "https://www.epitech.eu/programme-grande-ecole-informatique/",
      degree: "PGE Program - In Software Engineering",
      logoUrl: "https://epitech.bj/wp-content/uploads/2020/03/EPI-LOGO-SIGNATURE-2018.png"
    },
    {
      school: "BACCALAUREAT SCIENTIFIC, Paris",
      href: "https://fr.wikipedia.org/wiki/Baccalaur%C3%A9at_scientifique",
      degree: "Specialized in Physics and Chemistry",
      logoUrl: "/"
    },
  ],
  certification: [
    {
      school: "AWS Solutions Architect",
      href: "https://www.credly.com/badges/e3f8d1d1-c52c-449b-8aa7-8006366ff122/linked_in_profile",
      degree: "Proficiency in AWS architecture and services",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s"
    },
  ],
  nextCertification: [
    {
      school: "Hashicorp Terraform Associate",
      href: "https://developer.hashicorp.com/certifications/infrastructure-automation",
      degree: "Infrastructure Automation as Code",
      logoUrl: "https://www.svgrepo.com/show/376353/terraform.svg"
    },
  ],
} as const;
