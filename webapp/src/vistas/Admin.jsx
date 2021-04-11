import React from "react";

import Contenedor from "../components/Contenedor";

import "./Home.css";

import "../components/solid/FriendsList";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import CleanDatabase from "../components/database/CleanDatabase";
import AdminForm from "../components/AdminForm";


function Admin() {
  return (
    <div className="Admin">
      <ReactNotification />
      <Contenedor />
      <body className="App-body">
        <h1>Administrador</h1>

        <AdminForm />

      </body>
    </div>
  );
}


export default Admin;