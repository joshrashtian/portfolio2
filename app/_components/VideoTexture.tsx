"use client";
import { useVideoTexture } from "@react-three/drei";
import React from "react";

const VideoTexture = (src: any) => {
  const texture = useVideoTexture(src);
  return <meshStandardMaterial toneMapped={false} map={src} />;
};

export default VideoTexture;
