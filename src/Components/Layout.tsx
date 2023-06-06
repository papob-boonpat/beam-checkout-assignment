import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <div className="mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
