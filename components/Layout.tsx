import { NextPage } from "next";
import React from "react";
import Header from "./Header";

type Props = {};

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
