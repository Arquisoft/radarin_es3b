import React from "react";

import Button from '@material-ui/core/Button';
import Map from "./Map";

import {addUserLocalization} from '../../api/api'

class GuardarLocalizacion extends React.Component {

        constructor(props) {
                super(props);

                this.state = {};
        }

        async submitLoc() {
                let response = await addUserLocalization(this.props.userWebID, this.props.lat, this.props.lon)
                console.log(response)
        }

        async handleSubmit(e) {
                e.preventDefault()
                //Add the user to the database
                this.submitLoc()
        }


        render() {
                
       
                return (
                        <div>
                                <Button variant="contained" color="secondary" onClick={this.handleSubmit.bind(this)} >
                                        Guardar Localización
                                </Button>
                        
                        


                        <Map lat={this.props.lat} lon={this.props.lon} />
                        </div>

                )
        }



}

export default GuardarLocalizacion