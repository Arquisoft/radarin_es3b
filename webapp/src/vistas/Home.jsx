import React from "react";

import Contenedor from "../components/Contenedor";

import "./Home.css";
import {  LoggedIn, Value } from "@solid/react";

import  "../components/solid/FriendsList";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import Portada from "../svg/portada.jpg";


function Home() {
  return (
    <div className="Home">
      <ReactNotification />
      <Contenedor/>
      <body className ="App-body">

		<LoggedIn>
		
		<p>Bienvenido a Radarín, está autenticado como:  <Value src="user.name"/></p>
        
      </LoggedIn>
      <div className="Home-text">
        <img src={Portada} alt="portada"/>
      </div>
    </body>
    </div>
  );
}


export default Home;