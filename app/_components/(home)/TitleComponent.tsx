"use client";
import { Figtree } from "next/font/google";
import React from "react";

export default function TitleComponent() {
  const text = "joshua rashtian.";

  return (
    <div className={`relative inline-block`}>
      <h1 className="h-20 bg-gradient-to-r from-[#8126af] to-red-500 bg-clip-text text-left text-4xl font-extrabold text-transparent lg:text-7xl">
        {text}
      </h1>
    </div>
  );
}
