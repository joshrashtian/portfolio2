"use client";
import React, { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const About = forwardRef((props, ref: React.Ref<HTMLElement>) => {
  return (
    <section
      ref={ref}
      className="mt-24 flex h-screen flex-col justify-center bg-zinc-100 p-24 dark:bg-zinc-800/40"
    >
      <h1 className="text-6xl font-bold">About Me</h1>
      <p className="w-1/2">
        Hello! My name is Joshua Rashtian. My mission is to help build web /
        computer projects and systems to help people connect better with one
        another. I am currently a developer on multiple projects and am a 2nd
        year at College of the Canyons, studying for Transfer, with a plan for a
        Bachelor&apos;s in Computer Science. I have taken and been interested in
        Computers ever since I was a young kid, starting with when my dad
        brought home a Wii for me and my family. I ended up spending hours
        researching Video Game Development, as I wanted to make my own games. By
        Age 9, I had my own laptop and started to build projects on games I
        enjoyed, briefly running my own Minecraft server for me and my friends
        in 2015. This would bridge me into small concepts of Computer Science,
        such as JSON and Java. 3 years later, I would start to learn proper Game
        Development, and started creating small games in Construct 3 at age 12.
        Through Construct 3, I learned all of the various tools that are used in
        Computer Projects. During my time in High School, however, I would also
        start to take an interest in Media Creation. Although I would mess
        around with Video Editing Software at Age 10, I would fully decide to
        learn Video Production during 2020. I would end up joining my high
        schools TV program, &quot;West Ranch TV&quot;, which I would be an
        editor for, even competing and winning an award as a team during the
        2023 Student Television Network Convention in Long Beach.
      </p>
    </section>
  );
});

export default About;
