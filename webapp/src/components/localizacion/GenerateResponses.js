import React from "react";


import FriendsMap from "./Map";

import { getUserLocalization } from "../../api/api";
import addNotification from 'react-push-notification';
//import { store } from 'react-notifications-component';

class GenerateResponses extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			//Map que maneja los marcadores que se deben mostrar 
			responses: new Map(),
			//Map que maneja las notificaciones
			friends: new Map()
			
		
		};
		
	}
	
	async showNotification(){
		
		var friendstext = "";

		//Recorremos todos los usuarios para los que tenemos que mostrar notificaciones y los añadimos a un string
		for (var [clave, valor] of this.state.friends) {
			
			if( valor) {
				this.state.friends.set(clave,false)
				friendstext += clave;
                friendstext += ", ";
			}
		}
		friendstext = friendstext.substring(0, friendstext.length -2);
		
		//Si tenemos al menos un usuario se muestra la notificación
        if (friendstext !== ""){
            addNotification({
                title: "Los amigos ya conectados",
                subtitle: "subtitle",
                message: friendstext,
				duration: 15000,
                theme: "darkblue",
                native: true // when using native, your OS will handle theming.
            });
        }
	}
	
	async tryAdd(item){
		//Si el usuario está dentro del rango de visión lo añadimos a las notificaciones
		if (Math.sqrt((item.longitude - this.props.lon) * (item.longitude - this.props.lon) + (item.latitude - this.props.lat) * (item.latitude - this.props.lat)) < this.props.rango) {
		
			this.state.friends.set(item.user,true);
		
		}
	}
	
	async tryDelete(item){
		//Si el usuario NO está dentro del rango de visión lo borramos del hashmap de notificaciones para poder volver a mostrar la notificación si vuelve a aparecer
		if (Math.sqrt((item.longitude - this.props.lon) * (item.longitude - this.props.lon) + (item.latitude - this.props.lat) * (item.latitude - this.props.lat)) > this.props.rango) {
		
			this.state.friends.delete(item.user,true);
		
		}
	}

	//Al construirse el componente
	async componentDidMount() {

		//Recorremos todos los amigos que nos llega al componente
		for (var element of this.props.amigos) {

			//Obtenemos la localización del usuario
			var response = await getUserLocalization(element);

			
			if (response.user !== "error") {

				//Si no nos ha dado un error marcamos que el usuario debe mostrarse en el mapa
				this.state.responses.set(response.user,response);
				
				//Intenamos añadir el usuario a al hashmap de notificaciones
				this.tryAdd(response);
				
			}
		}
		
		//Mostramos las notificaciones
		this.showNotification();
	}
	
	//Al actualizarse el componente
	async componentDidUpdate() {
		console.log(this.props.rango);
		
		//Recorremos todos los amigos que nos llega al componente
		for (var element of this.props.amigos) {

			//Obtenemos la localización del usuario
			var response = await getUserLocalization(element);
			
			//Si no nos ha dado un error 
			if (response.user !== "error" ) {
				
				
				//Si el usuario ha aparecido en esta ultima actualización o ha cambiado su posición
				if( !this.state.responses.has(element) || this.state.responses.get(element).longitude!== response.longitude|| this.state.responses.get(element).latitude!== response.latitude){
					
					//Añadimos el usuario a al hashmap de los usuarios que se deben mostrar, en caso de que ya existise una posición del usuario
					//la borramos para impedir markers duplicados
					if( this.state.responses.has(element)){
						this.state.responses.delete(element);
					}
					
					this.state.responses.set(response.user,response);
					
				}
				
				//Si no se habia mostrado la localización del usuario desde que apareció por última vez comprobamos si se debe mostrar
				if( !this.state.friends.has(element)){
					this.tryAdd(response);
				}
				
				//Sino comprobamos si se debe elminar
				else{
					this.tryDelete(response);
				}
				
					
				
			}
			
			//Si el usuario no se ha encontrado
			else{
				
				//Si el usuario estaba en la ultima actualización lo borramos para quitar su marker
				if(this.state.responses.has(element)){
					this.state.responses.delete(element);
					
				}
				
				//Si del usuario se nos habia mostrado la notificación lo borramos del hashmap de notificaciones para poder volver a mostrar la notificación si vuelve a aparecer
				if(this.state.friends.has(element)){
					this.state.friends.delete(element);
					
				}
				
			}
			
			//Mostramos todas las notificaciones
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