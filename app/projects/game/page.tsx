"use server";
import Link from "next/link";
import React from "react";

const GamesPage = () => {
  const navObjects = [
    {
      name: "Super Mario Legacy",
      path: "/projects/game/supermariolegacy",
      icon: "🎮",
      color: "from-red-400 to-red-600",
    },
    {
      name: "Super Mario Legacy II Demo",
      path: "/projects/game/mariolegacy2",
      icon: "🍄",
      color: "from-green-400 to-green-600",
    },
    {
      name: "Tankzone",
      path: "/projects/game/Tankzone",
      icon: "🚗",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Tankzone 2 Concept",
      path: "/projects/game/tankzoneiiconcept",
      icon: "⚡",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Ragdoll Racing",
      path: "/projects/game/ragdollracing",
      icon: "🏁",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const systemIcons = [
    { name: "Settings", icon: "⚙️" },
    { name: "Photo Channel", icon: "📷" },
    { name: "Wii Shop", icon: "🛒" },
    { name: "Mii Channel", icon: "👤" },
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-4 text-center">
        <h1 className="text-6xl font-bold text-white drop-shadow-lg">
          Video Games
        </h1>
      </div>

      {/* Game channels grid - Wii style */}
      <div className="container mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {navObjects.map((game, index) => (
            <Link
              key={game.name}
              href={game.path}
              className="group transform transition-all duration-300 hover:scale-110 hover:rotate-2"
            >
              <div
                className={`flex h-32 w-64 cursor-pointer flex-col items-center justify-center rounded-3xl border-4 border-white/30 bg-gradient-to-br from-zinc-500 to-zinc-300 p-4 text-center shadow-2xl`}
              >
                <div className="mb-2 text-4xl transition-transform duration-300 group-hover:scale-125">
                  {game.icon}
                </div>
                <h2 className="text-sm leading-tight font-bold text-white drop-shadow-md">
                  {game.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom toolbar - Wii style */}
      <div className="fixed right-0 bottom-0 left-0 border-t-4 border-blue-400 bg-gradient-to-t from-gray-800 to-gray-900">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-center space-x-12">
            {systemIcons.map((item) => (
              <div
                key={item.name}
                className="group flex cursor-pointer flex-col items-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-gray-500 bg-gradient-to-br from-gray-600 to-gray-700 text-2xl transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-300">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wii-style cursor indicator */}
      <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="h-8 w-8 animate-pulse rounded-full border-2 border-white/40 bg-white/20"></div>
      </div>
    </div>
  );
};

export default GamesPage;
