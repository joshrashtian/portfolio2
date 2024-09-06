"use client";
import { ProjectType } from "@/app/projects/ProjectIndex";
import Image from "next/image";
import Link from "next/link";
import React, { createContext, useContext } from "react";
import { IoLogoGithub, IoLogoWebComponent } from "react-icons/io5";

type ProjectProps = {
  project: ProjectType;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ProjectCardContext = createContext<ProjectProps | undefined>(undefined);

const ProjectCard = ({
  project,
  children,
}: ProjectProps & { children?: React.ReactNode }) => {
  return (
    <ProjectCardContext.Provider value={{ project }}>
      <ul className="flex h-72 w-[500px] snap-center flex-col justify-between gap-3 whitespace-nowrap rounded-2xl bg-white p-3 duration-500 hover:scale-105 hover:shadow-lg">
        <ul>
          <header className="flex w-[500px] flex-row items-center gap-3">
            {project.icon && (
              <Image
                width={48}
                height={48}
                className="rounded-xl duration-300 hover:scale-105 hover:shadow-lg"
                src={project.icon}
                alt={`Project ${project.name}`}
              />
            )}
            <h1 className="text-2xl font-bold">{project.name}</h1>
          </header>
          <h2
            className={`text-sm font-bold ${project.type === "Video Game" ? "text-green-700/70" : project.type === "Website" ? "text-blue-500/40" : "text-slate-700"} `}
          >
            {project.type.toUpperCase()}
          </h2>
        </ul>
        <ul className="flex flex-col gap-0.5">{children}</ul>
      </ul>
    </ProjectCardContext.Provider>
  );
};

function useProjectContext() {
  const context = useContext(ProjectCardContext);

  if (!context) throw new Error("Does Not Have Wrapper");

  return context.project;
}

ProjectCard.Link = function ProjectCardLink() {
  const { link, source } = useProjectContext();

  if (!link && !source) return null;
  return (
    <ul className="flex w-full flex-row gap-1">
      {link && (
        <Link
          href={link}
          className="flex w-full flex-row items-center gap-2 rounded-xl bg-zinc-100 p-2 duration-500 hover:scale-[1.02] hover:bg-zinc-300/70"
        >
          <IoLogoWebComponent />
          <h1>Visit Website</h1>
        </Link>
      )}
      {source && (
        <Link
          href={source}
          className="flex w-full flex-row items-center gap-2 rounded-xl bg-zinc-100 p-2 duration-500 hover:scale-[1.02] hover:bg-zinc-300/70"
        >
          <IoLogoGithub />
          <h1>Source Code</h1>
        </Link>
      )}
    </ul>
  );
};

ProjectCard.Date = function ProjectDate() {
  const { dates } = useProjectContext();

  if (typeof dates === "string") {
    return (
      <h1 className="rounded-lg bg-slate-100 p-0.5 px-2">In Development</h1>
    );
  }
  if (dates.length === 1)
    return (
      <h1 className="rounded-lg bg-zinc-50 p-0.5 px-2">
        Released {months[dates[0].getMonth()]} {dates[0].getDate()},{" "}
        {dates[0].getFullYear()}
      </h1>
    );
};

ProjectCard.Description = function ProjectDescription() {
  const { desc } = useProjectContext();

  return (
    <ul>
      <p className="text-wrap">{desc.slice(0, 80)}</p>
    </ul>
  );
};

export default ProjectCard;
