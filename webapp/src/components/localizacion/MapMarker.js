import * as React from "react";
import { MapContext } from "react-map-gl";




function MapMarker(props) {
  const context = React.useContext(MapContext);


  const { longitude, latitude } = props;

  const nombre = props.nombre;
 
  const [x, y] = context.viewport.project([longitude, latitude]);

  const markerStyle = {
    position: "absolute",
    left: x,
    top: y,
	
	
  };
  
  const textStyle = {
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