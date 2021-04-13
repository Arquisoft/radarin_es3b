import React from "react";
import Contenedor from "../components/Contenedor";
import ButtonToRender from "../components/ButtonToRender"; 
import IntervalRerender from "../components/IntervalRerender";
import ProcessOn from "../hooks/ProcessOn";
import ProcessOff from "../hooks/ProcessOff";
import { LoggedIn, LoggedOut } from "@solid/react";
import Desconectar from "../components/Desconectar";
import "./mapa.css";




function Mapa() {
  return (
    
    <div className="Mapa">
      <Contenedor/>
      <body className ="Vista-body">
        <LoggedIn>
          <h1>Encuentra a tus amigos</h1>
            <div> 
            <ButtonToRender  component={<IntervalRerender component={<ProcessOn />} time={5000} />} component2={<ProcessOff/>} 
             buttonName="Encender Aplicación" deleteName="Apagar Aplicación" /></div>
        </LoggedIn>  
        <LoggedOut>
          <Desconectar/>
        </LoggedOut>
      </body>
    </div>
  );
}


export default Mapa;
