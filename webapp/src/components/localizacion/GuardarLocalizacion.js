import React from "react";
import { geolocated } from "react-geolocated";
import Map from "./Map";

import {addUserLocalization} from '../../api/api'

class GuardarLocalizacion extends React.Component{

    constructor(props) {
    super(props);
	
	}
		
		
		
    
        render() {

           return (
				
			
				<Map lat={this.props.lat} lon={this.props.lon}/>   
              
          )
        }
      


}

export default GuardarLocalizacion