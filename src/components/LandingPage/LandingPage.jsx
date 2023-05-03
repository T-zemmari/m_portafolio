import React from "react";
import "./LandingPage.css";
import ButtonCustomOne from "../Animations/Buttons/ButtonCustomOne";

export default function LandingPage(props) {
  return (
    <div className="contenedor-principal animate__animated animate__backInDown" id="home">
      <div className="Contenedor-saludo">
        <div className="contenedor-saludo-mas-imagen justify-content-center" >
          <div className="contenedor-saludo title-container">
            <h1 className="h1-custom h1-custom-3 ">
              Hi !! <span>Soy Tarek Zemmari</span>
            </h1>
            <h2 className="custom-h2">Full stack developer</h2>
            <div className="titulo-tarek">
              <div className="measure center tc sans-serif black-80 absolute absolute--fill">
                <div className="flex flex-column justify-center items-center h-100">
                  <div>
                    <h1 className="animated fadeInUp ease-out-circ d2 a-1 f2 fw3"></h1>
                    <h2
                      className="animated fadeInUp ease-out-circ d-1 a-2"
                      style={{ color: "white" }}
                    >
                      Resido en Valencia, España, y mi área de especialización es la programación y el desarrollo de aplicaciones web..{" "}
                    </h2>                   
                  </div>                  
                </div>
                 
              </div>
             
            </div>                
          </div>
          
        </div>
       <ButtonCustomOne /> 
      </div>
      
      <div className="custom-shape-divider-bottom-1664218420">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
