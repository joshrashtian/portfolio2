"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  IoArrowForward,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoNavigate,
} from "react-icons/io5";
import { getVersion } from "../utils/version";

interface HeaderMenuContextType {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const items = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Journey",
    href: "/journey",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

const socials = [
  {
    name: "Github",
    href: "https://github.com/joshrashtian",
    icon: IoLogoGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joshrashtian/",
    icon: IoLogoLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/joshuajrashtian/",
    icon: IoLogoInstagram,
  },
];

const HeaderMenuContext = createContext<HeaderMenuContextType>({
  menuOpen: false,
  toggleMenu: () => {},
});

const HeaderMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [version, setVersion] = useState("");
  const value = {
    menuOpen,
    toggleMenu: () => setMenuOpen(!menuOpen),
  };

  useEffect(() => {
    async function fetchVersion() {
      const version = await getVersion();
      setVersion(version);
    }
    fetchVersion();
  }, []);
  return (
    <HeaderMenuContext.Provider value={value}>
      <section className={`${menuOpen ? "blur-sm invert" : ""} duration-1000`}>
        {children}
      </section>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMenuOpen(false)}
            className={`no-scrollbar fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-start justify-start overflow-y-scroll bg-black/70 p-8 duration-500 lg:p-16 xl:p-24`}
          >
            <h1 className="flex flex-row gap-2 text-4xl font-bold text-white">
              <IoNavigate /> Navigation
            </h1>
            <ul className="mt-10 flex flex-col gap-2 font-semibold">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-lg duration-200 hover:bg-white/20"
                >
                  <p className="flex -translate-x-12 flex-row items-center p-4 text-2xl text-white duration-300 group-hover:translate-x-3 group-hover:text-teal-200/70">
                    <IoArrowForward className="origin-left scale-0 duration-100 ease-linear group-hover:-translate-x-3 group-hover:scale-100" />{" "}
                    {item.name}
                  </p>
                </Link>
              ))}
              <ul className="my-2 h-[1px] w-full bg-white" />
              <div className="flex flex-col gap-2">
                {socials.map((social) => (
                  <Link key={social.name} href={social.href} className="">
                    <p className="group flex -translate-x-12 flex-row items-center p-4 text-2xl text-white duration-300 hover:translate-x-3 hover:text-purple-400">
                      <social.icon className="origin-left scale-0 duration-100 ease-linear group-hover:-translate-x-3 group-hover:scale-100" />{" "}
                      {social.name}
                    </p>
                  </Link>
                ))}
              </div>
            </ul>
            <div className="fixed bottom-0 left-0 z-40 w-screen bg-black/70 p-8 text-white">
              <p>Version (via GitHub): {version}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HeaderMenuContext.Provider>
  );
};

export function useHeader() {
  const context = useContext(HeaderMenuContext);
  if (!context) {
    throw new Error(
      "useHeader must be used within a HeaderMenuContextProvider",
    );
  }
  return context;
}

export default HeaderMenuContextProvider;
