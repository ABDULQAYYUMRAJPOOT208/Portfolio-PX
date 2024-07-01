import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="all-app">
        <Navbar />
        <Hero />
        <Loader />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
