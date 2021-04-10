import React from 'react';
import Form from "react-bootstrap/Form";
import Button from '@material-ui/core/Button';

class AdminForm extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            entra: false,
            usuario: "admin",
            password: "admin"

        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        //Renderizar vista de administrador
        
      }

    changeUser(e) {
        const user = e.target.value;
        this.setState({ user: user })
    }

    changePsw(e) {
        const psw = e.target.value;
        this.setState({ psw: psw });
    }


    renderLogin = () => {

    }

    render() {
        return (
            <div>
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

            </Form></div>
        )
    }
}

export default AdminForm