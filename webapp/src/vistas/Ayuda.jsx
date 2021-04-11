import React from "react";

import Contenedor from "../components/Contenedor";

import "react-notifications-component/dist/theme.css";


function Ayuda() {
  return (
    <div className="Admin">
      <Contenedor />
      <body className="App-body">
        <h1>Documentación</h1>
        <a href="https://github.com/Arquisoft/radarin_es3b">Link al repositorio del proyecto</a>

      </body>
    </div>
  );
}


export default Ayuda;