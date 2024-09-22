import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AllProjects from "./Pages/AllProjects";
export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-projects" element={<AllProjects />} />
    </Routes>
  );
}
