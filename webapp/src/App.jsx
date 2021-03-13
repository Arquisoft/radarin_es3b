import React from 'react'
import './App.css'

import Contenedor from './components/Contenedor'
import ButtonToRender from './components/ButtonToRender'
import EncenderAplicacion from './components/localizacion/EncenderAplicacion'
import DesactivarAplicacion from './components/localizacion/DesactivarAplicacion'

import {  LoggedIn, LoggedOut, Value } from '@solid/react';


import './mapa.css'
import Login from './components/Login'
import FriendsList from './components/friends/FriendsList'

class App extends React.Component{

  

  
 
  render(){
    return(
      <div className="App">
      <Contenedor/>
      <body className ="App-body">
		  <LoggedOut>
			  <p>You are not logged in.</p>
			</LoggedOut>

      <Login/>

			<LoggedIn>
				<p>welcome back, <Value src="user.name"/></p>
      </LoggedIn>
      <p className ="sample">Radarin es blablabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dictum sem. Pellentesque vitae neque a urna facilisis congue eu sed odio. Nunc in elit pretium, sodales elit sit amet, congue lacus. Fusce lectus lacus, mattis eget urna sed, vestibulum posuere magna. Nulla neque quam, vulputate a sollicitudin a, convallis in velit. Nunc non diam metus. Integer eget sagittis augue. Fusce interdum dapibus sem at blandit. Sed a est sodales, varius metus vel, finibus felis. Praesent rhoncus consectetur nunc, at congue erat tempor eu. Morbi posuere mattis sem ac varius. Aenean at nisi pretium, finibus arcu id, dictum dui. Ut eu metus pulvinar, malesuada dui nec, vulputate diam. Donec aliquam odio id lorem blandit pharetra.
            Ut sodales laoreet est quis finibus. Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit erat sed nulla vulputate, nec condimentum lacus dapibus. In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. Fusce commodo neque quis augue iaculis fermentum.</p>
      <LoggedIn>
        <FriendsList userWebID="user"/>
        <p className="buttons">
          <ButtonToRender component={<EncenderAplicacion/>} component2={<DesactivarAplicacion/>}  buttonName="Encender Aplicación" deleteName="Apagar Aplicación" />
        </p>
			</LoggedIn>
      </body>
    </div>
    )
  }
}

export default App;