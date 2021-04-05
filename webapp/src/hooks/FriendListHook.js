import {  useWebId } from "@solid/react";
import FriendsList from "../components/solid/FriendsList"; 


export default function FriendListHook(){
	var id = useWebId();
	id=`${id}`;
	console.log(id);

	 
	return (
		<FriendsList webId={id} />
	);
	
}

