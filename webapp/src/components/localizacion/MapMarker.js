import * as React from "react";
import { MapContext } from "react-map-gl";




function MapMarker(props) {
  const context = React.useContext(MapContext);


 //Leemos de props la longitud y latitud
  const { longitude, latitude } = props;

  const nombre = props.nombre;
 
 //Pasamos a las constantes x e y la latitud y longitud
  const [x, y] = context.viewport.project([longitude, latitude]);

  const markerStyle = {
	//Colocamos el marcador en la localización del usuario
    position: "absolute",
    left: x,
    top: y,
	
	
	
  };
  
  const textStyle = {
	  //Para mejorar la superposicion de los marcadores todas las etiquetas de texto deberán tener el mismo tamaño (el del nombre mas largo)
	width:props.max*0.6+"em",
   fontWeight: "bold",
   background:"white",
  
   
  };

  return (
    <div class="marker" style={markerStyle} >
	<div style={textStyle}>
     {nombre}
	 </div>
	 
	 {props.marker}
    </div>
	
	
  );
}

export default MapMarker;