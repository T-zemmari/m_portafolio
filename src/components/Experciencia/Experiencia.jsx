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
      <br /><br />
        <div className="experiencia-laboral" data-aos="fade-left">
          <h4>Full stack developer ( Perfumerias.com (Tedy business) )</h4>
          <h5>ENERO 2021 - Actualmente</h5>
        </div>
        <div className="separador"></div>

        <div className="experiencia-laboral" data-aos="fade-left">
          <h4>Full stack developer ( Match ready (Sedna media) )</h4>
          <h5>JUNIO 2020 - ENERO 2021</h5>
        </div>
        <div className="separador"></div>
        <div className="experiencia-laboral" data-aos="fade-left">
          <h4>Field Service Enginner ( Tintas Y Soporte Sl )</h4>
          <h5>JUNIO 2018 - ENERO 2020</h5>
        </div>
        <div className="separador"></div>
        <div className="experiencia-laboral" data-aos="fade-left">
          <h4>Electronico Encargado Departamento Tecnico (Universo Movil )</h4>
          <h5>FEBRERO 2015 - JUNIO 2018</h5>
        </div>
        <div className="separador"></div>
        <div className="experiencia-laboral" data-aos="fade-left">
          <h4>Administrador, Socio empresa transportes Tayru.</h4>
          <h5>FEBRERO 2010 - MARZO 2020</h5>
        </div>
        <div className="separador"></div>
        <div className="experiencia-laboral" data-aos="fade-left">
          <h4>Electronico , SAT RotanaNet</h4>
          <h5>FEBRERO 2004 - JUNIO 2010</h5>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
