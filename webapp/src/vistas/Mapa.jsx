import React from "react";
import Contenedor from "../components/Contenedor";
import ButtonToRender from "../components/ButtonToRender";
import IntervalRerender from "../components/IntervalRerender";
import ProcessOn from "../hooks/ProcessOn";
import ProcessOff from "../hooks/ProcessOff";




function Mapa() {
  return (
    <div className="Mapa">
      <Contenedor/>
      <body className ="Vista-body">
          <h1>Encuentra a tus amigos</h1>
            <div> 
            <ButtonToRender component={<IntervalRerender component={<ProcessOn />} time={5000} />} component2={<ProcessOff/>} 
             buttonName="Encender Aplicación" deleteName="Apagar Aplicación" /></div>

            
      </body>
    </div>
  );
}


export default Mapa;
