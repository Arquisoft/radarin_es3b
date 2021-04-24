import React from "react";




import { getUserLocalizationList } from "../../api/api";
import MapAdmin from "./MapAdmin";



class GenerateResponsesAdmin extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			responses: []
			
			
			


		};
		
		
	}
	
	
	
	

	async componentDidMount() {
		console.log("hola")
		var users = await getUserLocalizationList();
		this.state.responses=users;
		console.log("hola")
		
		
	}
	
	async componentDidUpdate() {
		
		var users = await getUserLocalizationList();
		this.state.responses=users;



	}
	

	

	render() {
		return (
			<div >
				<h2>Mapa de administrador</h2>
				<MapAdmin  responses={this.state.responses} lat={this.props.lat} lon={this.props.lon} rango={this.props.rango}/>
				
			</div>

		);
	}



}

export default GenerateResponsesAdmin;