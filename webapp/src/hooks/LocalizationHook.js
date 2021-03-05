import React from 'react'
import useGeolocation from 'react-hook-geolocation'
 
const ComponentWithGeolocation = () => {
  const geolocation = useGeolocation()
 
  return !geolocation.error
    ? (
	
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
                            <td>{geolocation.latitude.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>longitud</td>
                            <td>{geolocation.longitude.toFixed(2)}</td>
                        </tr>
                       
                    </tbody>
                </table>
                </div>
	
    )
    : (
      <p>No geolocation, sorry.</p>
    )
}

export default ComponentWithGeolocation;