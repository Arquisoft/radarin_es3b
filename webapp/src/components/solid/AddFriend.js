import Button from '@material-ui/core/Button';
import React from 'react';
import Form from "react-bootstrap/Form";
import getName from "../../hooks/solid/SolidName";
import ldflex from "@solid/query-ldflex";
import { Alert } from '@material-ui/lab';
import { SpaceBar } from '@material-ui/icons';




class AddFriend extends React.Component {


    constructor(props) {
        super(props);
        this.state = { friendWebId: '',errorBorrar:false,permisosBorrar:true,errorAñadir:false,permisosAñadir:true, estado:' ' }
    }
	
    changeUrl(e) {
        const url = e.target.value ;
        this.setState({friendWebId: url});
    }
	
	async addFriend (friendWebId, userWebId){
		console.log(friendWebId);
		console.log(userWebId);
		
		var errorAñadir=false;
		var permisosAñadir=true;

		try {  
			var name = await getName(friendWebId.trim());
			

			console.log(name)
			if(name!==undefined){
				
				try{
					
					let response=await ldflex[userWebId].knows.add(ldflex[friendWebId.trim()]);
					
					
					console.log(response);
				}
				
				catch{
					console.log("gg");
					permisosAñadir=false;
				}
			}
			else{
				errorAñadir=true;
				
			}
		} catch (error){
			errorAñadir=true;
			
			
		}	
	
		this.state.errorAñadir=errorAñadir
		this.state.permisosAñadir=permisosAñadir;
		this.state.estado="añadir";
		
	}
	
	async deleteFriend (friendWebId, userWebId){
		console.log(friendWebId);
		console.log(userWebId);
		this.state.estado="borrar";
		var errorBorrar=false;
		var permisosBorrar=true;
		
		
		try{
			
			let response=await ldflex[userWebId].knows.delete(ldflex[friendWebId.trim()]);	
			
			
			
			if(response!==undefined){
				errorBorrar=false;
				
			}
			else{
				errorBorrar=true;
				
			}
			console.log(response);
		}
		
		catch{
			
			permisosBorrar=false;
		}

		this.state.errorBorrar=errorBorrar
		this.state.permisosBorrar=permisosBorrar;
		this.state.estado="borrar";
		
	}
	
	renderAlert = () => {
		
	    if(this.state.estado==='añadir'){
			
			if (this.state.errorAñadir) {
		  
				return (
					<Alert  variant="filled" severity="warning">El usuario que se intenta añadir no es válido</Alert>
		  
				);
			}  
		
			else if (!this.state.permisosAñadir) {
				return (
					
					<Alert variant="filled" severity="error">Su pod no tiene los permisos habilitados para esta aplicación</Alert>
		  
				);
			} 
			
			else{
				return(
					<Alert variant="filled" severity="success">Amigo añadido  con exito</Alert>
				);
			}
			
			
			
			
		}
		
		if(this.state.estado==='borrar'){
			
			if (this.state.errorBorrar) {
		  
				return (
					<Alert variant="filled" severity="warning">El usuario que se intenta borrar  no es válido</Alert>
		  
				);
			}  
		
			else if (!this.state.permisosBorrar) {
				return (
					
					<Alert variant="filled" severity="error">Su pod no tiene los permisos habilitados para esta aplicación</Alert>
		  
				);
			} 
			
			else{
				return(
					<Alert variant="filled" severity="success">Amigo borrado con exito</Alert>
				);
			}

			
		}

	  else { 
		
			return(
				<Alert color="info" variant="outlined" severity="info">Escribe el enlace de pod de un amigo para borrarlo o añadirlo</Alert>
			);
			
		
	  
	  }
   
  }

    render() {
		
		 	 
        return (
            <div className="AddFriend">
				
                <h1> Gestionar lista de amigos </h1>
				{this.renderAlert()}

				<form class="friend">
                    <label for="adminForm" class="labelUser">URL:</label>
                    <input class="adminForm" type="text" name="nombre" size="40" 
                    onChange={this.changeUrl.bind(this)} value={this.state.friendWebId}
                    placeholder="Introduzca el usuario administrador" required="true"></input>

					<br></br> 
					<Button  variant="contained" color="primary" onClick={() => this.addFriend(this.state.friendWebId,this.props.userWebId)}>
                       agregar </Button>
					<Button  variant="contained" color="secondary" onClick={() => this.deleteFriend(this.state.friendWebId,this.props.userWebId)}>
                       borrar </Button>
                </form> 
                
            </div>
        );
    


	}



}

export default AddFriend