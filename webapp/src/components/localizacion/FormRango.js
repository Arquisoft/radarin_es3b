import React from 'react';
import Form from "react-bootstrap/Form";
import Button from '@material-ui/core/Button';
import GuardarLocalizacion from './GuardarLocalizacion';

class FormRango extends React.Component{
	
	
  constructor(props) {
    super(props);
    this.state = {
      rango : 0.500
    }
  }

  async changeRango(e){
      const rango = e.target.value;
      this.setState({rango: rango})
  }

  render(){
    return(

          <div>
            <div id = "mapa"><GuardarLocalizacion amigos={this.props.amigos} lat={this.props.lat} lon={this.props.lon} rango={this.state.rango/113}/> </div>
            
              
            <Form name="rango amigos">
            
              <div class="formMap" >
                    <Form.Group >
                
                      <Form.Label>Rango: </Form.Label>
                      <Form.Control name="rango" type="double" placeholder="Introduzca rango " onChange={this.changeRango.bind(this)} value={this.state.rango}/>
                      
                    </Form.Group>
              </div>
            
          </Form>
          </div>

          
    )
  }
}

export default FormRango