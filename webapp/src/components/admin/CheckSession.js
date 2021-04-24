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
		var response = await getUserRegister(this.props.userWebID);
		console.log(response);
		
		if(response.user==="error"){
			await addUserRegister(this.props.userWebID,true);
			
		}
		
		else if(!response.allowed){
			this.state.allowed=false;
		
			auth.logout();
		}
		
	}

	
	async componentDidUpdate() {
		
		if(this.props.userWebID.length>=2){this.session();}
	
	}
	
	async componentDidMount() {
		
		if(this.props.userWebID.length>=2){this.session();}
		
		
	
	}
	
	
	
	
  
	

	

	render() {
		
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