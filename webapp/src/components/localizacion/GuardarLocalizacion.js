import React from "react";

import Button from '@material-ui/core/Button';
import Map from "./Map";

import {addUserLocalization} from '../../api/api'
import { store } from 'react-notifications-component';

class GuardarLocalizacion extends React.Component {

        

        async submitLoc() {
                let response = await addUserLocalization(this.props.userWebID, this.props.lat, this.props.lon)
                console.log(response)
        }

        async handleSubmit(e) {
                e.preventDefault()
                //Add the user to the database
                this.submitLoc()
                store.addNotification({
                        title: "Localización guardada!",
                        message: "ejemplo de notificación",
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                          duration: 5000,
                          onScreen: true
                        }
                      });
        }

        render() {               
                return (
                        <div>
                                <Button variant="contained" color="secondary" onClick={this.handleSubmit.bind(this)} >
                                        Guardar Localización
                                </Button>
                        
                        


                        <Map amigos={this.props.amigos} lat={this.props.lat} lon={this.props.lon} />
                        </div>

                )
        }



}

export default GuardarLocalizacion