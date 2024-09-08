"use client";
import { ProjectType } from "@/app/projects/ProjectIndex";
import Image from "next/image";
import Link from "next/link";
import React, { createContext, useContext } from "react";
import {
  IoLogoElectron,
  IoLogoFirebase,
  IoLogoGithub,
  IoLogoReact,
  IoLogoWebComponent,
} from "react-icons/io5";

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

ProjectCard.Icons = function ProjectIcons() {
  const { tools } = useProjectContext();

  return (
    <>
      <ul className="mt-1 flex flex-row gap-2 text-[30px] text-slate-400">
        {tools?.map((i, a) => {
          if (!IconMatches.find((e) => e.name === i)) return null;
          return (
            <>
              <ul
                key={a}
                className="group h-[30px] w-[30px] fill-slate-400 duration-500 hover:scale-125 hover:fill-slate-800 hover:text-slate-800"
              >
                {" "}
                {IconMatches.find((e) => e.name === i)?.icon}{" "}
                <ul className="absolute scale-0 rounded-xl bg-white p-3 text-sm font-light duration-300 group-hover:-translate-x-3 group-hover:-translate-y-20 group-hover:scale-[0.8] group-hover:shadow-lg">
                  <p>{i}</p>
                </ul>
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
};

const IconMatches = [
  {
    name: "ReactJS",
    icon: <IoLogoReact />,
  },
  {
    name: "React Native",
    icon: <IoLogoReact />,
  },
  {
    name: "Expo",
    icon: (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.292 15.547c1.968 0.131 3.729-1.213 4.115-3.145-0.475-0.735-1.287-1.177-2.161-1.177-2.272-0.052-3.491 2.651-1.953 4.323zM15.115 4.697l5.359-3.104-1.708-0.963-7.391 4.281 0.589 0.328 1.119 0.629 2.032-1.176zM21.161 1.307c0.089 0.027 0.161 0.1 0.188 0.188l2.484 7.593c0.047 0.131-0.005 0.272-0.125 0.344-1.968 1.156-2.916 3.489-2.317 5.693 0.656 2.391 2.937 3.953 5.401 3.703 0.135-0.011 0.265 0.073 0.307 0.203l2.563 7.803c0.041 0.131-0.011 0.271-0.125 0.344l-7.859 4.771c-0.037 0.021-0.084 0.036-0.131 0.036-0.068 0.016-0.14 0-0.203-0.041l-2.765-1.797c-0.048-0.031-0.084-0.077-0.109-0.129l-5.396-12.896-8.219 4.875c-0.016 0.011-0.037 0.021-0.052 0.032-0.084 0.036-0.183 0.025-0.261-0.021l-1.859-1.093c-0.136-0.073-0.188-0.245-0.115-0.381l7.953-15.749c0.025-0.057 0.077-0.104 0.135-0.131l7.959-4.609c0.088-0.052 0.197-0.057 0.292-0.005zM12.839 6.407l-1.932-1.089-7.693 15.229 1.396 0.823 6.631-9.015c0.063-0.089 0.167-0.136 0.271-0.12 0.104 0.011 0.192 0.077 0.235 0.177l7.228 17.296 1.933 1.251-8.063-24.552zM26.245 16.964c-2.256 0-3.787-2.292-2.923-4.376 0.86-2.083 3.563-2.619 5.156-1.025 0.595 0.593 0.928 1.396 0.928 2.235 0.005 1.749-1.412 3.167-3.161 3.167z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: <IoLogoFirebase />,
  },
  {
    name: "Electron",
    icon: <IoLogoElectron />,
  },
  {
    name: "TailwindCSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 54 33"
      >
        <g clip-path="url(#prefix__clip0)">
          <path
            fill-rule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            clip-rule="evenodd"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 109 113" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" />
        <path
          className="fill-slate-400/70 duration-300 group-hover:fill-slate-700"
          d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        />
        <path
          d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
          className="fill-slate-400 duration-300 group-hover:fill-slate-800"
        />
      </svg>
    ),
  },
  {
    name: "Construct 3",
    icon: (
      <svg version="1.1" viewBox="499 379 690 690">
        <g id="bg">
          <g>
            <g>
              <path
                d="M850.39453,860.66992
				c-50.35645,0-94.3252-27.35645-117.85254-68.02051l-80.03027,46.2041c-4.6543,2.68945-6.13086,8.71875-3.24805,13.25586
				C691.50098,918.5957,765.7959,962.7168,850.39453,962.7168c88.12598,0,165.07129-47.875,206.24316-119.03613l-80.48633-46.46973
				c-4.31445-2.49023-9.80273-1.20508-12.57129,2.93555C939.1748,836.64063,897.59082,860.66992,850.39453,860.66992
				L850.39453,860.66992z M1136.7207,559.2959c4.61426-2.66309,6.11035-8.61914,3.3125-13.15137
				c-59.91504-97.03027-167.22461-161.69434-289.63867-161.69434c-125.89355,0-235.81348,68.39258-294.63379,170.0498
				l80.37695,46.40625c4.39844,2.53906,10.00195,1.14941,12.71094-3.14551
				c42.16406-66.85156,116.66992-111.26367,201.5459-111.26367c88.12598,0,165.07129,47.87598,206.24316,119.03613
				L1136.7207,559.2959z"
              />
              <path
                d="M850.39453,962.7168
				c-84.59863,0-158.89355-44.12109-201.13086-110.60742c-2.87695-4.53027-1.40039-10.57031,3.24805-13.25586l80.03027-46.2041
				c-11.58105-20.0166-18.20996-43.25488-18.20996-68.04199c0-74.78516,60.55762-136.0625,136.0625-136.0625
				c47.19629,0,88.78027,24.0293,113.18555,60.52246c2.76465,4.13379,8.26367,5.42188,12.57129,2.93555l80.48633-46.46973
				c-41.17188-71.16016-118.11719-119.03613-206.24316-119.03613c-84.87598,0-159.38184,44.41211-201.5459,111.26367
				c-2.70605,4.29102-8.31836,5.68164-12.71094,3.14551L555.76074,554.5c-28.95215,50.04004-45.52344,108.13965-45.52344,170.10742
				c0,186.96484,151.39453,340.1582,340.15723,340.1582c122.41406,0,229.72363-64.66406,289.63867-161.69531
				c2.7959-4.52734,1.29492-10.49023-3.3125-13.15234l-80.08301-46.2373
				C1015.46582,914.8418,938.52051,962.7168,850.39453,962.7168z"
              />
            </g>
            <path
              d="M1137.18457,761.19141v-73.16797l-63.36523,36.58398
			L1137.18457,761.19141L1137.18457,761.19141z M1026.5752,708.24219l120.05859-69.31641
			c12.56836-7.25586,28.3457,1.85254,28.3457,16.36621v138.63086c0,14.5127-15.77734,23.62207-28.3457,16.36621
			l-120.05859-69.31641C1014.02734,733.72754,1014.02734,715.4873,1026.5752,708.24219z"
            />
          </g>
        </g>
        <g id="logo"></g>
      </svg>
    ),
  },
];

export default ProjectCard;
