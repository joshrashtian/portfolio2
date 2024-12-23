"use client";
import {
  DragControls,
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Caveat, Indie_Flower } from "next/font/google";
import Link from "next/link";
import React, { forwardRef, useMemo } from "react";
import { IoArrowForward, IoLocation } from "react-icons/io5";

const written = Indie_Flower({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

// eslint-disable-next-line react/display-name
const About = forwardRef((props, ref: React.Ref<HTMLElement>) => {
  function Dresser(props: any) {
    const { scene } = useGLTF("/dresser.glb");

    scene.rotation.y = Math.PI / -1.6;
    return <primitive object={scene} {...props} />;
  }

  return (
    <section
      ref={ref}
      className="mt-24 flex h-screen flex-col justify-center bg-zinc-100 p-10 lg:p-24 dark:bg-zinc-800/40"
    >
      <h1 className="text-6xl font-bold">About Me</h1>
      {/* Wii model by libblekibble, TV model by Timothy Ahene */}
      <ul className="flex h-full flex-col lg:flex-row">
        <div className="mt-4 flex w-full flex-col justify-center gap-2 lg:w-1/2">
          <ul className="rounded-3xl rounded-tl-3xl border-2 border-zinc-100 bg-linear-to-tr from-blue-700 to-purple-700 p-6 text-base text-white ring-purple-500 duration-500 hover:ring-2 lg:text-lg">
            <IoLocation className="text-3xl" />
            <p>Who Am I?</p>
            <p className="text-zinc-300">
              I am a Computer Science Student attending College of the Canyons.
            </p>
            <p className="text-zinc-300">
              Born and raised inside of Los Angeles County, California.
            </p>
          </ul>
          {/*<ul className="rounded-3xl rounded-tl-3xl border-2 border-zinc-100 bg-linear-to-br from-blue-600 to-green-700 p-6 text-white ring-purple-500 duration-500 hover:ring-2">
            <p></p>
          </ul> */}
          <Link
            href="/journey"
            className={`z-50 hidden w-72 -translate-x-16 translate-y-[450px] -rotate-6 scale-75 flex-col items-end justify-end bg-yellow-300/50 p-3 text-xl duration-300 md:w-fit lg:translate-x-16 lg:translate-y-16 lg:scale-100 xl:flex ${written.className}`}
          >
            <div className="absolute h-6 w-12 -translate-y-20 translate-x-2 rotate-2 bg-slate-200/40" />
            <h3 className="group flex flex-row items-center gap-3 font-bold">
              You Might Be Wondering What Is Going On Over Here{" "}
              <IoArrowForward className="scale-0 duration-200 group-hover:translate-x-1 lg:scale-100" />
            </h3>

            <p className="text-right text-base lg:text-lg">
              this actually was the room where it all started.{" "}
              <span className="transition-colors duration-300 hover:bg-blue-100/20 hover:text-blue-500">
                click here to learn more
              </span>
            </p>
          </Link>
        </div>
        <Canvas className="h-full w-1/2" camera={{ fov: 45 }}>
          <pointLight position={[10, 20, 10]} />
          <PresentationControls global>
            <Stage environment={"apartment"}>
              <Dresser scale={0.5} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </ul>
    </section>
  );
});

export default About;
