import React from "react";

import WebId from "./solid/SolidId";

import PrepareChecks from "../components/admin/PrepareChecks";






export default function processSession(){
	
	
	
	const webID=WebId();
	
	
		
	 
		return (
			<div>
			
			<PrepareChecks userWebID={webID}/>
		
			</div>
		);
	
	
	
	
	
}