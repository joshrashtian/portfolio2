"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoLogoWebComponent } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import Image, { StaticImageData } from "next/image";
import MesaIcon from "@/app/(assets)/images/icons/mesalogo.png";

const index = [
  {
    id: "mesaconnect",
    name: "MESAConnect",
    link: "https://mesaconnect.io",
    img: MesaIcon,
    linkin: "https://www.linkedin.com/company/mesa-connect",
  },
];

const TopBarProjects = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState<
    { id: string; name: string; link: string; img: StaticImageData } | undefined
  >(undefined);

  useEffect(() => {
    const id = pathname.split("/")[2];
    setSelected(index.find((item) => item.id === id));
  }, []);

  if (!selected) return null;
  return (
    <ul className="fixed top-24 flex w-full items-center justify-center">
      <motion.section
        initial={{ y: -70, width: "2rem", opacity: 0 }}
        animate={{ y: 0, width: "400px", opacity: 1 }}
        transition={{
          y: { delay: 1.8 },
          opacity: { delay: 2, duration: 1.2 },
          width: { delay: 3, duration: 1 },
          duration: 1.2,
        }}
        className={`z-50 flex h-10 flex-row items-center justify-center gap-2 place-self-center rounded-3xl bg-white px-10 shadow-sm drop-shadow-xl duration-500 hover:bg-slate-100 dark:bg-zinc-600 dark:text-white dark:hover:bg-slate-800`}
      >
        <motion.ul
          className="flex flex-row items-center justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 4.5,
            duration: 0.8,
          }}
        >
          {selected.img && (
            <Image src={selected.img} alt="selected" width={30} height={30} />
          )}
          <p className="font-black dark:text-slate-300">{selected?.name}</p>
          <ul className="h-1 w-1 rounded-full bg-zinc-800 dark:bg-slate-300" />

          <Link
            // @ts-ignore
            className="flex flex-row items-center gap-1 rounded-md px-1.5 duration-500 hover:scale-105 hover:bg-yellow-400/10 dark:text-slate-300 dark:hover:bg-purple-600/30 dark:hover:text-purple-300"
            href={selected?.link}
          >
            <CgWebsite />
            <p>Visit Website</p>
          </Link>
        </motion.ul>
      </motion.section>
    </ul>
  );
};

export default TopBarProjects;
