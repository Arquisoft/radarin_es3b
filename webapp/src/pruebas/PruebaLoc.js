import React from 'react';
import Form from "react-bootstrap/Form";
import Button from '@material-ui/core/Button';
import {addUserLocalization,deleteUserLocalization } from '../api/api'

class PruebaLoc extends React.Component{
	
	
  constructor(props) {
    super(props);
	this.state = {}
  }

  changeName(e){
      const name = e.target.value;
      this.setState({name: name})
  }
  
  changeDeleteName(e){
      const nameDelete = e.target.value;
      this.setState({nameDelete: nameDelete})
  }

  changeLat(e) {
    const lat = e.target.value ;
    this.setState({lat: lat});
  }

  changeLon(e) {
    const lon = e.target.value ;
    this.setState({lon: lon});
  }

  async submitLoc(){
      let response = await addUserLocalization(this.state.name,this.state.lat,this.state.lon)
      console.log(response)

    
  }


  async handleSubmit(e) {
    e.preventDefault()
    //Add the user to the database
    if (this.state.name && this.state.lat && this.state.lon){
      this.submitLoc()
    }
    
  }
  
  
  
  async deleteLoc(e){
	  e.preventDefault()
	  if (this.state.nameDelete){
		 let response = await deleteUserLocalization(this.state.nameDelete)
		console.log(response)
	  }
	  
  }
  
  

  render(){
    return(
		<div>
          <Form name="localizacion" onSubmit={this.handleSubmit.bind(this)}>
			<div class="formMap" >
            <Form.Group >
				
              <Form.Label>Nombre: </Form.Label>
              <Form.Control name="nombre" type="string" placeholder="Introduzca nombre " onChange={this.changeName.bind(this)} value={this.state.name}/>
              
            </Form.Group>
			</div>
      <div class="formMap" >
            <Form.Group >
				
              <Form.Label>Latitud de prueba: </Form.Label>
              <Form.Control name="longitud" type="string" placeholder="Introduzca latitud " onChange={this.changeLat.bind(this)} value={this.state.lat}/>
              
            </Form.Group>
			</div>
			<div class="formMap" >
            <Form.Group class="formMap">
              <Form.Label>Longitud de prueba: </Form.Label>
              <Form.Control name="longitud" type="double" placeholder="Introduzca longitud" onChange={this.changeLon.bind(this)} value={this.state.lon} />
            </Form.Group>
			</div>
            <Button variant="contained" color="secondary" type="submit" >
              Update localizacion de amigo
            </Button>
            
          </Form>
		  
		  <Form name="borrarLocalizacion" onSubmit={this.deleteLoc.bind(this)}>
			<div class="formMap" >
            <Form.Group >
				
              <Form.Label>Nombre: </Form.Label>
              <Form.Control name="nombre" type="string" placeholder="Introduzca nombre " onChange={this.changeDeleteName.bind(this)} value={this.state.nameDelete}/>
              
            </Form.Group>
			</div>
           
            <Button variant="contained" color="secondary" type="submit" >
              Borrar localizacion de amigo
            </Button>
          
          </Form>
		 </div>
    )
  }
}

export default PruebaLoc