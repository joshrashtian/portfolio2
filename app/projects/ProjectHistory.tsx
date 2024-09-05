"use client";
import React from "react";
import { ProjectDetails } from "./ProjectIndex";
import ProjectCard from "./ProjectCard";

const ProjectHistory = () => {
  return (
    <section className="h-84 snap-point relative flex snap-x flex-row gap-4 overflow-x-scroll scroll-smooth whitespace-nowrap bg-zinc-100 p-4 px-8">
      {ProjectDetails.map((project) => (
        <ProjectCard project={project} key={project.id}>
          <ProjectCard.Date />
          <ProjectCard.Link />
        </ProjectCard>
      ))}
    </section>
  );
};

export default ProjectHistory;
