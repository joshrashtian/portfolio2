"use client";
import React, { useRef, useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import {
  Plane,
  PresentationControls,
  useVideoTexture,
} from "@react-three/drei";
import VideoTexture from "@/app/_components/VideoTexture";
import { DoubleSide } from "three";
import {
  IoGitBranch,
  IoNewspaper,
  IoPeople,
  IoPerson,
  IoSchool,
  IoSettings,
} from "react-icons/io5";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { GiBlockHouse } from "react-icons/gi";
import { BsPersonGear } from "react-icons/bs";
import { reverse } from "dns";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const MESAConnectPage = () => {
  const firstRef = useRef(null);
  const scrollRef = useRef(null);
  const [video] = useState(() => {
    const vid = document?.createElement("video");
    vid.src = "/polls.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <>
      <div className={"flex h-screen flex-col items-center justify-center"}>
        <Image
          src={require("@/app/(assets)/images/mesaconnectbanner.png")}
          alt="logo"
          height={200}
          width={600}
          className="shadow-2xl shadow-orange-700"
        />
        <h1 className={`p-12 text-4xl font-bold`}>
          Step Into The Next Generation of MESA.
        </h1>
        <p className={`p-12 text-2xl font-light`}>
          MESA Connect is a platform for MESA students to connect with each
          other, share resources, and collaborate on projects.
        </p>
        <ol className="flex flex-row gap-3">
          <button
            className="rounded-xl bg-zinc-200 p-3 px-6 text-xl duration-500 hover:bg-blue-400"
            onClick={() =>
              //@ts-ignore
              firstRef?.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
          <Link
            href="https://mesaconnect.io"
            className="rounded-xl bg-zinc-200 p-3 px-6 text-xl duration-500 hover:bg-blue-400"
          >
            Visit Website
          </Link>
        </ol>
      </div>
      <section
        className="min-h-screen bg-gradient-to-tl from-orange-200 to-teal-500 p-24 py-52"
        ref={firstRef}
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Where Education Meets Community.
        </h1>

        <div className="flex min-h-full w-full flex-col lg:flex-row">
          <ul className="my-12 flex flex-col items-center gap-3 rounded-3xl bg-white py-12 shadow-lg lg:w-1/3 lg:px-3">
            <h3 className="flex flex-row items-center gap-2 text-center text-3xl font-bold">
              <IoPeople /> Socialize.
            </h3>
            <ol className="flex cursor-default flex-col gap-1 px-3 font-light">
              <li className="rounded-xl bg-zinc-100 p-2 duration-300 hover:bg-zinc-200/70">
                Showcase yourself and display your various achievements.
              </li>

              <li className="rounded-xl bg-zinc-100 p-2 duration-300 hover:bg-zinc-200/70">
                Connect with other MESA students and alumni.
              </li>
              <li className="rounded-xl bg-zinc-100 p-2 duration-300 hover:bg-zinc-200/70">
                Share lessons and tips to other students.
              </li>
            </ol>
          </ul>
          <Canvas
            className="min-h-[80vh] w-2/3"
            camera={{ position: [1.2, 0.2, 4] }}
          >
            <mesh position={[-0.7, 0, -1]}>
              <planeGeometry args={[8, 5]} />
              <meshStandardMaterial emissive="#BBB" side={DoubleSide}>
                {video && (
                  <>
                    <videoTexture attach="map" args={[video]} />
                    <videoTexture attach="emissiveMap" args={[video]} />{" "}
                  </>
                )}
              </meshStandardMaterial>
            </mesh>
          </Canvas>
        </div>
      </section>
      <section className="flex min-h-screen flex-col gap-10 bg-gradient-to-tl from-zinc-200 to-slate-700 p-12 py-52 lg:p-24">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          A wide toolset of features.
        </h1>
        <motion.section
          ref={scrollRef}
          className="h-84 snap-point no-scrollbar relative flex snap-x flex-row gap-2 overflow-x-scroll scroll-smooth whitespace-nowrap rounded-2xl bg-gradient-to-br from-zinc-100/30 to-slate-300/30 p-8 px-8 shadow-lg backdrop-blur-lg backdrop-brightness-100 xl:gap-4 dark:bg-slate-500"
        >
          <Tilt
            options={{
              max: 30,
              transition: true,
              scale: 1,
              reverse: true,
            }}
            className="group flex h-96 min-w-72 snap-center flex-col items-center justify-center rounded-2xl border-4 bg-white p-3 duration-300 hover:border-green-500 hover:text-green-800"
          >
            <IoGitBranch className="rounded-full p-1 text-7xl duration-300 group-hover:bg-slate-100" />
            <h4 className="text-3xl">Open Source</h4>
            <p className="mt-4 text-wrap text-center font-light">
              In order to preserve the app long-term and to build community,
              this project is planned to be Open-Source.
            </p>
          </Tilt>
          <Tilt
            options={{
              max: 30,
              transition: true,
              scale: 1,
              reverse: true,
            }}
            className="group flex h-96 min-w-72 snap-center flex-col items-center justify-center rounded-2xl border-4 bg-white p-3 duration-300 hover:border-orange-500 hover:text-orange-800"
          >
            <IoSchool className="rounded-full p-1 text-7xl duration-300 group-hover:bg-slate-100" />
            <h4 className="text-3xl">Quiz Questions</h4>
            <p className="mt-4 text-wrap text-center font-light">
              Ask others questions / get feedback on Personal Projects.
            </p>
          </Tilt>
          <Tilt
            options={{
              max: 30,
              transition: true,
              scale: 1,
              reverse: true,
            }}
            className="group flex h-96 min-w-72 snap-center flex-col items-center justify-center rounded-2xl border-4 bg-white p-3 duration-300 hover:border-blue-500 hover:text-blue-800"
          >
            <BsPersonGear className="rounded-xl p-1 text-7xl duration-300 group-hover:bg-slate-100" />
            <h4 className="text-3xl">Showcase Yourself</h4>
            <p className="mt-4 text-wrap text-center font-light">
              Add various blocks and components to your page to express
              yourself.
            </p>
          </Tilt>
          <Tilt
            options={{
              max: 30,
              transition: true,
              scale: 1,
              reverse: true,
            }}
            className="group flex h-96 min-w-72 snap-center flex-col items-center justify-center rounded-2xl border-4 bg-white p-3 duration-300 hover:border-red-500 hover:text-red-800"
          >
            <IoNewspaper className="rounded-xl p-1 text-7xl duration-300 group-hover:bg-slate-100" />
            <h4 className="text-3xl">Goings On</h4>
            <p className="mt-4 text-wrap text-center font-light">
              Get information of what might be going on in your field with other
              users.
            </p>
          </Tilt>
          <Tilt
            options={{
              max: 30,
              transition: true,
              scale: 1,
              reverse: true,
            }}
            className="group flex h-96 min-w-72 snap-center flex-col items-center justify-center rounded-2xl border-4 bg-white p-3 duration-300 hover:border-yellow-500 hover:text-yellow-800"
          >
            <IoSettings className="rounded-xl p-1 text-7xl duration-300 group-hover:bg-slate-100" />
            <h4 className="text-3xl">Accessibility</h4>
            <p className="mt-4 text-wrap text-center font-light">
              Simpilicity + Accessibility To Deliver A Polished, User-Friendly
              Experience.
            </p>
          </Tilt>
        </motion.section>
      </section>
    </>
  );
};

export default MESAConnectPage;
