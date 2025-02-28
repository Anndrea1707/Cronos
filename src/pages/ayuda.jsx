import React, { useState, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/ayuda.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Ayuda = () => {
  const [indiceActivo, setIndiceActivo] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const ayudaRef = useRef(null);

  const handlerCategoryChange = (category) => {};

  const manejarClickAcordeon = (indice) => {
    setIndiceActivo(indiceActivo === indice ? null : indice);
  };

  const manejarCambioBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const manejarClickBuscar = () => {
    if (ayudaRef.current) {
      ayudaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onCategoryChange={handlerCategoryChange} />
      <div className="wrapper-ayuda">
        <p className="text">PORQUE TU BIENESTAR NOS IMPORTA</p>
        <h1 className="pregunta-tittle">¿Con qué podemos ayudarte?</h1>
        <div className="input-ayuda-container">
          <div className="input-ayuda">
            <input
              type="text"
              placeholder="Buscar en Ayuda"
              value={busqueda}
              onChange={manejarCambioBusqueda}
            />
          </div>
          <button
            className="buscar-btn"
            onClick={manejarClickBuscar}
            disabled={!busqueda}
          >
            Buscar
          </button>
        </div>

        <div ref={ayudaRef}></div>

        <br />
        <br />
        <br />
        <h3 className="type-help">Compras</h3>
        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 0 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(0)}
          >
            Términos y condiciones
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 0 ? "block" : "none" }}
          >
            <p>
              MercaEmprende y demás compañías comercializadoras de productos en
              el sitio web se reservan el derecho que les compete sobre sus
              marcas, nombres, logos y/o imágenes asociadas que se encuentren
              registradas y protegidas por la Ley. MercaEmprende tiene completa
              propiedad intelectual sobre cualquier contenido que se descargue,
              reproduzca, imprima y/o guarde. Los usuarios no tienen el derecho
              de utilizar estos logos, marcas y/o imágenes. Al hacerlo, usted
              estará infringiendo la ley.
            </p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 1 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(1)}
          >
            Política de devoluciones
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 1 ? "block" : "none" }}
          >
            <p>
              Recuerda que, al momento de recibir el producto, si no te
              encuentras satisfecho, cuentas con un periodo de treinta (30) días
              calendario para realizar el cambio del mismo.
            </p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 2 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(2)}
          >
            Política de cambio
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 2 ? "block" : "none" }}
          >
            <p>
              MercaEmprende aceptará el cambio si el producto cumple con los
              siguientes requisitos:
              <br />
              -No haber sido usado.
              <br />
              -Debe tener todas las marquillas y etiquetas.
              <br />
              -No debe estar modificado o alterado de su estado original.
              <br />
              -No debe estar sucio.
            </p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 3 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(3)}
          >
            Política de envío
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 3 ? "block" : "none" }}
          >
            <p>
              Cuando realices una compra de producto a través de la página web,
              el tiempo de entrega comienza 24 horas después.
            </p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 4 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(4)}
          >
            Derecho de retracto de compra
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 4 ? "block" : "none" }}
          >
            <p>
              El consumidor podrá hacer uso de la facultad de retracto dentro de
              los cinco (05) días hábiles contados a partir de la entrega del
              bien o de la celebración del contrato en caso de la prestación de
              servicios.
            </p>
          </div>
        </div>

        <br />
        <br />
        <h3 className="type-help">Guías y Tutoriales</h3>
        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 5 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(5)}
          >
            Guía de compra
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 5 ? "block" : "none" }}
          >
            <p>
              Nuestro sitio web es intuitivo y fácil de usar. Explora nuestra
              amplia selección de productos y sigue estos simples pasos:
              <br />
              1. Navegación: Utiliza el menú y las categorías para encontrar lo
              que necesitas.
              <br />
              2. Productos: Haz clic para obtener más detalles y agrégalos al
              carrito.
              <br />
              3. Pago Seguro: Completa tu compra de forma segura.
              <br />
              Si necesitas ayuda, contáctanos: <br />
              Teléfono: +123-456-7890
              <br />
              Correo Electrónico: soporte@ejemplo.com
              <br />
              ¡Gracias por elegirnos! Estamos aquí para ayudarte en tu
              experiencia de compra en línea.
            </p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 6 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(6)}
          >
            Guía de tallas
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 6 ? "block" : "none" }}
          >
            <p>
              ¿No estás seguro de tu talla de ropa o calzado? ¡No te preocupes!
              Aquí te dejamos algunos consejos útiles:
              <br />
              1. Toma tus Medidas: Utiliza una cinta métrica para medir tu
              busto, cintura, cadera y longitud del pie.
              <br />
              2. Consulta Nuestra Tabla de Tallas: Encuentra la correspondencia
              de tus medidas en nuestra tabla de tallas para elegir la talla
              adecuada.
              <br />
              3. Ten en Cuenta los Detalles: Algunos productos pueden tener
              instrucciones especiales de talla. Lee las descripciones
              detenidamente.
            </p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 7 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(7)}
          >
            Uso de productos
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 7 ? "block" : "none" }}
          >
            <p>
              ¡Felicidades por recibir tus productos! Aquí tienes algunos
              consejos útiles para sacarles el máximo provecho:
              <br />
              1. Instrucciones de Uso:
              <br />
              Lee detenidamente las instrucciones de uso que vienen con tus
              productos. Estas te guiarán sobre cómo utilizarlos de manera
              segura y efectiva.
              <br />
              2. Cuidado y Mantenimiento:
              <br />
              Para garantizar la durabilidad de tus productos, sigue las
              recomendaciones de cuidado y mantenimiento proporcionadas. Esto
              puede incluir limpieza regular, almacenamiento adecuado y evitar
              condiciones extremas.
              <br />
              3. Consejos Adicionales:
              <br /> Siempre es útil conocer algunos consejos adicionales. Por
              ejemplo, para productos de limpieza, prueba primero en una pequeña
              área poco visible. Para productos electrónicos, desconéctalos
              cuando no estén en uso para ahorrar energía.
            </p>
          </div>
        </div>

        <br />
        <br />
        <h3 className="type-help">Cuenta</h3>
        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 8 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(8)}
          >
            Creación de cuenta
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 8 ? "block" : "none" }}
          >
            <p>
              ¡Es fácil empezar! Sigue estos pasos para crear tu cuenta:
              <br />
              1. Registro: Haz clic en el botón "Registrarse" en la parte
              superior derecha de la página.
              <br />
              2. Completa el Formulario: Ingresa tu nombre, dirección de correo
              electrónico y elige una contraseña segura.
              <br />
              3. Verificación: Asegúrate de verificar tu dirección de correo
              electrónico haciendo clic en el enlace de confirmación que te
              enviaremos.
              <br />
              ¡Listo para Comenzar!:
              <br />
              Una vez verificado, podrás acceder a todas las funciones del sitio
              y comenzar a disfrutar de una experiencia de compra personalizada.
            </p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 9 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(9)}
          >
            Recuperación contraseña
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 9 ? "block" : "none" }}
          >
            <p>
              ¿Olvidaste tu contraseña? No te preocupes, aquí te explicamos cómo
              recuperarla fácilmente:
              <br />
              1. Accede al Enlace de Recuperación: Dirígete a la página de
              inicio de sesión y haz clic en "¿Olvidaste tu contraseña?" o un
              enlace similar.
              <br />
              2. Ingresa tu Correo Electrónico: Proporciona la dirección de
              correo electrónico asociada a tu cuenta.
              <br />
              3. Sigue las Instrucciones: Revisa tu correo electrónico y sigue
              las instrucciones proporcionadas en el mensaje de recuperación de
              contraseña.
            </p>
          </div>
        </div>

        <div className="faq">
          <button
            className={`accordion ${indiceActivo === 10 ? "active" : ""}`}
            onClick={() => manejarClickAcordeon(10)}
          >
            Seguridad de tus datos
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div
            className="pannel"
            style={{ display: indiceActivo === 10 ? "block" : "none" }}
          >
            <p>
              1. Cifrado Avanzado: Utilizamos tecnologías de cifrado para
              proteger tus datos durante la transmisión y almacenamiento.
              <br />
              2. Acceso Restringido: Limitamos el acceso a tus datos solo a
              empleados autorizados que los necesitan para cumplir con sus
              funciones laborales.
              <br />
              3. Cumplimiento Legal: Cumplimos con todas las leyes y
              regulaciones de protección de datos para garantizar tu privacidad
              y seguridad.
              <br />
              <br />
              Tu confianza y privacidad son fundamentales para nosotros. Si
              tienes alguna pregunta, ¡no dudes en contactarnos!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ayuda;
