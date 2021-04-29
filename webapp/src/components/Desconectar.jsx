import React from "react"; 
import MapImg from "../vistas/img/mapa.jpg";
import { Link } from 'react-router-dom';
import "../vistas/mapa.css";
import "../vistas/Home.css";

function Desconectar() {
    return (
      <div className="Desconectar">
        <body>
            <h1>¡Te has desconectado con éxito!</h1>
            <p class="logoutMessage">Esperamos que pronto estés de vuelta con nosotros.</p>
            <Link class="link" to="/Home">Página de Inicio</Link>
            <div class= "mapImg">
              <img src={MapImg} alt="mapImg"/>
            </div>
        </body>
      </div>
    );
  }
  
  
  export default Desconectar;