import type { NextPage } from "next";
import React from "react";

import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
