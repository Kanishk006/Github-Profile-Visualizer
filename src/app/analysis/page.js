import React from "react";
import Navbar from "../../../components/navbar";
import Dashboard from "../../../components/dashboard";
import "../../../styles/index.css";
const Index = () => {
  return (
    <>
      <Navbar />
      <div className = "back">
        <Dashboard/>
      </div>
      </>
  );
};

export default Index;