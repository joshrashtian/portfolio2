export type ProjectType = {
    id: number
    name: string
    dates: Date[] | "In-Development"
    source?: string
    website?: string
    link?: string
    type: "Video Game" | "Website" | "Mobile App"
    icon?: string
    priority?: boolean
    desc: string
    tags?: string[]
    tools?: string[]
}

export const ProjectDetails: ProjectType[] = [{
    id: 0,
    name: "Tankzone",
    dates: [new Date("2018-08-16")],
    type: "Video Game",
    link: "https://gamegen.games/game/axrh2STs9q6aG3WdK",
    icon: require("../(assets)/projects/Tank.png"),
    desc: "The first full game I would create, using Construct 3 Game Engine. This is a multiplayer 2 people co-op game with controller / keyboard support playable right from your browser."
}, {
    id: 1,
    name: "Portfolio v1",
    dates: [new Date("2024-1-20")],
    type: "Website",
    link: "https://jrtechscv.com",
    source: "https://github.com/joshrashtian/Portfolio",
    desc: "First Generation of my Portfolio, originally built using Vite and ReactJS.",
    tools: ["ReactJS", "Vite", "TailwindCSS"]
},
{
    id: 2,
    name: "Super Mario Legacy",
    dates: [new Date("2019-9-10")],
    type: 'Video Game',
    icon: require("../(assets)/projects/MarioLegacyIcon.png"),
    link: "https://gamegen.games/game/BjEpaGDJ2ksndAhKn",
    desc: "A dream game for me to make as a kid. A simple 2D Mario Fan Game using the Construct 3 Game Engine.",
    tools: ["Construct 3", "Photoshop"]
},
{
    id: 3,
    name: "MESA Connect",
    type: "Website",
    dates: "In-Development",
    priority: true,
    link: "https://mesaconnect.io",
    desc: "Social Media Platform for Community College Students in STEM to communicate and learn, teach, and socialize together.",
    tools: ["NextJS", "React", "TailwindCSS", "Supabase", "Vercel", "TypeScript"]
},
{
    id: 4,
    name: "MESA Mobile",
    type: "Mobile App",
    dates: "In-Development",
    priority: true,
    link: "https://mesaconnect.io",
    desc: "Social Media Platform for Community College Students in STEM to communicate and learn, teach, and socialize together.",
    tools: ["React Native", "Supabase"]
},

]