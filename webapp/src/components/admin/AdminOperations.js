import React from "react";




import { getUserRegisterList,addUserRegister,deleteUserRegister  } from "../../api/api";
import GenerateResponsesAdmin from "./GenerateResponsesAdmin";

//import { store } from 'react-notifications-component';

class AdminOperations extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			users:[],
			isLoading: true
			
			

		};
		
		
	}

	
	async componentDidMount() {
		

		
		var response = await getUserRegisterList();
		this.state.users=response;
		this.setState({ isLoading: false });
	
	}
	
	async componentDidUpdate() {
		

		
		var response = await getUserRegisterList();
		this.state.users=response;
		this.setState({ isLoading: false });
	
	}
	
	
	
	async borrarUsuario(user){
		
		let response=await deleteUserRegister(user);
		console.log(response);
		
		
	}
	
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