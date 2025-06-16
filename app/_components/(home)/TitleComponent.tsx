"use client";
import { Figtree } from "next/font/google";
import React from "react";

export default function TitleComponent() {
  const text = "joshua rashtian.";

  return (
    <div className={`relative inline-block`}>
      <h1 className="h-16 bg-gradient-to-r from-[#B429F9] to-[#239EAB] bg-clip-text text-left text-4xl font-extrabold text-transparent lg:text-6xl">
        {text}
      </h1>
    </div>
  );
}
