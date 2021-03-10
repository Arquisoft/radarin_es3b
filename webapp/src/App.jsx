import React from 'react';
import './App.css';

import Contenedor from './components/Contenedor';
import ButtonToRender from './components/ButtonToRender';
import Localization from './components/Localization'
import './mapa.css';

class App extends React.Component{

  constructor() {
    super();
    this.state = {login: false, info: false, loged: false}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(login, info, loged) {
    this.setState({ login, info, loged});
  }
 
  render(){
    return(
      <div className="App">
      <Contenedor/>
      <body className ="App-body">
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
          <p className ="sample">Radarin es blablabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dictum sem. Pellentesque vitae neque a urna facilisis congue eu sed odio. Nunc in elit pretium, sodales elit sit amet, congue lacus. Fusce lectus lacus, mattis eget urna sed, vestibulum posuere magna. Nulla neque quam, vulputate a sollicitudin a, convallis in velit. Nunc non diam metus. Integer eget sagittis augue. Fusce interdum dapibus sem at blandit. Sed a est sodales, varius metus vel, finibus felis. Praesent rhoncus consectetur nunc, at congue erat tempor eu. Morbi posuere mattis sem ac varius. Aenean at nisi pretium, finibus arcu id, dictum dui. Ut eu metus pulvinar, malesuada dui nec, vulputate diam. Donec aliquam odio id lorem blandit pharetra.
              Ut sodales laoreet est quis finibus. Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit erat sed nulla vulputate, nec condimentum lacus dapibus. In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. Fusce commodo neque quis augue iaculis fermentum.</p>
          <p className="buttons">
          <ButtonToRender component={<Localization/>} buttonName="Mostrar localización" deleteName="Ocultar localización" />
          </p>
      </body>
    </div>
    )
  }
}

export default App;