import React from "react";

import WebId from "../components/solid/SolidId";
import SolidFriends from "../components/solid/SolidFriends";
import EncenderAplicacion from "../components/localizacion/EncenderAplicacion";

import addNotification from 'react-push-notification'; //pushnotifs

export default function processOn(){
	
	addNotification({
		title: 'Warning',
		subtitle: 'This is a subtitle',
		message: 'This is a very long message',
		theme: 'darkblue',
		native: true // when using native, your OS will handle theming.
	}); //pushnotifs
	
	const webID=WebId();
	const solidFriends=SolidFriends();
	 
	return (
	
		<EncenderAplicacion amigos={solidFriends} userWebID={webID}/>
	);
	
}