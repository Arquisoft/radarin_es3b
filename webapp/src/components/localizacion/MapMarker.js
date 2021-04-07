import * as React from "react";
import { MapContext } from "react-map-gl";
import FriendMarker from "../../hooks/markers/FriendMarker";



function MapMarker(props) {
  const context = React.useContext(MapContext);

  const { longitude, latitude } = props;

  const nombre = props.nombre;
 
  const [x, y] = context.viewport.project([longitude, latitude]);

  const markerStyle = {
    position: "absolute",
	

	
   
	
    left: x-18,
    top: y-52
  };
  
  const textStyle = {
   fontWeight: "bold",
   background:"white"
  };

  return (
    <div style={markerStyle} >
	<div style={textStyle}>
     {nombre}
	 </div>
	 
	  <FriendMarker/>
    </div>
	
	
  );
}

export default MapMarker;