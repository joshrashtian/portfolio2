import React from "react";
import { IoHammerSharp } from "react-icons/io5";
import ProjectHistory from "./ProjectHistory";

const Projects = () => {
  return (
    <div className="min-h-screen py-40">
      <h1 className="mb-10 flex flex-row gap-2 px-24 text-6xl font-black drop-shadow-lg duration-500 hover:text-orange-600">
        <IoHammerSharp /> Projects
      </h1>
      <ProjectHistory />
    </div>
  );
};

export default Projects;
