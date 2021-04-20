import React from "react"; 
import Button from "@material-ui/core/Button";
import CleanDatabase from "../components/database/CleanDatabase"; 
import "../vistas/Admin.css";


class AdminForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            entra: false,
            usuario: "admin",
            password: "admin",
            userToDelete: ""
        };
    }

    async handleSubmit(e) {
        //console.log(this.state.entra);
        e.preventDefault();
        if (this.state.user === this.state.usuario && this.state.psw === this.state.password){
            this.setState({entra: true});
            console.log(this.state.entra);
        }
        //console.log(this.state.entra);
      }

    changeUser(e) {
        const user = e.target.value;
        this.setState({ user: user });
    }

    changeUserToDelete(e) {
        const userToDelete = e.target.value;
        this.setState({ userToDelete: userToDelete });
    }

    changePsw(e) {
        const psw = e.target.value;
        this.setState({ psw: psw });
    }


    renderLogin = () => {
        
        if (this.state.entra)
            return <CleanDatabase />;
        return ( 
                <form class="login"  onSubmit={this.handleSubmit.bind(this)}>
                    <p class="labelUser">Usuario:<input class="adminForm" type="text" name="nombre" size="40" 
                    onChange={this.changeUser.bind(this)} value={this.state.user} 
                    placeholder="Introduzca el usuario administrador" required="true"></input></p>

                    <p  class="labelPass">Contraseña: <input class="passForm" type="password" name="pass" size="40" 
                    onChange={this.changePsw.bind(this)} value={this.state.psw} 
                    placeholder="Introduzca su contraseña" required="true"></input></p>
                    <Button id="boton"variant="contained" color="primary" type="submit" >
                        Entrar
                    </Button>
                </form>       
            );
    }

    render() {
        return (
            <div>{this.renderLogin()}</div>
            
        );
    }
}

export default AdminForm;