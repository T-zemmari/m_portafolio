import React, { useEffect } from "react";
import "./Experiencia.css";
import Aos from "aos";

const Experiencia = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="experiencia-container" id="Experience">
      <div className="experiencia-datos">
        <div className="separador"></div>

        <div className="experiencia-laboral" data-aos="fade-left">
          <h3>Full stack developer ( Perfumerias.com (Tedy business) )</h3>
          <h4>ENERO 2021 - Actualmente</h4>
        </div>
        <div className="separador"></div>

        <div className="experiencia-laboral" data-aos="fade-left">
          <h3>Full stack developer ( Match ready (Sedna media) )</h3>
          <h4>JUNIO 2020 - ENERO 2021</h4>
        </div>
        <div className="separador"></div>
        <div className="experiencia-laboral" data-aos="fade-left">
          <h3>Field Service Enginner ( Tintas Y Soporte Sl )</h3>
          <h4>JUNIO 2018 - ENERO 2020</h4>
        </div>
        <div className="separador"></div>
        <div className="experiencia-laboral" data-aos="fade-left">
          <h3>Electronico Encargado Departamento Tecnico (Universo Movil )</h3>

          <h4>FEBRERO 2015 - JUNIO 2018</h4>
        </div>
        <div className="separador"></div>
        <div className="experiencia-laboral" data-aos="fade-left">
          <h3>Administrador, Socio empresa transportes Tayru.</h3>
          <h4>FEBRERO 2010 - MARZO 2020</h4>
        </div>
        <div className="separador"></div>
        <div className="experiencia-laboral" data-aos="fade-left">
          <h3>Electronico , SAT RotanaNet</h3>
          <h4>FEBRERO 2004 - JUNIO 2010</h4>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
