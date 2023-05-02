import React from "react";
import "../../assets/template-uno/vendor/aos/aos.css";
import "../../assets/template-uno/vendor/bootstrap/css/bootstrap.min.css";
import "../../assets/template-uno/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../assets/template-uno/vendor/boxicons/css/boxicons.min.css";
import "../../assets/template-uno/vendor/glightbox/css/glightbox.min.css";
import "../../assets/template-uno/vendor/swiper/swiper-bundle.min.css";
import "../../assets/template-uno/css/style.css";
import 'animate.css';

export default function Header() {

  return (
    <>
      {/*-- ======= Mobile nav toggle button ======= */}
      {/*<!-- <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> -->*/}
      {/*<i className="bi bi-list mobile-nav-toggle d-lg-none"></i>*/}
      <header id="header" className="d-flex flex-column justify-content-center ">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#home" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Portada</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>Sobre mi</span>
              </a>
            </li>
            <li>
              <a href="#Experience" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Experiencia</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Trabajos</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contacto</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
