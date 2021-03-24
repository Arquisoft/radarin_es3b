import React from 'react'
import './App.css'

import Contenedor from './components/Contenedor'
import ButtonToRender from './components/ButtonToRender'
import EncenderAplicacion from './components/localizacion/EncenderAplicacion'
import DesactivarAplicacion from './components/localizacion/DesactivarAplicacion'

import {  LoggedIn, LoggedOut, Value, List } from '@solid/react';


import './mapa.css'
import Login from './components/Login'
import FriendsList from './components/friends/FriendsList'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

class App extends React.Component{

  
constructor (props){
    super(props);
    this.state = {
      amigos : ["Luis", "Lucía", "María", "Kike", "Antonio", "Diego", "Rocío"] 
    }
  }
  
 
  render(){
    return( 
      <div className="App">
      <ReactNotification />
      <Contenedor/>
      <body className ="App-body">
		  <LoggedOut>
			  <p>You are not logged in.</p>
			</LoggedOut>

      <Login/>

			<LoggedIn>
				<p>welcome back, <Value src="user.name"/></p>
        <h2>User's friends</h2>
        <List src="user.friends"/>
      </LoggedIn>
      <p className ="sample">Radarin es blablabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dictum sem. Pellentesque vitae neque a urna facilisis congue eu sed odio. Nunc in elit pretium, sodales elit sit amet, congue lacus. Fusce lectus lacus, mattis eget urna sed, vestibulum posuere magna. Nulla neque quam, vulputate a sollicitudin a, convallis in velit. Nunc non diam metus. Integer eget sagittis augue. Fusce interdum dapibus sem at blandit. Sed a est sodales, varius metus vel, finibus felis. Praesent rhoncus consectetur nunc, at congue erat tempor eu. Morbi posuere mattis sem ac varius. Aenean at nisi pretium, finibus arcu id, dictum dui. Ut eu metus pulvinar, malesuada dui nec, vulputate diam. Donec aliquam odio id lorem blandit pharetra.
            Ut sodales laoreet est quis finibus. Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit erat sed nulla vulputate, nec condimentum lacus dapibus. In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. Fusce commodo neque quis augue iaculis fermentum.</p>
      <LoggedIn>
        <p className="buttons">
          <ButtonToRender component={<EncenderAplicacion amigos={this.state.amigos} userWebID="user"/>} component2={<DesactivarAplicacion userWebID="user"/>}  buttonName="Encender Aplicación" deleteName="Apagar Aplicación" />
        </p>
			</LoggedIn>
      </body>
    </div>
    )
  }
}

export default App;