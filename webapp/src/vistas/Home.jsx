import React from "react";

import Contenedor from "../components/Contenedor";

import "./Home.css";
import "./img/solid.PNG";
import {  LoggedIn, LoggedOut, Value } from "@solid/react"; 
import { Link } from 'react-router-dom';

import  "../components/solid/FriendsList";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import GitHubImg from "./img/github.png";
import SolidImg from "./img/solid.PNG";
import MapImg from "./img/mapa.jpg";
import ProcessSession from "../hooks/ProcessSession"
import LogIn from "../hooks/solid/LogIn"


function Home() {
  return (
    <div className="Home">
		
	  
      <ReactNotification />
      <Contenedor/>
      
     <body className ="App-body">
	<ProcessSession/>
	
   
   <LogIn/>
  <LoggedIn>
		
		<b class="Bienvenida">Bienvenido a Radarin <Value src="user.name"/></b>
    <br></br><br></br>
    <Link class="link" to="/Mapa">Comenzar</Link>
    
    </LoggedIn>
	
    <div class="slider">
      <ul>
        <li><img src={MapImg} alt="mapImg"></img></li>
        <li><img src={SolidImg} alt="solidImg"></img></li>
        <li><img src={GitHubImg} alt="githubImg"></img></li>
      </ul>
    </div>
    <div class="slider">
      <ul>
        <li>
          <LoggedOut>
		  
		  
          <h2>Inicia Sesión en Radarin. ¡Encuentra a tus amigos cercanos y queda con ellos! </h2>
          </LoggedOut>
          <LoggedIn>
            <h2>¿A qué estás esperando para encontrar a tus amigos? ¡Pulsa el botón para comenzar! </h2>
          </LoggedIn>
        </li>
        <li><h2>Infórmate sobre el Solid Project y todo lo que puede ofrecerte: </h2><a class="enlace" href="https://solidproject.org" >Solid Project</a></li>
        <li><h2>Encuentra nuestro proyecto en GitHub pinchando aquí:</h2><a class="enlace" href="https://github.com/Arquisoft/radarin_es3b" >Llévame a GitHub</a></li>
      </ul>
    </div>
    </body>
    </div>
  );
}


export default Home;