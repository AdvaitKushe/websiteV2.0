import { Fragment, useState } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Thoughts from "./pages/thoughts";
import Particles from "./components/ui/particles.tsx";
import { Stack, StackSeparator } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Me" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
