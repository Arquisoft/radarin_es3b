import React from "react";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import {Redirect } from 'react-router-dom';

import MapAdminImg from "./img/mapa-admin.jpg.png";

import Contenedor from "../components/Contenedor";
import AdminForm from "../components/admin/AdminForm";

import {  LoggedIn, LoggedOut } from "@solid/react";


import "./Home.css";
import "./Admin.css";

function Admin() {
  return (
    <div className="Admin">
	<ReactNotification />
      <Contenedor />
      <body className="App-body">
        <LoggedOut>
        <h1>Administrador</h1>
          <AdminForm />
          <div >
            <img class="imgAdmin" src={MapAdminImg}></img>
          </div>
        </LoggedOut>
        <LoggedIn>
          <Redirect
            from="/vistas/Admin"
            to="/vistas/Home" />
        </LoggedIn>
      </body>
    </div>
  );
}


export default Admin;