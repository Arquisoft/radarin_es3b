import {  useWebId } from "@solid/react";

export default function WebId(){
	var id= useWebId();
	
	id=`${id}`;
	
	
	
	return id;	
}

