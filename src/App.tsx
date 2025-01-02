

import Home from "./pages/home";
import Me from "./pages/me.tsx";
import Work from "./pages/work";
import Thoughts from "./pages/thoughts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteThought from "./pages/writeThought.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Me" element={<Me />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/blog" element={<WriteThought />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
