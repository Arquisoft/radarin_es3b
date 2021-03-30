import React from "react";


import FriendsMap from "./Map";

import { getUserLocalization } from "../../api/api";
//import { store } from 'react-notifications-component';

class GenerateResponses extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			responses: new Map()
			
			


		};
		
		
	}




	async componentWillMount() {

		for (var element of this.props.amigos) {


			var response = await getUserLocalization(element);

			if (response.user !== "error") {

				this.state.responses.set(response.user,response)
			}
		}
		
		

	}
	
	async componentDidUpdate() {
		

		for (var element of this.props.amigos) {
			
			 
			 

			var response = await getUserLocalization(element);
			
			if (response.user !== "error" ) {
				
				
				if( !this.state.responses.has(element) || this.state.responses.get(element).longitude!== response.longitude|| this.state.responses.get(element).latitude!== response.latitude){
					
					if( this.state.responses.has(element)){
						this.state.responses.delete(element)
					}
					this.state.responses.set(response.user,response);
					
				}
			}
			
			else{
				
				if(this.state.responses.has(element)){
					this.state.responses.delete(element)
					
				}
				
			}
		}



	}
	

	

	render() {
		return (
			<div>
				<FriendsMap responses={this.state.responses} lat={this.props.lat} lon={this.props.lon} />
			</div>

		);
	}



}

export default GenerateResponses;