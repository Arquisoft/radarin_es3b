import React from "react";


import FriendsMap from "./Map";

import { getUserLocalization } from "../../api/api";
import addNotification from 'react-push-notification';
//import { store } from 'react-notifications-component';

class GenerateResponses extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			responses: new Map(),
			friends: new Map()
			
			


		};
		
		
	}
	
	async showNotification(){
		
		var friendstext = "";

		for (var [clave, valor] of this.state.friends) {
			
			if( valor) {
				this.state.friends.set(clave,false)
				friendstext += clave;
                friendstext += ", ";
			}
		}
		friendstext = friendstext.substring(0, friendstext.length -2);
        
        if (friendstext !== ""){
            addNotification({
                title: "Los amigos ya conectados",
                subtitle: "subtitle",
                message: friendstext,
				duration: 5000,
                theme: "darkblue",
                native: true // when using native, your OS will handle theming.
            });
        }
	}
	
	async tryAdd(item){
		if (Math.sqrt((item.longitude - this.props.lon) * (item.longitude - this.props.lon) + (item.latitude - this.props.lat) * (item.latitude - this.props.lat)) < this.props.rango) {
		
			this.state.friends.set(item.user,true);
		
		}
	}
	
	async tryDelete(item){
		if (Math.sqrt((item.longitude - this.props.lon) * (item.longitude - this.props.lon) + (item.latitude - this.props.lat) * (item.latitude - this.props.lat)) > this.props.rango) {
		
			this.state.friends.delete(item.user,true);
		
		}
	}

	async componentDidMount() {

		for (var element of this.props.amigos) {


			var response = await getUserLocalization(element);

			if (response.user !== "error") {

				this.state.responses.set(response.user,response);
				this.tryAdd(response);
				
			}
		}
		
		this.showNotification();
	}
	
	async componentDidUpdate() {
		console.log(this.props.rango);

		for (var element of this.props.amigos) {

			var response = await getUserLocalization(element);
			
			if (response.user !== "error" ) {
				
				
				if( !this.state.responses.has(element) || this.state.responses.get(element).longitude!== response.longitude|| this.state.responses.get(element).latitude!== response.latitude){
					
					if( this.state.responses.has(element)){
						this.state.responses.delete(element);
					}
					
					this.state.responses.set(response.user,response);
					
				}
				
				if( !this.state.friends.has(element)){
					this.tryAdd(response);
				}
				
				else{
					this.tryDelete(response);
				}
				
					
				
			}
			
			else{
				
				if(this.state.responses.has(element)){
					this.state.responses.delete(element);
					
				}
				
				if(this.state.friends.has(element)){
					this.state.friends.delete(element);
					
				}
				
			}
			
			this.showNotification();
			
			
			
			
		}



	}
	

	

	render() {
		return (
			<div >
				<FriendsMap  responses={this.state.responses} lat={this.props.lat} lon={this.props.lon} rango={this.props.rango}/>
				
			</div>

		);
	}



}

export default GenerateResponses;