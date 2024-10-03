import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      
      <main className="mt-10">
        <Routes>

          <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} ></Route>
          <Route path="about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </main>
      
    </BrowserRouter>
  );
}

export default App;
