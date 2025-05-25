"use client";
import React, { useEffect, useRef, useState } from "react";
import { ProjectDetails } from "./ProjectIndex";
import ProjectCard from "./ProjectCard";
import {
  useScroll,
  motion,
  useSpring,
  useVelocity,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import FeaturedProjects from "../_components/(projects)/Featured";
import {
  IoBody,
  IoCard,
  IoCardOutline,
  IoGrid,
  IoHammer,
  IoList,
  IoMenu,
} from "react-icons/io5";
import { IoMdListBox } from "react-icons/io";

const ProjectHistory = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });
  const [type, setType] = useState<"list" | "cards">("cards");

  const smoothScroll = useSpring(scrollXProgress, {
    stiffness: 400,
    damping: 90,
  });
  const velocity = useVelocity(smoothScroll);
  const scroll = useTransform(velocity, [-3, 0, 3], [1, 0, 1], {
    clamp: false,
  });

  const text = useTransform(velocity, [-7, 0, 7], [100, 0, -100], {
    clamp: false,
  });

  const opacity = useTransform(velocity, [-3, 0, 3], [0, 1, 0], {
    clamp: false,
  });

  const handleType = (type: "list" | "cards") => {
    setType(type);
  };
  return (
    <>
      <ul className="flex flex-row gap-2 px-10">
        <button
          className="text-2xl duration-300 hover:scale-105 hover:text-orange-500"
          onClick={() => handleType("list")}
        >
          <IoList />
        </button>
        <button
          className="text-2xl duration-300 hover:scale-105 hover:text-orange-500"
          onClick={() => handleType("cards")}
        >
          <IoGrid />
        </button>
      </ul>
      {type === "cards" ? (
        <>
          <motion.ul
            style={{ opacity: scroll, scaleX: smoothScroll }}
            className="h-2 w-full origin-left bg-teal-500"
          />

          <motion.h1
            style={{ x: text, opacity }}
            className="ml-3 flex flex-row items-center gap-2 text-2xl"
          >
            <IoHammer /> Project Archive
          </motion.h1>
          <motion.section
            ref={scrollRef}
            className="snap-point no-scrollbar font-nenue relative flex h-84 snap-x flex-row gap-2 overflow-x-scroll scroll-smooth bg-zinc-100 p-4 px-8 whitespace-nowrap xl:gap-4 dark:bg-slate-900"
          >
            {ProjectDetails.sort((a, b) =>
              a.priority === b.priority ? 0 : a.priority ? -1 : 1,
            ).map((project) => (
              <ProjectCard type="cards" project={project} key={project.id}>
                <ProjectCard.Description />
                <ProjectCard.Date />
                <ProjectCard.Link />
                <ProjectCard.GameLink />
                <ProjectCard.Icons />
              </ProjectCard>
            ))}
          </motion.section>
        </>
      ) : (
        <motion.section className="flex flex-col gap-4">
          <motion.h1
            style={{ x: text, opacity }}
            className="ml-3 flex flex-row items-center gap-2 text-2xl"
          >
            <IoHammer /> Project Archive
          </motion.h1>
          <motion.section className="flex w-full flex-col gap-2 px-10">
            {ProjectDetails.sort((a, b) =>
              a.priority === b.priority ? 0 : a.priority ? -1 : 1,
            ).map((project) => (
              <ProjectCard type="list" project={project} key={project.id}>
                <ProjectCard.Description />
                <ProjectCard.Date />
                <ProjectCard.Link />
                <ProjectCard.GameLink />
                <ProjectCard.Icons />
              </ProjectCard>
            ))}
          </motion.section>
        </motion.section>
      )}
    </>
  );
};

export default ProjectHistory;
