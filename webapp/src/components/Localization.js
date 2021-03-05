import React from "react";
import { geolocated } from "react-geolocated";

class Localization extends React.Component{

    

   
        render() {

            return !this.props.isGeolocationAvailable ? (
                <div>Your browser does not support Geolocation</div>
            ) : !this.props.isGeolocationEnabled ? (
                <div>Geolocation is not enabled</div>
            ) : this.props.coords ? (

               

                <div class='localization'>
                <table class='localization'>
                    <thead class='localization'>
	                <tr>
		                <th>Campo</th>
		                <th>Medida</th>
		
	                </tr>
	            </thead>


                    <tbody>
                        <tr>
                            <td>latitud</td>
                            <td>{this.props.coords.latitude.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>longitud</td>
                            <td>{this.props.coords.longitude.toFixed(2)}</td>
                        </tr>
                       
                    </tbody>
                </table>
                </div>
            ) : (
                <div>Getting the location data&hellip; </div>
            );
        }
      


}

export default geolocated({
   
})(Localization);