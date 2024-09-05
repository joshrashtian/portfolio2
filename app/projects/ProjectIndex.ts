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
}

export const ProjectDetails: ProjectType[] = [{
    id: 0,
    name: "Tankzone",
    dates: [new Date("2018-08-16")],
    type: "Video Game",
    link: "https://gamegen.games/game/axrh2STs9q6aG3WdK",
    icon: require("../(assets)/projects/Tank.png")
}, {
    id: 1,
    name: "Portfolio v1",
    dates: [new Date("2024-1-20")],
    type: "Website",
},
{
    id: 2,
    name: "Super Mario Legacy",
    dates: [new Date("2019-9-10")],
    type: 'Video Game',
    icon: require("../(assets)/projects/MarioLegacyIcon.png"),
    link: "https://gamegen.games/game/BjEpaGDJ2ksndAhKn"
},
{
    id: 3,
    name: "MESA Connect",
    type: "Website",
    dates: "In-Development",
    priority: true,
    link: "https://mesaconnect.io"
},
{
    id: 4,
    name: "MESA Mobile",
    type: "Mobile App",
    dates: "In-Development",
    priority: true,
    link: "https://mesaconnect.io"
},

]