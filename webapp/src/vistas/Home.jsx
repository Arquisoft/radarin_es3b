import React from "react";

import Contenedor from "../components/Contenedor";

import "./Home.css";
import "./img/solid.PNG";
import {  LoggedIn, LoggedOut, Value } from "@solid/react";

import  "../components/solid/FriendsList";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import GitHubImg from "./img/github.png";
import SolidImg from "./img/solid.PNG";
import MapImg from "./img/mapa.jpg";
import ProcessSession from "../hooks/ProcessSession"


function Home() {
  return (
    <div className="Home">
	  
      <ReactNotification />
      <Contenedor/>
     <body className ="App-body">
	<ProcessSession/>
	
    <LoggedOut>
	
    <div class="slider">
      <ul>
        <li><img src={MapImg} alt="mapImg"></img></li>
        <li><img src={SolidImg} alt="solidImg"></img></li>
        <li><img src={GitHubImg} alt="githubImg"></img></li>
      </ul>
    </div>
    <div class="slider">
      <ul>
        <li><h1>Inicia Sesión en Radarin. ¡Encuentra a tus amigos cercanos y queda con ellos! </h1></li>
        <li><h1>Infórmate sobre el Solid Project y todo lo que puede ofrecerte: </h1><a class="enlace" href="https://solidproject.org" >Solid Project</a></li>
        <li><h1>Encuentra nuestro proyecto en GitHub pinchando aquí:</h1><a class="enlace" href="https://github.com/Arquisoft/radarin_es3b" >Llévame a GitHub</a></li>
      </ul>
    </div>
    </LoggedOut>

		<LoggedIn>
		
		<b class="Bienvenida">Bienvenido a Radarin <Value src="user.name"/></b>
    <p class="Bienvenida">¿Qué te apetece hacer?</p>
        
      
      <div>
        <img src={MapImg} alt="mapImg"/>
      </div>
      </LoggedIn>
    </body>
    </div>
  );
}


export default Home;