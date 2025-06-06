"use server";

import { useParams } from "next/navigation";
import React from "react";
import { ProjectDetails } from "../../ProjectIndex";
import Navigation from "./navigation";

const GameLoadingPage = ({ params }: { params: { game: string } }) => {
  const gameId = params.game;
  const game = ProjectDetails.find((game) => game.gameId === gameId);
  if (!game) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1>There is no game.</h1>
        <p>{gameId}</p>
      </div>
    );
  }
  return (
    <div className="font-nenue flex h-screen flex-col items-start justify-start gap-5 p-5 py-24 text-2xl">
      <Navigation />

      <p className="text-sm text-gray-500">
        {game.desc} /{" "}
        {game.dates[0]
          ? typeof game.dates[0] === "string"
            ? game.dates[0]
            : game.dates[0].toLocaleDateString()
          : "In Development"}
      </p>
      <ol className="flex flex-row gap-2">
        {game.gameIcons?.map((Icon, i) => (
          <Icon key={i} className="text-2xl" />
        ))}
      </ol>
      <iframe
        src={game.gameRoute}
        className="h-full w-full bg-transparent"
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GameLoadingPage;
