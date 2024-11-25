import { IoSchool } from "react-icons/io5";
import { GeneralModalProps } from "../_components/(home)/General";
import { BiMath, BiSolidSchool } from "react-icons/bi";

export const Degrees: GeneralModalProps[] = [
  {
    title: "College of the Canyons",
    degree: "Associate's Degree For Transfer - Computer Science",
    icon: IoSchool,
    description: "Learned Calculus, Physics, Java, React",
    descriptionIcon: BiMath,
    time: "June 2023 - May 2025",
    data: {},
    skills: ["ReactJS", "Java", "JavaScript", "Calculus", "Physics", "Spanish"],
    classes: ["Introduction to Java", "Data Structures / Algorithms", "Discrete Structures", "Calculus I-III", "Mechanics and Solids of Physics", "Electromagnetism Physics"],
    clubs: [
        {
            role: "Lead of Web Developer / ICC Representative ",
            name: "COC Tech Club",
            responsibilities: ""
        }
    ]
},
  {
    title: "West Ranch High School",
    degree: "High School Diploma",
    icon: BiSolidSchool,
    description:
      "Learned JavaScript, After Effects, Premiere Pro. Editor for West Ranch TV.",
    descriptionIcon: BiMath,
    time: "August 2019 - May 2023",
    data: {},
    classes: ["AP Computer Science Principles", "Game Development", "Video Production A+B", "West Ranch TV"]
  },
];