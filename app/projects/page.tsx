import React from "react";
import { IoHammerSharp } from "react-icons/io5";
import ProjectHistory from "./ProjectHistory";
import FeaturedProjects from "../_components/(projects)/Featured";

const Projects = () => {
  return (
    <div className="min-h-screen py-40">
      <h1 className="mb-10 flex flex-row gap-2 px-2 text-6xl font-black drop-shadow-lg duration-500 hover:text-orange-600 xl:px-10">
        <IoHammerSharp /> Projects
      </h1>
      <FeaturedProjects />
      <ProjectHistory />
    </div>
  );
};

export default Projects;
