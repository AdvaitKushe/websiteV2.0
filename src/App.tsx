

import Home from "./pages/home";

import Work from "./pages/work";
import Thoughts from "./pages/thoughts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriteThought from "./pages/writeThought.tsx";
import WorkInProgress from "./pages/workInProgress.tsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Me" element={<WorkInProgress />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/blog" element={<WriteThought />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
