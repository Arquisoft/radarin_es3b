import React from "react";

import Map from "./Map";

//import {addUserLocalization} from '../../api/api'

class GuardarLocalizacion extends React.Component{

   
		
		
		
    
        render() {

           return (
				
			
				<Map lat={this.props.lat} lon={this.props.lon}/>   
              
          )
        }
      


}

export default GuardarLocalizacion