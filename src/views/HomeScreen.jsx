import React from "react";
import "../css/HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home-container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-4 mb-4">¡Bienvenidos a la Clase de Rutas!</h1>
      <p className="lead mb-4">
        Hoy aprenderemos a manejar la navegación en aplicaciones React con{" "}
        <strong>React Router</strong>.
      </p>
      <p className="mb-4">
        Utilizaremos componentes como <strong>BrowserRouter</strong>,{" "}
        <strong>Routes</strong> y <strong>Route</strong> para crear una
        experiencia de navegación fluida y dinámica.
      </p>
      <p>
        Para más información, visita la web oficial de React Router: <br />
        <a
          href="https://reactrouter.com/en/main"
          className="btn btn-link text-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          reactrouter.com
        </a>
      </p>
    </div>
  );
};

export default HomeScreen;
