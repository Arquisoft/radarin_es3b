import React from 'react';
import Form from "react-bootstrap/Form";
import Button from '@material-ui/core/Button';
import CleanDatabase from "../components/database/CleanDatabase";


class AdminForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            entra: false,
            usuario: "admin",
            password: "admin",
            userToDelete: ""

        }
    }

    async handleSubmit(e) {
        console.log(this.state.entra);
        e.preventDefault()
        if (this.state.user === this.state.usuario && this.state.psw === this.state.password){
            this.setState({entra: true});
            console.log(this.state.entra);
        }
        console.log(this.state.entra);
      }

    changeUser(e) {
        const user = e.target.value;
        this.setState({ user: user })
    }

    changeUserToDelete(e) {
        const userToDelete = e.target.value;
        this.setState({ userToDelete: userToDelete })
    }

    changePsw(e) {
        const psw = e.target.value;
        this.setState({ psw: psw });
    }


    renderLogin = () => {
        if (this.state.entra)
            return <CleanDatabase />;
        return (<div>
            <Form name="admin" onSubmit={this.handleSubmit.bind(this)}>
                <div class="login" >
                    <Form.Group >

                        <Form.Label>Usuario: </Form.Label>
                        <Form.Control name="usuario" type="string" placeholder="Introduzca usuario " onChange={this.changeUser.bind(this)} value={this.state.user} />

                    </Form.Group>
                </div>

                <div class="login" >
                    <Form.Group >

                        <Form.Label>Password: </Form.Label>
                        <Form.Control name="password" type="string" placeholder="Introduzca password " onChange={this.changePsw.bind(this)} value={this.state.psw} />

                    </Form.Group>
                </div>
                <Button variant="contained" color="secondary" type="submit" >
                    Entrar
            </Button>

            </Form>
            </div>
            );
    }

    render() {
        return (
            <div>{this.renderLogin()}</div>
            
        )
    }
}

export default AdminForm