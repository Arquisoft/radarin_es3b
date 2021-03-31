import React from "react";
import { geolocated } from "react-geolocated";


import GuardarLocalizacion from "./GuardarLocalizacion";

class EncenderAplicacion extends React.Component{
	
	
		
	
	
   
        render() {

            //console.log(this.props.amigos);
            return !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (

			
				
				
				<div id="mapa"><GuardarLocalizacion amigos={this.props.amigos} userWebID={this.props.userWebID} lat={this.props.coords.latitude} lon={this.props.coords.longitude}/></div>      
                
				
 
                
            ) : (
                <div>Getting the location data&hellip; </div>
            );
        }
      


}

export default geolocated({
	positionOptions: {
        enableHighAccuracy: true,
    },
	
	watchPosition : true
   
})(EncenderAplicacion);