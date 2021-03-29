import React from "react";


import Map from "./Map";

import {addUserLocalization} from '../../api/api'
//import { store } from 'react-notifications-component';

class GuardarLocalizacion extends React.Component {

        

        async submitLoc() {
		
                let response = await addUserLocalization(this.props.userWebID, this.props.lat, this.props.lon)
					console.log(response)
               
        }

		async componentDidMount() {
			
			
			this.submitLoc()
			
		}
        

        render() {               
                return (
                        <div>
							<Map amigos={this.props.amigos} lat={this.props.lat} lon={this.props.lon} />
                        </div>

                )
        }



}

export default GuardarLocalizacion