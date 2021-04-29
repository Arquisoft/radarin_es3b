import React from "react";

import WebId from "./SolidURL";
import AddFriend from '../../components/solid/AddFriend'






export default function ProcessAddFriend(){
	
	
	
	const webID=WebId();
	

	//friendNotification(solidFriends);
	 
	return (
		<div>
		<AddFriend userWebId={webID}/>
		
		</div>
	);
	
}