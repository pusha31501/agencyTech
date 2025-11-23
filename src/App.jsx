import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className=" dark:bg-black relative">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <AboutMe />
      <Services />
      <MyWork />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
