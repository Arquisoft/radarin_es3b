import React from "react";
import { deleteUserLocalization } from "../../api/api";

class DesactivarAplicacion extends React.Component {


    async deleteLoc() {

        let response = await deleteUserLocalization(this.props.userWebID);
        //console.log(response);

    }


    render() {
        { this.deleteLoc() };
        return <div>La aplicacion está apagada</div>;
    }



}

export default DesactivarAplicacion;

