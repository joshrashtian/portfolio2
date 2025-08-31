import { IconType } from 'react-icons';
import { GiGamepad } from 'react-icons/gi';
import { IoPeople } from 'react-icons/io5';
export type ProjectType = {
  id: number;
  name: string;
  dates: Date[] | "In-Development";
  source?: string;
  website?: string;
  link?: string;
  type: "Video Game" | "Website" | "Mobile App" | "Application";
  icon?: string;
  priority?: boolean;
  desc: string;
  tags?: string[];
  tools?: string[];
  gameRoute?: string;
  gameId?: string;
  iosLink?: string;
  androidLink?: string;
  gameIcons?: IconType[];
};

export const ProjectDetails: ProjectType[] = [
  {
    id: 0,
    name: "Tankzone",
    dates: [new Date("2018-08-16")],
    type: "Video Game",
   
    icon: require("../(assets)/projects/Tank.png"),
    desc: "The first full game I would create, using Construct 3 Game Engine. This is a multiplayer 2 people co-op game with controller / keyboard support playable right from your browser.",
    tools: ["Construct 3", "Photoshop"],
    gameRoute: "/games/Tankzone/index.html",
    gameId: "Tankzone",
    gameIcons: [
      GiGamepad, 
      IoPeople,
    ],
  },
  {
    id: 1,
    name: "Portfolio v1",
    dates: [new Date("2024-1-20")],
    type: "Website",
    link: "https://jrtechscv.com",
    source: "https://github.com/joshrashtian/Portfolio",
    desc: "First Generation of my Portfolio, originally built using Vite and ReactJS.",
    tools: ["ReactJS", "Vite", "TailwindCSS"],
  },
  {
    id: 2,
    name: "Super Mario Legacy",
    dates: [new Date("2019-9-10")],
    type: "Video Game",
    icon: require("../(assets)/projects/MarioLegacyIcon.png"),

    desc: "A dream game for me to make as a kid. A simple 2D Mario Fan Game using the Construct 3 Game Engine.",
    tools: ["Construct 3", "Photoshop"],
    gameRoute: "/games/supermariolegacy/index.html",
    gameId: "supermariolegacy",
    gameIcons: [
      GiGamepad, 
      
    ],
  },
  {
    id: 3,
    name: "MESA Connect",
    type: "Website",
    dates: "In-Development",
    icon: require("../(assets)/images/icons/mesalogo.png"),
    priority: true,
    link: "https://mesaconnect.io",
    desc: "Social Media Platform for Community College Students in STEM to communicate and learn, teach, and socialize together.",
    tools: [
      "NextJS",
      "React",
      "TailwindCSS",
      "Supabase",
      "Vercel",
      "TypeScript",
      "Unsplash API", 
    ],
  },
  {
    id: 4,
    name: "MESA Mobile",
    icon: require("../(assets)/images/icons/mesalogo.png"),
    type: "Mobile App",
    dates: [new Date("2025-8-27")],
    priority: true,
    iosLink: "https://apps.apple.com/us/app/mesamobile/id6504261825",
   
    link: "https://mesaconnect.io",
    desc: "Social Media Platform for Community College Students in STEM to communicate and learn, teach, and socialize together.",
    tools: ["React Native", "Supabase", "Expo"],
  },
  {
    id: 5,
    name: "MESA Connect (Original Prototype)",
    type: "Application",
    dates: [new Date("2023-12-27"), new Date("2024-2-10")],
    priority: true,
    source: "https://github.com/joshrashtian/MESA-Connect-Prototype/",
    desc: "The Original Prototype that the MESA Connect Project would be based off of.",
    tools: [
      "ReactJS",
      "Firebase",
      "Vite",
      "TailwindCSS",
      "Electron",
      "JavaScript",
    ],
  },
  {
    id: 6,
    name: "Portfolio v2",
    type: "Website",
    dates: [new Date("2024-9-1")],
    source: "https://github.com/joshrashtian/Portfolio2",
    priority: true,
    desc: "Second Generation of my Portfolio, built using NextJS and TailwindCSS.",
    tools: ["NextJS", "TailwindCSS", "TypeScript", "Notion API", "Vercel"],
  },
  {
    id: 7,
    name: "Super Mario Legacy 2",
    dates: [new Date("2019-9-17"), new Date("2020-5-4")],
    type: "Video Game",
    gameRoute: "/games/mariolegacy2/index.html",
    icon: require("../(assets)/projects/MarioLegacyIcon.png"),
    desc: "A dream game for me to make as a kid. A simple 2D Mario Fan Game using the Construct 3 Game Engine.",
    tools: ["Construct 3", "Photoshop"],
    gameId: "mariolegacy2",
  },
   {
    id: 8,
    name: "Tankzone 2 Concept",
    dates: [new Date("2018-10-17")],
    type: "Video Game",
    icon: require("../(assets)/projects/Tank.png"),
    desc: "The first full game I would create, using Construct 3 Game Engine. This is a multiplayer 2 people co-op game with controller / keyboard support playable right from your browser.",
    tools: ["Construct 3", "Photoshop"],
    gameRoute: "/games/tankzoneiiconcept/index.html",
    gameId: "tankzoneiiconcept",
    gameIcons: [
      GiGamepad, 
      IoPeople,
    ],
  },
  {
    id: 9,
    name: "Ragdoll Racing",
    dates: [new Date("2018-5-12")],
    type: "Video Game",
   
    desc: "The first full game I would create, using Construct 3 Game Engine. This is a multiplayer 2 people co-op game with controller / keyboard support playable right from your browser.",
    tools: ["Construct 3", "Photoshop"],
    gameRoute: "/games/ragdollracing/index.html",
    gameId: "ragdollracing",
    gameIcons: [
      GiGamepad, 
      IoPeople,
    ],
  },
];
