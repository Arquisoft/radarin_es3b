import Button from '@material-ui/core/Button';
import React from 'react';
import getName from "../../hooks/solid/SolidName";
import ldflex from "@solid/query-ldflex";
import { Alert } from '@material-ui/lab'; 




class AddFriend extends React.Component {


    constructor(props) {
        super(props);
        this.state = { friendWebId: '',errorBorrar:false,permisosBorrar:true,errorAñadir:false,permisosAñadir:true, estado:' ' }
    }
	
    changeUrl(e) {
        const url = e.target.value ;
        this.setState({friendWebId: url});
    }
	
	//Añadir amigo
	async addFriend (friendWebId, userWebId){
		console.log(friendWebId);
		console.log(userWebId);
		
		//Por defecto no habrá errores en la operación
		var errorAñadir=false;
		var permisosAñadir=true;
		
		
		try {  
			//Comprobamos si podemos obtener el nombre del usuario y si es válido 
			var name = await getName(friendWebId.trim());
			

			console.log(name)
			if(name!==undefined){
				
				try{
					//Intentamos realizar la query para añadir al usuario
					let response=await ldflex[userWebId].knows.add(ldflex[friendWebId.trim()]);
					
					
					console.log(response);
				}
				
				catch{
					//Si no hemos podido añadirlo siendo usuario válido es por problemas de permisos
					permisosAñadir=false;
				}
			}
			//Si no es válido tenemos un error
			else{
				errorAñadir=true;
				
			}
		//Si da fallo al obtenerlo tenemos un error
		} catch (error){
			errorAñadir=true;
			
			
		}	
	
		//Pasamos al estado los errores y cual ha sido la operación
		this.state.errorAñadir=errorAñadir
		this.state.permisosAñadir=permisosAñadir;
		this.state.estado="añadir";
		
	}
	
	//Borrar amigo
	async deleteFriend (friendWebId, userWebId){
		console.log(friendWebId);
		console.log(userWebId);
		
		//Por defecto no habrá errores en la operación
		this.state.estado="borrar";
		var errorBorrar=false;
		var permisosBorrar=true;
		
		
		try{
			//Intentamos realizar la query para borrar al usuario
			let response=await ldflex[userWebId].knows.delete(ldflex[friendWebId.trim()]);	
			
			
			//Si el usuario no lo tenemos agregado tenemos un error
			if(response!==undefined){
				errorBorrar=false;
				
			}
			else{
				errorBorrar=true;
				
			}
			console.log(response);
		}
		
		catch{
			
			//Si no podemos relizar la consulta siendo el usuario válido es por problemas de permisos
			permisosBorrar=false;
		}

		//Pasamos al estado los errores y cual ha sido la operación
		this.state.errorBorrar=errorBorrar
		this.state.permisosBorrar=permisosBorrar;
		this.state.estado="borrar";
		
	}
	
	//Función que retorna la alerta que toque
	renderAlert = () => {
		
		//Si la última operación es de añadir
		
	    if(this.state.estado==='añadir'){
			
			//Si hay un error con el usuario mostramos la alerta de ese error
			if (this.state.errorAñadir) {
		  
				return (
					<Alert  variant="filled" severity="warning">El usuario que se intenta añadir no es válido</Alert>
		  
				);
			}  
		
			//Si hay un error con los permisos mostramos la alerta de ese error
			else if (!this.state.permisosAñadir) {
				return (
					
					<Alert variant="filled" severity="error">Su pod no tiene los permisos habilitados para esta aplicación</Alert>
		  
				);
			} 
			
			//Si no hay problemas avisamos de que todo ha ido bien
			else{
				return(
					<Alert variant="filled" severity="success">Amigo añadido  con exito</Alert>
				);
			}
			
			
			
			
		}
		
		//Si la última operación es de borrar
		if(this.state.estado==='borrar'){
			
			//Si hay un error con el usuario mostramos la alerta de ese error
			if (this.state.errorBorrar) {
		  
				return (
					<Alert variant="filled" severity="warning">El usuario que se intenta borrar  no es válido</Alert>
		  
				);
			}  
			//Si hay un error con los permisos mostramos la alerta de ese error
			else if (!this.state.permisosBorrar) {
				return (
					
					<Alert variant="filled" severity="error">Su pod no tiene los permisos habilitados para esta aplicación</Alert>
		  
				);
			} 
			
			//Si no hay problemas avisamos de que todo ha ido bien
			else{
				return(
					<Alert variant="filled" severity="success">Amigo borrado con exito</Alert>
				);
			}

			
		}

	  else { 
			//Si no ha ocurrido nada mostramos un mensaje informativo
			return(
				<Alert color="info" variant="outlined" severity="info">Escribe el enlace de pod de un amigo para borrarlo o añadirlo</Alert>
			);
			
		
	  
	  }
   
  }

    render() {
		
		 	 
        return (
            <div className="AddFriend">
				
                <h1> Gestionar lista de amigos </h1>
				//Cada render del componente mostramos el mensaje que toque
				{this.renderAlert()}


				//Formulario donde escribimos el WebId del usuario a añadir o borrar
				<form class="friend">
                    <label for="adminForm" class="labelUser">URL:</label>
                    <input class="adminForm" type="text" name="nombre" size="40" 
                    onChange={this.changeUrl.bind(this)} value={this.state.friendWebId}
                    placeholder="WebID/URL" required="true"></input>

					<br></br> 
					<p>Ejemplo solidcommunity: <i>https://usuario.solidcommunity.net<b>/</b></i></p>
					<p>Ejemplo inrupt: <i>https://usuario.inrupt.net<b>/</b></i></p>
					
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