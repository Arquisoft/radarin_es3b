import React from "react";



import GenerateResponses from "./GenerateResponses";

import {addUserLocalization} from '../../api/api'
//import { store } from 'react-notifications-component';

class GuardarLocalizacion extends React.Component {

        

        async submitLoc() {
				
		
                let response = await addUserLocalization(this.props.userWebID, this.props.lat, this.props.lon)
				
               
        }

		async componentDidMount() {
			
			this.submitLoc()
			
		}
        async componentDidUpdate(){
			this.submitLoc()
		}

        render() {               
                return (
                        <div>
							<GenerateResponses amigos={this.props.amigos} lat={this.props.lat} lon={this.props.lon} />
                        </div>

                )
        }



}

export default GuardarLocalizacion