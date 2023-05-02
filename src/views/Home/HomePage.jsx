import React, { useEffect, useState } from "react";
import About from "../../components/About/About";
import CardProjects from "../../components/Cards/Card-projects";
import ContactTwo from "../../components/Contact-two/Contact-two";
import DividerCustom from "../../components/Divider/DividerCustom";
import Experiencia from "../../components/Experciencia/Experiencia";
import Header from "../../components/Header/Header";
import LandingPage from "../../components/LandingPage/LandingPage";
import NavBar from "../../components/Navbar/Navbar";
import Skills from "../../components/Skills/Skills";

export default function HomePage() {
  const [width, setWindowWidth] = useState(0);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  console.log(width);

  return (
    <>
      <Header />
      <NavBar />
      <LandingPage />
      <DividerCustom section="Sobre mi" />
      <About />
      <DividerCustom section="Skills" />
      <Skills />
      <DividerCustom section="Experiencia" />
      <Experiencia />
      <DividerCustom section="Proyectos" />
      <CardProjects />
      <DividerCustom section="Contacto" />
      <ContactTwo />
    </>
  );
}
