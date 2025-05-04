"use client";
import { createContext, useContext, useState } from "react";

export const VideoContext = createContext({
  video: null,
  setVideo: (video: any) => {},
});

export const useVideoContext = () => {
  const { video, setVideo } = useContext<any>(VideoContext);
  return { video, setVideo };
};

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [video, setVideo] = useState<any>(null);
  return (
    <VideoContext.Provider value={{ video, setVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
