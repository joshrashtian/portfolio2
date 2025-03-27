"use server";
import Link from "next/link";
import React from "react";

const GamesPage = () => {
  const navObjects = [
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
  ];

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Games</h1>
      {navObjects.map((game) => (
        <Link key={game.name} href={game.path}>
          <h2>{game.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default GamesPage;
