import React from "react";
import { geolocated } from "react-geolocated";

import PruebaLoc from "../../pruebas/PruebaLoc"
import GuardarLocalizacion from "./GuardarLocalizacion";

class EncenderAplicacion extends React.Component{

    
		

   
        render() {

            return !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (

				
				<div>
				<div id="mapa"><GuardarLocalizacion lat={this.props.coords.latitude} lon={this.props.coords.longitude}/></div>      
                <PruebaLoc/>
				</div>
 
                
            ) : (
                <div>Getting the location data&hellip; </div>
            );
        }
      


}

export default geolocated({
   
})(EncenderAplicacion);