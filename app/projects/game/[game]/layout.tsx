import React, { Suspense } from "react";

const GameLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default GameLayoutPage;
