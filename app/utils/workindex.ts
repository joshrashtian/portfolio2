import { IoAnalytics, IoPhoneLandscape, IoPizza } from "react-icons/io5";
import { GeneralModalProps } from "../_components/(home)/General";
import { BiSolidSchool } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";

export const WorkIndex: GeneralModalProps[] = [{
    title: "MESA",
    degree: "Computer Science Intern",
    time: "February 2024 - present",
    icon: BiSolidSchool,
    descriptionIcon: FaComputer,
    description: "Marketing and software development for a local pizza restaurant.",
    data: {}
}, {
    title: "Pizza diMarco",
    degree: "Head of Marketing / Lead Software Developer",
    time: "August 2023 - present",
    icon: IoPizza,
    descriptionIcon: IoAnalytics,
    description: "Marketing and software development for a local pizza restaurant.",
    data: {}
}
]