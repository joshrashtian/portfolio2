import React from "react";
import FeaturedCard from "./FeaturedCard";
import Image from "next/image";

const FeaturedProjects = () => {
  return (
    <>
      <h2 className="ml-24 text-2xl font-semibold">Featured Projects</h2>
      <ul className="snap-point flex h-96 w-full snap-x snap-mandatory flex-row gap-24 overflow-x-scroll scroll-smooth whitespace-nowrap bg-zinc-100/30 p-10 px-52">
        <FeaturedCard className="flex flex-col justify-between">
          <ul className="relative h-48 w-full rounded-lg">
            <Image
              src={require("../../(assets)/projects/MESAPicture.png")}
              fill
              objectFit="cover"
              className="rounded-lg"
              alt="mesa"
            />
          </ul>
          <ul>
            <FeaturedCard.Title>
              Power Up Your STEM Learning With MESAConnect
            </FeaturedCard.Title>
            <FeaturedCard.Desc>Join Today!</FeaturedCard.Desc>
          </ul>
        </FeaturedCard>
      </ul>
    </>
  );
};

export default FeaturedProjects;
