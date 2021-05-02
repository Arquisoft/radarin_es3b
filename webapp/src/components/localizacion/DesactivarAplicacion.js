import React from "react";
import { deleteUserLocalization } from "../../api/api";

class DesactivarAplicacion extends React.Component {


    async deleteLoc() {
		//Borramos la localización del usuario
        await deleteUserLocalization(this.props.userWebID);
        

    }


    render() {
        this.deleteLoc();
        return <div>La aplicacion está apagada</div>;
    }



}

export default DesactivarAplicacion;

