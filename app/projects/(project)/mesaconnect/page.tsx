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
import { IoPeople } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });
const MESAConnectPage = () => {
  const firstRef = useRef(null);

  const [video] = useState(() => {
    const vid = document.createElement("video");
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
        <button
          className="rounded-xl bg-zinc-200 p-3 px-6 text-xl duration-500 hover:bg-blue-400"
          onClick={() =>
            //@ts-ignore
            firstRef?.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More
        </button>
      </div>
      <section
        className="h-screen bg-gradient-to-tl from-orange-200 to-teal-500 p-24 py-52"
        ref={firstRef}
      >
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Where Education Meets Community.
        </h1>

        <div className="flex h-full w-full flex-col lg:flex-row">
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
          <Canvas className="lg:w-2/3" camera={{ position: [1.2, 0.2, 4] }}>
            <mesh position={[-0.7, 0, -1]}>
              <planeGeometry args={[8, 5]} />
              <meshStandardMaterial emissive="#BBB" side={DoubleSide}>
                <videoTexture attach="map" args={[video]} />
                <videoTexture attach="emissiveMap" args={[video]} />
              </meshStandardMaterial>
            </mesh>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default MESAConnectPage;
