import React from "react";



import "./Home.css";
import "./Admin.css";

import "../components/solid/FriendsList";



import AdminForm from "../components/admin/AdminForm";


function Admin() {
  return (
    <div className="Admin">
      
      
      <body className="App-body">
        <h1>Administrador</h1>

        <AdminForm />

      </body>
    </div>
  );
}


export default Admin;