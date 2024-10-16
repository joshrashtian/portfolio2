import React from "react";
import Character from "./Character";
import Image from "next/image";
import { IoLogoJavascript, IoLogoReact, IoWarning } from "react-icons/io5";
import { motion } from "framer-motion";
import Simulator from "../_components/(journey)/Simulator";
const JourneyCanvas = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 bg-gradient-to-b from-black to-zinc-800 p-24 pb-72 text-center text-slate-50">
      <h1 className="mt-10 text-6xl font-black text-white drop-shadow-md">
        Where I Started
      </h1>
      <h2 className="text-center text-3xl font-semibold text-slate-100 drop-shadow-md">
        There has been two defining traits about my Journey:{" "}
        <code className="text-orange-300">curiousity</code> and{" "}
        <code className="text-teal-300">rampant creativity.</code>
      </h2>
      <p>
        Born in 2005 within the Los Angeles County, I was interested in
        computers ever since I was a kid. It started out as just a want to
        create levels for New Super Mario Bros Wii, and later funneled into
        computer science.
      </p>
      <section className="mt-12 flex w-1/2 flex-row justify-center">
        <Image
          src={require("../(assets)/images/Baby2.JPG")}
          width={400}
          height={400}
          className="-rotate-3 rounded-xl ring-4 ring-white ring-offset-4 ring-offset-black duration-500 hover:-rotate-6 hover:scale-[1.01] hover:ring-purple-300"
          alt="Picture of me"
        />
      </section>
      <section></section>
      <section className="mt-12 flex w-full flex-col justify-between">
        <h1 className="text-2xl font-bold">Skillset.</h1>
        <p>
          I am currently a College of the Canyons Student studying Computer
          Science, while developing full software on the side. I also have a
          background in Video Production as well.
        </p>
        <ul className="my-4 flex h-16 w-full items-center justify-center rounded-3xl border-2 border-orange-500/60 bg-orange-400/40">
          <IoWarning className="text-3xl" />
          <p className="flex flex-row gap-2">
            <b>CAUTION: </b> The following simulator/exprience may not work well
            on Mobile Devices. If on mobile, it may be better to visit projects
            to see my skillset over here.
          </p>
        </ul>
        {/*
        <ul className="animate-infinite-scroll inline-flex w-1/2 flex-row justify-center gap-5 self-center">
          
          
        </ul>*/}
        <Simulator />
      </section>
    </main>
  );
};

export default JourneyCanvas;
