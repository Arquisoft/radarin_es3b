import React from "react";

import Button from '@material-ui/core/Button';
import Map from "./Map";

import {addUserLocalization} from '../../api/api'
import { store } from 'react-notifications-component';

class GuardarLocalizacion extends React.Component {

        

        async submitLoc() {
			console.log(this.props.userWebID)
                let response = await addUserLocalization(this.props.userWebID, this.props.lat, this.props.lon)
               
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