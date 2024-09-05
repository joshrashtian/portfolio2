import React from "react";
import Character from "./Character";
import Image from "next/image";

const JourneyCanvas = () => {
  return (
    <main className="flex min-h-screen flex-col gap-3 bg-zinc-400 p-24">
      <h1 className="mt-10 text-6xl font-black text-white drop-shadow-md">
        Where It Started
      </h1>
      <h2 className="text-3xl font-semibold text-slate-100 drop-shadow-md">
        There has been two defining traits about my Journey:{" "}
        <span className="text-orange-300">curiousity</span> and
        <span className="text-teal-300"> rampant creativity.</span>
      </h2>
      <p>
        Born in 2005 within the Los Angeles County, I was surrounded by various
        family members who loved Computer Science even at a young age. However,
        my interest in it would start back in 2010, when my parents brought home
        a Nintendo Wii. As a kid, I started to become a huge fan of Video Games,
        and would research creating them myself. My introduction to CS was when
        I started to create a Minecraft Server in 2015 for me and my friends. I
        ended up taking a huge liking to creating game modes, it ended up
        becoming a massive way for me as a kid to express myself. This would be
        great for my transition into Game Development Courses when I turned 12.
        I created various games between 2018-2020, and learned a various amount
        of the coding process and the basics of Computer Science.
      </p>
      <Image
        src={require("../(assets)/images/Baby2.JPG")}
        width={400}
        height={400}
        alt="Picture of me"
      />
    </main>
  );
};

export default JourneyCanvas;
