"use client";
import React, { useEffect, useRef } from "react";
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

const ProjectHistory = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: scrollRef,
  });

  const smoothScroll = useSpring(scrollXProgress, {
    stiffness: 400,
    damping: 90,
  });
  const velocity = useVelocity(smoothScroll);
  const scroll = useTransform(velocity, [-3, 0, 3], [1, 0, 1], {
    clamp: false,
  });

  return (
    <>
      <motion.ul
        style={{ opacity: scroll, scaleX: smoothScroll }}
        className="h-2 w-full origin-left bg-teal-500"
      />

      <motion.section
        ref={scrollRef}
        className="h-84 snap-point no-scrollbar relative flex snap-x flex-row gap-4 overflow-x-scroll scroll-smooth whitespace-nowrap bg-zinc-100 p-4 px-8"
      >
        {ProjectDetails.map((project) => (
          <ProjectCard project={project} key={project.id}>
            <ProjectCard.Description />
            <ProjectCard.Date />
            <ProjectCard.Link />
          </ProjectCard>
        ))}
      </motion.section>
    </>
  );
};

export default ProjectHistory;