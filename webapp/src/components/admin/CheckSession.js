import React from "react";
import auth from 'solid-auth-client';
import { Alert } from '@material-ui/lab';





import { getUserRegister,addUserRegister  } from "../../api/api";

//import { store } from 'react-notifications-component';

class CheckSession extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			allowed:true
			
			

		};
		
		
	}
	
	async session(){
		
		console.log(this.props.userWebID);
		//Obtenemos el registro del usuario
		var response = await getUserRegister(this.props.userWebID);
		console.log(response);
		
		//Si el usuario se ha logeado por primera vez creamos el registro del usuario
		if(response.user==="error"){
			await addUserRegister(this.props.userWebID,true);
			
		}
		
		//Si ya existia y esta baneado se le deslogea
		else if(!response.allowed){
			this.state.allowed=false;
		
			auth.logout();
		}
		
	}

	
	async componentDidUpdate() {
		
		//Este componente tambien se usa cuando el usuario no esta logeado, con esto comprobamos que lo está
		if(this.props.userWebID.length>=2){this.session();}
	
	}
	
	async componentDidMount() {
		
		if(this.props.userWebID.length>=2){this.session();}
		
		
	
	}
	
	
	
	
  
	

	

	render() {
		
		//Si esta baneado se le manda una notificacion
		 if (!this.state.allowed){
			 return (
			<Alert variant="filled" severity="error">Has sido bloqueado de la aplicación</Alert>
			 );
			 
		 }
		 
		 else{
			return null;
		 }
		
	}



}

export default CheckSession;