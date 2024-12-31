import * as React from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Thoughts from "./pages/thoughts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteThought from "./pages/writeThought.tsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Me" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/blog" element={<WriteThought />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
