import React from "react";
import { geolocated } from "react-geolocated";
import Map from "./Map";

class Localization extends React.Component{

    
		
   
        render() {

            return !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (

				
				
				<Map lat={this.props.coords.latitude.toFixed(2)} lon={this.props.coords.longitude.toFixed(2)}/>      
                      
 
                
            ) : (
                <div>Getting the location data&hellip; </div>
            );
        }
      


}

export default geolocated({
   
})(Localization);