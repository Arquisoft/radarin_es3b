import React from 'react';
import Form from "react-bootstrap/Form";

import GuardarLocalizacion from './GuardarLocalizacion';

class FormRango extends React.Component{
	
	
  constructor(props) {
    super(props);
    this.state = {
      rango : 0.500
    };
  }

  async changeRango(e){
      const rango = e.target.value;
      this.setState({rango: rango});
  }

  render(){
    return(

          <div>
           
              
            
            
              <div class="formMap" >
                    <Form.Group >
                
                      <Form.Label>Area de visualización: </Form.Label>
                      <Form.Control name="rango" type="double" placeholder="Introduzca rango " onChange={this.changeRango.bind(this)} value={this.state.rango}/>
                      <Form.Label>  km de radio.</Form.Label>
                    </Form.Group>
              </div>
			  
			   <div ><GuardarLocalizacion userWebID={this.props.userWebID} amigos={this.props.amigos} lat={this.props.lat} lon={this.props.lon} rango={this.state.rango/113}/> </div>
            
            
          
          </div>

          
    );
  }
}

export default FormRango