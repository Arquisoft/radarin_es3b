import React from "react";

import WebId from "./solid/SolidId";
import SolidFriends from "./solid/SolidFriends";
import EncenderAplicacion from "../components/localizacion/EncenderAplicacion";






export default function processOn(){
	
	/*addNotification({
		title: 'Warning',
		subtitle: 'This is a subtitle',
		message: 'This is a very long message',
		theme: 'darkblue',
		native: true // when using native, your OS will handle theming.
	}); //pushnotifs*/
	
	const webID=WebId();
	const solidFriends=SolidFriends();

	//friendNotification(solidFriends);
	 
	return (
		<div>
		<EncenderAplicacion amigos={solidFriends} userWebID={webID}/>
		
		</div>
	);
	
}