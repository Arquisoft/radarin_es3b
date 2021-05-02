import React from "react";




import { getUserRegisterList,addUserRegister,deleteUserRegister  } from "../../api/api";
import GenerateResponsesAdmin from "./GenerateResponsesAdmin";

//import { store } from 'react-notifications-component';

class AdminOperations extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			//Variable con los usuarios obtenidos
			users:[],
			//Variable que controla si se han cargado los usuarios ya
			isLoading: true
			
			

		};
		
		
	}

	
	async componentDidMount() {
		

		//Obtenemos la lista de todos los usuarios
		var response = await getUserRegisterList();
		this.state.users=response;
		
		//Marcamos que ya se han cargado los usuarios
		this.setState({ isLoading: false });
	
	}
	
	async componentDidUpdate() {
		
		var response = await getUserRegisterList();
		this.state.users=response;
		this.setState({ isLoading: false });
	
	}
	
	
	//Borrar usuario del registro usuarios
	async borrarUsuario(user){
		
		let response=await deleteUserRegister(user);
		console.log(response);
		
		
	}
	
	//Banear usuario poniendo su atributo allowed a false
	async bloquearUsuario(user){
		let response=await addUserRegister(user,false);
		console.log(response);
		
	}
	
	async desbloquearUsuario(user){
		let response=await addUserRegister(user,true);
		console.log(response);
		
	}
	
	
	
	
	renderUsers = () => {
		
    
    return (this.state.users).map((item) => {
		if(item.allowed){
			return (
				<li>{item.user}	<button onClick={()=> this.borrarUsuario(item.user)}> Delete</button> <button onClick={()=> this.bloquearUsuario(item.user)}> Block</button></li>
			
			);
		
		}
		
		else{
			return (
				<li>{item.user}	<button onClick={()=> this.borrarUsuario(item.user)}> Delete</button> <button onClick={()=> this.desbloquearUsuario(item.user)}> Unblock</button></li>
			
			);
		}
		
      
    });
  }
	

	

	render() {
		
		if (this.state.isLoading) {
			return <div >Cargando...</div>;
			
		}
		
		return (
			<div >
			<h2>Usuarios registrados en la app</h2>
			<ul>
			{this.renderUsers()}
			
			
			</ul>
			
			<GenerateResponsesAdmin/>
				
				
			</div>

		);
	}



}

export default AdminOperations;