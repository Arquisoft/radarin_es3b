import React from "react";
import { ReactComponent as ReactLogo } from "../../svg/adminMarker.svg";
import { MapContext } from "react-map-gl";


export default function FriendMarker(props) {

 
	
const context = React.useContext(MapContext);

console.log(props)
  const { longitude, latitude } = props;

  const nombre = props.nombre;
 
  const [x, y] = context.viewport.project([longitude, latitude]);

  const markerStyle = {
    position: "absolute",
    left: x,
    top: y,
	
	
  };
  
  

  return (
    <div class="marker" style={markerStyle} >
	
		<div class="friendMarker">
            <ReactLogo />
       
		</div>
	 </div>
	
	
  );

}