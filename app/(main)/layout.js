import React from "react";

const MainLayout = ({ children }) => {
  return <div className="container mx-auto my-32 bg-cream dark:bg-blackish">{children}</div>;
};

export default MainLayout;