import React from "react";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Services from "./component/Services.jsx";
import Project from "./component/Project.jsx";
import { useContext } from "react";
import { ThemeContext } from "./component/ThemeContext";
import Skills from "./component/Skills.jsx";
import Count from "./component/Count.jsx";
import Contactus from "./component/Contactus.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <main className={`px-10 md:px-20 lg:px-40 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <section className="min-h-screen">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Skills />
      </section>
      <section >
        <Count />
      </section>
      <section className="py-10">

        <Project />
      </section>
      <section>
        <Contactus />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default App;
