import React from "react";
import "../css/contacto.css";
import Navbar from "../components/navbar";
import foto2 from "../assets/Ashly.jpg"
import foto3 from "../assets/Meli.jpg";
import Footer from "../components/footer";

const Contac = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font ">
        <div className="container-contac cnt-tarjeta">
          <div className="flex flex-col text-center mb-12">
            <div className="bg-white shadow-md rounded-lg p-6 card contact-card card-somos">
              <h1 className="sm:text-3xl font-medium title-font text-gray-900">
                Somos
              </h1>
              <br />
              <p className="toast-container top-0 end-0 p-3 text-justify">
                MercaEmprende nace en el año 2024 con la pasión de apoyar a los
                pequeños emprendedores. Somos una tienda online creada por tres
                estudiantes de las Unidades Tecnológicas de Santander (UTS) que,
                durante el desarrollo de un proyecto universitario,
                identificaron la necesidad de crear un espacio virtual donde los
                pequeños emprendedores pudieran vender una amplia gama de
                productos de alta calidad a precios accesibles.
              </p>
              <div className="photo-cards-container">
                <div className="photo-card">
                  <div className="photo-card-inner">
                    <div className="photo-card-front">
                      <img src={foto2} alt="Foto 2" />
                      <h4>Ashly Herrera</h4>
                      <p>akherrera@uts.edu.co</p>
                    </div>
                    <div className="photo-card-back">
                      <p>
                        Desarrolladora web - Ashly Herrera
                        <br />
                        <br />
                        Ashly es una talentosa desarrolladora web con una sólida formación en tecnologías frontend y backend. Con una creatividad innata y una gran atención al detalle, se especializa en la creación de interfaces intuitivas y experiencias de usuario dinámicas. Su dominio de frameworks modernos y su capacidad para optimizar el rendimiento de las aplicaciones la convierten en un pilar fundamental en cualquier equipo de desarrollo. Además, su habilidad para analizar requerimientos y transformar ideas en soluciones digitales eficientes la distingue como una profesional versátil y comprometida con la innovación.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="photo-card">
                  <div className="photo-card-inner">
                    <div className="photo-card-front">
                      <img src={foto3} alt="Foto 3" />
                      <h4>Melissa Hernández</h4>
                      <p>melissaahernandez@uts.edu.co</p>
                    </div>
                    <div className="photo-card-back">
                      <p>
                        Desarrolladora Web - Melissa Hernández
                        <br />
                        <br />
                        Melissa es una entusiasta desarrolladora web con una
                        pasión por la creación de experiencias digitales
                        innovadoras y funcionales. Con habilidades sólidas en
                        lenguajes de programación como JavaScript, HTML, CSS y
                        frameworks como React y Angular, Melissa transforma
                        conceptos creativos en sitios web dinámicos y
                        atractivos. Su enfoque meticuloso y su capacidad para
                        resolver problemas la convierten en una colaboradora
                        valiosa en cualquier equipo de desarrollo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full md:w-1/2">
              <div className="bg-white shadow-md rounded-lg p-6 card contact-card">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-6 text-gray-500 text-left">
                  Nuestra misión
                </h2>
                <p className="leading-relaxed text-base text-right text-justify">
                  Brindar a los pequeños los ciudadanos de Bucaramanga acceso a
                  una gran variedad de productos de alta calidad a precios
                  competitivos. Ofrecer un servicio al cliente excepcional y
                  personalizado. Crear una comunidad de emprendedores que se
                  apoyen mutuamente.
                </p>
              </div>
            </div>

            <div className="p-2 w-full md:w-1/2">
              <div className="bg-white shadow-md rounded-lg p-6 card contact-card">
                <h3 className="sm:text-3xl text-2xl font-medium title-font mb-6 text-gray-500 text-left">
                  Nuestras acciones
                </h3>
                <p className="leading-relaxed text-base text-right text-justify">
                  Seleccionamos cuidadosamente cada producto que ofrecemos,
                  asegurándonos de que cumpla con los más altos estándares de
                  calidad. Ofrecemos una variedad de opciones de envío y pago
                  para que puedas elegir la que mejor se adapte a tus
                  necesidades. <br />
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h4 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mx-auto mt-8 text-center">
            ¿Deseas colaborar con nosotros?
          </h4>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-center mx-auto">
            Escribe tus datos y nuestro equipo se pondrá en contacto contigo.
          </p>
          <br />
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white py-2 px-8 text-lg button-contacto">
                  Enviar
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">ejemplo@correo.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>{" "}
                  {/*para hipervincculo */}
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contac;
