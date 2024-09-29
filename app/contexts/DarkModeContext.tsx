"use client";
import React, { createContext, useEffect, useMemo, useState } from "react";

interface DarkModeProps {
  dark: boolean;
}

const DarkModeContext = createContext<DarkModeProps>({
  dark: false,
});

const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dark: boolean = useMemo(() => {
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    } else return false;
  }, []);

  return (
    <DarkModeContext.Provider value={{ dark }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export function useDarkMode() {
  return React.useContext(DarkModeContext);
}
