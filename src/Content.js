import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";

export default function Content() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}
