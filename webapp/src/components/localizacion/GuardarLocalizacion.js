import React from "react";

import GenerateResponses from "./GenerateResponses";

import { addUserLocalization } from "../../api/api";
//import { store } from 'react-notifications-component';

class GuardarLocalizacion extends React.Component {



        async submitLoc() {
                
                await addUserLocalization(this.props.userWebID, this.props.lat, this.props.lon);
                //let response = await addUserLocalization(this.props.userWebID, this.props.lat, this.props.lon);

        }

        async componentDidMount() {

                this.submitLoc();
        }

        async componentDidUpdate() {
                console.log(this.props.rango);
                this.submitLoc();
        }

        render() {
                return (
                        <div>
                                <GenerateResponses amigos={this.props.amigos} lat={this.props.lat} lon={this.props.lon} rango={this.props.rango}/>
                        </div>

                );
        }



}

export default GuardarLocalizacion;