import React from "react";
import FeaturedCard from "./FeaturedCard";
import Image from "next/image";
import { IoArchive, IoNavigate } from "react-icons/io5";
import Link from "next/link";

const FeaturedProjects = () => {
  return (
    <section className="p-4">
      <IoArchive className="ml-4 text-5xl" />
      <h2 className="ml-4 text-2xl font-semibold">Case Studies</h2>

      <ul className="grid w-full grid-cols-1 gap-3 scroll-smooth whitespace-nowrap bg-zinc-100/30 p-3 xl:grid-cols-3">
        <FeaturedCard
          href="/projects/mesaconnect"
          className="group flex flex-col justify-between border-2 bg-linear-to-br from-orange-50 to-zinc-100"
        >
          <ul className="relative h-72 w-full rounded-lg">
            <Link
              href={"https://mesaconnect.io"}
              className="absolute bottom-2 right-2 z-50 translate-y-3 text-3xl text-white opacity-0 drop-shadow-2xl duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <IoNavigate />
            </Link>
            <ul className="absolute z-40 h-full w-full bg-linear-to-t from-black/40 via-transparent to-zinc-500/40" />
            <Image
              src={require("../../(assets)/images/mesaconnectbanner.png")}
              fill
              objectFit="cover"
              className="z-30"
              alt="mesa"
            />
          </ul>
          <ul className="flex flex-row items-center">
            <Image
              src={require("@/app/(assets)/images/icons/mesalogo.png")}
              alt="logo"
              width={76}
              height={56}
            />
            <ul className="lg:p-3">
              <FeaturedCard.Title>
                Connecting To Your Peers With MESAConnect
              </FeaturedCard.Title>
            </ul>
          </ul>
        </FeaturedCard>
      </ul>
    </section>
  );
};

export default FeaturedProjects;
