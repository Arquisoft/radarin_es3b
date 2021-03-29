import React from "react";

import WebId from '../components/solid/SolidId'
import SolidFriends from '../components/solid/SolidFriends'
import DesactivarAplicacion from '../components/localizacion/DesactivarAplicacion'


export default function ProcessOn(){
	
	
	
	
	
	const webID=WebId()
	
	
	console.log(webID)
	
	 
	return (
	
		<DesactivarAplicacion userWebID={webID}/>
	)
	
}