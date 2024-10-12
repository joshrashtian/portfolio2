"use client";
import React, { useRef } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const MESAConnectPage = () => {
  const firstRef = useRef(null);
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
        className="h-screen bg-gradient-to-tl from-orange-200/40 to-white p-24"
        ref={firstRef}
      >
        <h1 className="text-4xl font-bold">Where Education Meets Community.</h1>
      </section>
    </>
  );
};

export default MESAConnectPage;
