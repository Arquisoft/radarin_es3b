import React from "react";
import Button from '@material-ui/core/Button';
import MapImg from "../vistas/img/mapa.jpg";
import "../vistas/mapa.css";

function Desconectar() {
    return (
      <div className="Desconectar">
        <body>
            <h1>¡Te has desconectado con éxito!</h1>
            <p class="logoutMessage">Esperamos que pronto estés de vuelta con nosotros.</p>
            <Button variant="contained" color="primary" href="../vistas/Home">Página de Inicio</Button>
            <div class= "mapImg">
              <img src={MapImg} alt="mapImg"/>
            </div>
        </body>
      </div>
    );
  }
  
  
  export default Desconectar;