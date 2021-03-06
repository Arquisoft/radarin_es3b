import React from "react";
import { geolocated } from "react-geolocated";
import FormRango from "./FormRango";


class EncenderAplicacion extends React.Component{
	
	
		
	
	
   
        render() {

          //Si la geolocalizacion esta activada la obtenemos, sino mostramos un error
            return !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (

			
				
				
				<div><FormRango amigos={this.props.amigos} userWebID={this.props.userWebID} lat={this.props.coords.latitude} lon={this.props.coords.longitude}/></div>      
                
                
				
 
                
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