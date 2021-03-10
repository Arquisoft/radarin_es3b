import React from 'react';



class PruebaLogin extends React.Component{
	
	constructor(props) {
    super(props);
    this.state = {login: false, info: false, loged: false}
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(login, info, loged) {
    this.setState({ login, info, loged});
  }
	
	render(){
		return (
		<div hidden={this.state.loged ?  true : false} className= "loginAndRegister">
				<div hidden={this.state.login ?  true : false} className= "login">
				  <h2>LOGIN</h2>
				  <lablel>Nombre de usuario:</lablel>
				  <br/>
				  <input type="text"></input>
				  <br/>
				  <lablel>Contraseña:</lablel>
				  <br/>
				  <input type="password"></input>
				  <br/>
				  <br/>
				  <button>Iniciar Sesión</button>
				  <button onClick={() => this.handleChange(true, this.state.info)}>Registrarse</button>
				</div>

				<div hidden={this.state.login ?  false : true} className= "login">
				  <h2>REGISTER</h2>
				  <lablel>Nombre de usuario:</lablel>
				  <br/>
				  <input type="text"></input>
				  <br/>
				  <lablel>Web ID: </lablel>
				  <div hidden={this.state.info ?  true : false} className= "info">
					<button onClick={() => this.handleChange(this.state.login, true)}>¿Qué es esto?</button>
				  </div>
				  <div hidden={this.state.info ?  false : true} className= "info">
					<p>Es el identificador de cada pod de SOLID.
						<br/>
						Es necesario disponer de un pod para poder crear una cuenta en radarin.
					</p>
					<button onClick={() => this.handleChange(this.state.login, false)}>Cerrar</button>
				  </div>
				  <input type="text"></input>
				  <br/>
				  <lablel>Contraseña:</lablel>
				  <br/>
				  <input type="password"></input>
				  <br/>
				  <lablel>Repetir contraseña:</lablel>
				  <br/>
				  <input type="password"></input>
				  <br/>
				  <br/>
				  <button>Registrarse</button>
				  <button onClick={() => this.handleChange(false, this.state.info)}>Ya tengo cuenta</button>
				</div>
			  </div>
		)
	}
		  
}

export default PruebaLogin