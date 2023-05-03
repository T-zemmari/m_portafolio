import React, { useEffect } from "react";
import "./About.css";
import MiFoto from "../../assets/images/Sin-Fondo.png";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="about-container" id="about">
      <div className="contenedor-sobre-mi">
        <div className="about-desc" data-aos="fade-left">
        <br />
          <h3 style={{ 'color': '#0563bb' }}>Bienvenidos a mi portfolio personal </h3>
          <br />
          <p>
            <span>
              Soy <strong style={{ 'color': '#0563bb' }}>Tarek Zemmari</strong>, un apasionado <strong style={{ 'color': '#0563bb' }}> Full Stack Developer</strong> con una amplia experiencia en desarrollo y maquetación de aplicaciones web.
              <br />
               Conocido por mi enfoque en la búsqueda de soluciones innovadoras y mi capacidad para entregar proyectos de alta calidad en tiempo y forma.
            </span>
            <br />
            <br />
            Mi pasión por la programación surgió desde muy joven, por lo que estudié Informática en el bachillerato.<br /> Continué mi formación y realicé un bootcamp que completé con éxito, lo que me permitió dedicarme profesionalmente al desarrollo web. 
            <br />
            Desde entonces, he trabajado con clientes de distintas industrias, entregando soluciones de alta calidad y adaptadas a sus necesidades.
            <br />
            <br />
            Soy experto en el desarrollo web con PHP, tanto puro como con su framework Symfony 5.4. Además, tengo experiencia en la creación de sitios web utilizando HTML y jQuery, y también he trabajado con React en algunos proyectos.
            <br />
            <br />
            Si estás buscando un desarrollador web apasionado y comprometido para tu próximo proyecto, ¡no dudes en contactarme! Me encantaría discutir cómo puedo ayudarte a alcanzar tus objetivos.
          </p>
        </div>
        <div className="about-img" data-aos="fade-left">
          <img className="imagen-sobre-mi" src={MiFoto} alt="MiFoto" />
        </div>
      </div>
    </div>
  );
};

export default About;
