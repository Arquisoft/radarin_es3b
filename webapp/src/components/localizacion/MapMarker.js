import * as React from "react";
import { MapContext } from "react-map-gl";
import FriendMarker from "../../hooks/markers/FriendMarker"



function MapMarker(props) {
  const context = React.useContext(MapContext);

  const { longitude, latitude } = props;

  const nombre = props.nombre;
  const [x, y] = context.viewport.project([longitude, latitude]);

  const markerStyle = {
    position: 'absolute',
	fontWeight: "bold",
	
   

    left: x,
    top: y
  };

  return (
    <div style={markerStyle} >
	
     {nombre}
	  <FriendMarker/>
    </div>
	
	
  );
}

export default MapMarker;