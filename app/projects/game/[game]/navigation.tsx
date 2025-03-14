"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navObjects = useMemo(
    () => [
      {
        name: "Super Mario Legacy",
        path: "/projects/game/supermariolegacy",
      },
      {
        name: "Super Mario Legacy II Demo",
        path: "/projects/game/mariolegacy2",
      },
      {
        name: "Tankzone",
        path: "/projects/game/Tankzone",
      },
      {
        name: "Tankzone 2 Concept",
        path: "/projects/game/tankzoneiiconcept",
      },
      {
        name: "Ragdoll Racing",
        path: "/projects/game/ragdollracing",
      },
    ],
    [],
  );

  return (
    <div className="flex flex-row gap-10 font-semibold">
      {navObjects
        .sort((a, b) => (a.path === pathname ? -1 : 1))
        .map((navObject) => (
          <Link
            key={navObject.path}
            href={navObject.path}
            className={`${
              isActive(navObject.path)
                ? "text-blue-500"
                : "text-zinc-500/30 hover:text-zinc-600/40"
            } duration-300`}
          >
            {navObject.name}
          </Link>
        ))}
    </div>
  );
};

export default Navigation;
