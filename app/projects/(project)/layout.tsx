import React from "react";
import TopBarProjects from "./topbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      {children}
      <TopBarProjects />
    </div>
  );
};

export default Layout;
