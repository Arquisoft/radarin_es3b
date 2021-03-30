import React from 'react'
import './App.css'

import Contenedor from './components/Contenedor'
import ButtonToRender from './components/ButtonToRender'
import ProcessOn from './hooks/ProcessOn'
import processOff from './hooks/ProcessOff'


import {  LoggedIn, LoggedOut, Value, List } from '@solid/react';


import './mapa.css'
import Login from './components/Login'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import CleanDatabase from './components/database/CleanDatabase'
import IntervalRerender from './components/IntervalRerender'




class App extends React.Component{

  

 
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
		
		<CleanDatabase/>
		<p>welcome back, <Value src="user.name"/></p>
        <h2>User's friends</h2>
        <div> <List src="user.friends"/></div>
      </LoggedIn>
      <p className ="sample">Radarin es blablabla Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dictum sem. Pellentesque vitae neque a urna facilisis congue eu sed odio. Nunc in elit pretium, sodales elit sit amet, congue lacus. Fusce lectus lacus, mattis eget urna sed, vestibulum posuere magna. Nulla neque quam, vulputate a sollicitudin a, convallis in velit. Nunc non diam metus. Integer eget sagittis augue. Fusce interdum dapibus sem at blandit. Sed a est sodales, varius metus vel, finibus felis. Praesent rhoncus consectetur nunc, at congue erat tempor eu. Morbi posuere mattis sem ac varius. Aenean at nisi pretium, finibus arcu id, dictum dui. Ut eu metus pulvinar, malesuada dui nec, vulputate diam. Donec aliquam odio id lorem blandit pharetra.
            Ut sodales laoreet est quis finibus. Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit erat sed nulla vulputate, nec condimentum lacus dapibus. In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. Fusce commodo neque quis augue iaculis fermentum.</p>
      <LoggedIn>
		
        <p className="buttons">
          <ButtonToRender component={<IntervalRerender component={<ProcessOn/>} time={2000} />} component2={<processOff/>}  buttonName="Encender Aplicación" deleteName="Apagar Aplicación" />
        </p>
			</LoggedIn>
      </body>
    </div>
    )
  }
}

export default App;