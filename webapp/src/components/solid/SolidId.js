import {  useWebId } from "@solid/react";

export default function WebId(){
	var id= useWebId();
	id=`${id}`.split(".")[0];
	id=id.substring(8,id.length);
	
	
	return id;
	
}

