import { IoAnalytics, IoPhoneLandscape, IoPizza } from "react-icons/io5";
import { GeneralModalProps } from "../_components/(home)/General";
import { BiSolidSchool } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";

export const WorkIndex: GeneralModalProps[] = [{
    title: "MESA",
    degree: "Computer Science Intern",
    time: "February 2024 - present",
    location: "Valencia, CA",
    icon: BiSolidSchool,
    descriptionIcon: FaComputer,
    description: "Teaching students about Computer Science and Software Developer of MESA Mobile App and Connect Service. ",
    data: {}
}, {
    title: "Pizza diMarco",
    degree: "Head of Marketing / Lead Software Developer",
    time: "August 2023 - present",
    location: "Valencia, CA",
    icon: IoPizza,
    descriptionIcon: IoAnalytics,
    description: "Marketing and software development for a local pizza restaurant.",
    data: {}
}
]