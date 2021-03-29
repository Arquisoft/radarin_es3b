import React from "react";

import WebId from '../components/solid/SolidId'
import SolidFriends from '../components/solid/SolidFriends'
import EncenderAplicacion from '../components/localizacion/EncenderAplicacion'


export default function ProcessOn(){
	
	
	
	const webID=WebId()
	const solidFriends=SolidFriends()
	 
	return (
	
		<EncenderAplicacion amigos={solidFriends} userWebID={webID}/>
	)
	
}