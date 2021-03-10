import React from 'react';
import Form from "react-bootstrap/Form";
import Button from '@material-ui/core/Button';
import {addUserLocalization} from '../api/api'

class PruebaLoc extends React.Component{
	
	
  constructor(props) {
    super(props);
	this.state = {}
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
      let response = await addUserLocalization("prueba",this.state.lat,this.state.lon)
      console.log(response)

    
  }


  async handleSubmit(e) {
    e.preventDefault()
    //Add the user to the database
    if (this.state.lat && this.state.lon){
      this.submitLoc()
    }
    
  }

  render(){
    return(
          <Form name="localizacion" onSubmit={this.handleSubmit.bind(this)}>
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
              Update localizacion de prueba
            </Button>
            
          </Form>
    )
  }
}

export default PruebaLoc