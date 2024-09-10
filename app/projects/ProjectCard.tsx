"use client";
import { ProjectType } from "@/app/projects/ProjectIndex";
import Image from "next/image";
import Link from "next/link";
import React, { createContext, useContext } from "react";
import {
  IoLogoElectron,
  IoLogoFirebase,
  IoLogoGithub,
  IoLogoJavascript,
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
      <ul className="flex h-72 w-[500px] snap-center flex-col justify-between gap-3 whitespace-nowrap rounded-2xl bg-white p-3 ring-0 ring-offset-transparent duration-500 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-offset-4 dark:bg-zinc-700">
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
            className={`text-sm font-bold ${project.type === "Video Game" ? "text-green-700/70 dark:text-green-400" : project.type === "Website" ? "text-blue-500/40 dark:text-blue-500" : "text-slate-700 dark:text-purple-400"} `}
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
          className="flex w-full flex-row items-center gap-2 rounded-xl bg-zinc-100 p-2 duration-500 hover:scale-[1.02] hover:bg-zinc-300/70 dark:bg-zinc-600 dark:hover:bg-black/50"
        >
          <IoLogoWebComponent />
          <h1>Visit Website</h1>
        </Link>
      )}
      {source && (
        <Link
          href={source}
          className="flex w-full flex-row items-center gap-2 rounded-xl bg-zinc-100 p-2 duration-500 hover:scale-[1.02] hover:bg-zinc-300/70 dark:bg-zinc-600 dark:hover:bg-black/50"
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
      <h1 className="rounded-lg bg-slate-100 p-0.5 px-2 dark:bg-teal-800">
        In Development
      </h1>
    );
  }
  if (dates.length === 1)
    return (
      <h1 className="rounded-lg bg-zinc-50 p-0.5 px-2 dark:bg-blue-400">
        Released {months[dates[0].getMonth()]} {dates[0].getDate()},{" "}
        {dates[0].getFullYear()}
      </h1>
    );
  else if (dates.length === 2)
    return (
      <h1 className="rounded-lg bg-zinc-50 p-0.5 px-2 dark:bg-blue-400">
        {months[dates[0].getMonth()]} {dates[0].getDate()},{" "}
        {dates[0].getFullYear()} - {months[dates[1].getMonth()]}{" "}
        {dates[1].getDate()},{dates[1].getFullYear()}
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
                <ul className="absolute scale-0 rounded-xl bg-white p-3 text-sm font-light duration-300 group-hover:-translate-x-3 group-hover:-translate-y-20 group-hover:scale-[0.8] group-hover:shadow-lg dark:bg-black">
                  <p className="dark:text-white">{i}</p>
                </ul>
              </ul>
            </>
          );
        })}
      </ul>
    </>
  );
};

export const IconMatches = [
  {
    name: "ReactJS",
    icon: <IoLogoReact className="duration-300 hover:fill-blue-500" />,
  },
  {
    name: "React Native",
    icon: <IoLogoReact className="duration-300 hover:fill-blue-500" />,
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
    icon: <IoLogoFirebase className="duration-300 hover:fill-orange-500" />,
  },
  {
    name: "Electron",
    icon: <IoLogoElectron className="duration-300 hover:fill-blue-800" />,
  },
  {
    name: "TailwindCSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 duration-300 hover:fill-teal-500"
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
          className="fill-slate-400/70 duration-300 group-hover:fill-green-700"
          d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
        />
        <path
          d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
          className="fill-slate-400 duration-300 group-hover:fill-green-800"
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
  {
    name: "NextJS",
    icon: (
      <svg viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
        <g>
          <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"></path>
        </g>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="duration-300 hover:fill-yellow-600" />,
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TypeScript"
        role="img"
        className="duration-300 hover:fill-blue-600"
        viewBox="0 0 512 512"
      >
        <rect width="512" height="512" rx="15%" />
        <path
          fill="#ffffff"
          d="m233 284h64v-41H118v41h64v183h51zm84 173c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4c11-2.3 20-6.1 28-11c8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9c-5.2-2.6-9.7-5.2-13-7.8c-3.7-2.7-6.5-5.5-8.5-8.4c-2-3-3-6.3-3-10c0-3.4.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6c4.7-1.1 9.9-1.6 16-1.6c4.2 0 8.6.31 13 .94c4.6.63 9.3 1.6 14 2.9c4.7 1.3 9.3 2.9 14 4.9c4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21c-4.7 8.4-7 18-7 30c0 15 4.3 28 13 38c8.6 11 22 19 39 27c6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5c2.5 3.4 3.8 7.4 3.8 12c0 3.2-.78 6.2-2.3 9s-3.9 5.2-7.1 7.2s-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7c-11 0-22-1.9-32-5.7c-11-3.8-21-9.5-28.1-15.44z"
        />
      </svg>
    ),
  },
  {
    name: "Unsplash API",
    icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path fill="none" d="M0 0H24V24H0z" />
          <path d="M8.5 11v5h7v-5H21v10H3V11h5.5zm7-8v5h-7V3h7z" />
        </g>
      </svg>
    ),
  },
];

export default ProjectCard;
