// src/components/Layout.jsx
import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* Renders the child route components here */}
    </div>
  );
};

export default Layout;
