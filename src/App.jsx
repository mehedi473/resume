import React from "react";

// all components render
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Skills from './components/Skills'
import Experiences from "./components/Experiences";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Feature from "./components/Feature";
import Client from "./components/Client";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Experiences />
      <Portfolio />
      <Price />
      <Feature />
      <Client />
      <Contact />
      <Footer />
    </>
  );
}
export default App 