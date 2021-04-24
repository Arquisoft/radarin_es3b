import React from "react";

import WebId from "./solid/SolidId";

import DesactivarAplicacion from "../components/localizacion/DesactivarAplicacion";


export default function processOff() {


	const webID = WebId();


	//console.log(webID);


	return (

		<DesactivarAplicacion userWebID={webID} />
	);

}