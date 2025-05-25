import React from "react";
import Character from "./Character";
import Image from "next/image";
import {
  IoArrowForward,
  IoArrowUp,
  IoLogoJavascript,
  IoLogoReact,
  IoWarning,
} from "react-icons/io5";
import { motion } from "framer-motion";
import Simulator from "../_components/(journey)/Simulator";
import Link from "next/link";
const JourneyCanvas = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-3 bg-linear-to-b from-black to-zinc-800 p-24 pb-72 text-center text-slate-50">
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
          className="-rotate-3 rounded-xl ring-4 ring-white ring-offset-4 ring-offset-black duration-500 hover:scale-[1.01] hover:-rotate-6 hover:ring-purple-300"
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

        <section className="mt-12 flex h-fit w-full flex-row">
          <ol className="flex h-full w-full flex-col items-start gap-5 text-xl">
            <li className="ml-3 flex h-12 w-full flex-col text-left">
              <h1 className="text-2xl font-bold">2005</h1>
              <p>I was born in Los Angeles County.</p>
            </li>
            <li className="ml-3 flex h-fit w-full flex-col text-right">
              <h1 className="text-2xl font-bold">2010</h1>
              <p>
                My parents would bring home a Nintendo Wii. This console would
                be a introduction to what I would spend my adolescence being
                obsessed with.
              </p>
            </li>
            <li className="ml-3 flex h-fit w-full flex-col text-left">
              <h1 className="text-2xl font-bold">2014</h1>
              <p>
                I would get my first computer for my 9th birthday. Despite being
                an old HP laptop, this did not stop me from trying to get into
                some new creative endevaours.
              </p>
            </li>
            <li className="ml-3 flex h-fit w-full flex-col text-right">
              <h1 className="text-2xl font-bold">2015</h1>
              <p>
                Around 2015 is where I would purchase a Minecraft Server online.
                During this time, I ended up sinking hours into building out
                systems and games to play with my friends using Plug-ins and
                Minecraft Bukkit. This would be my first loose introduction into
                the world of Computer Science. I would end up getting into
                optimization of my server, as well as the processes of coding
                with JSON and Java. Although my server is no longer up, and I
                never pursued it with financial gain, I spent hours solely for
                fun and entertainment, and it just
              </p>
            </li>
            <li className="ml-3 flex h-fit w-full flex-col text-left">
              <h1 className="text-2xl font-bold">2018</h1>
              <p>
                I would end up officially jumping into coding with a class
                called GameGen. This was an extracirricular class that taught
                how to build video games using the Construct 3 Engine, and would
                be my first introduction to Programming. All of those games and
                projects can be found{" "}
                <Link
                  href="/projects/game"
                  className="text-orange-300 duration-300 hover:text-orange-400"
                >
                  right here
                </Link>
                . I would continue developing these games and building ideas
                until around 2021, when I took an interest in learning Unity.
              </p>
            </li>
            <li className="ml-3 flex h-fit w-full flex-col text-right">
              <h1 className="text-2xl font-bold">2020</h1>
              <p>
                Although I took an interest in Video Creation and Production as
                early as 2017, I would officially learn and use Premiere Pro and
                Photoshop on my own.
              </p>
            </li>
            <li className="ml-3 flex h-fit w-full flex-col text-left">
              <h1 className="text-2xl font-bold">2022</h1>
              <p>
                I would apply said Video Creation skills and interests by
                joining my high school (West Ranch High School)&apos;s TV
                Production Team. During my time on the team, I would learn how
                to use After Effects, enhance my skills in Premiere Pro as well
                as Photoshop, and build real world skills, such as perfection,
                pre-production, and teamwork.
              </p>
              <p>
                My team would end up placing 3rd in the nation during the 2023
                STN Convention in Long Beach, in which I was a leader in editing
                and visual effects. We were the highest placing public school in
                the nation, and the teamwork me and my team showed to get that
                built a lot of skill in team-building and collaboration.
              </p>
              <Link
                href="https://www.stnconvention.com/crazy-8s-winners-2023?rq=crazy%208%202023"
                className="my-2 rounded-2xl bg-zinc-800 p-2 text-orange-300 duration-300 hover:text-orange-400"
              >
                Check out our winning video here{" "}
                <IoArrowForward className="inline" />
              </Link>
              <Image
                src={require("../(assets)/images/STNAward.png")}
                width={400}
                height={400}
                alt="STN Convention"
                className="my-5 -rotate-2 rounded-xl ring-4 ring-white ring-offset-4 ring-offset-black duration-500 hover:scale-[1.01] hover:-rotate-3 hover:ring-purple-300"
              />
              <p className="text-lg text-gray-400">
                <IoArrowUp className="inline" /> Picture from the Convention
                (2023)
              </p>
            </li>
            <li className="ml-3 flex h-fit w-full flex-col text-left">
              <h1 className="text-2xl font-bold">2023</h1>
              <p>
                In 2023 I would end up graduating from West Ranch High School. I
                was eager to start my college journey, and I would opt to go to
                my local community college named College of the Canyons. During
                this time, I started to learn Java in the class, and mastering
                JavaScript, React, React Native, NextJS, and even some python
                off campus.
              </p>
            </li>
            <li className="ml-3 flex h-fit w-full flex-col text-left">
              <h1 className="text-2xl font-bold">2024</h1>
              <p>
                I would start my journey with an internship with MESA at College
                of the Canyons, as a software engineer as well as a educator.
                During this time, I started working on my MESA Connect and MESA
                Mobile projects.
              </p>
            </li>
          </ol>
        </section>
        {/* 
        <ul className="my-4 flex h-16 w-full items-center justify-center rounded-3xl border-2 border-orange-500/60 bg-orange-400/40">
          <IoWarning className="text-3xl" />
          <p className="flex flex-row gap-2">
            <b>CAUTION: </b> The following simulator/exprience may not work well
            on Mobile Devices. If on mobile, it may be better to visit projects
            to see my skillset over here.
          </p>
        </ul>
        */}
        {/*
        <ul className="animate-infinite-scroll inline-flex w-1/2 flex-row justify-center gap-5 self-center">
          
          
        </ul>*/}
        {/*
        <Simulator />
        */}
      </section>
    </main>
  );
};

export default JourneyCanvas;
