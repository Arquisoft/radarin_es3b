import React from "react";
import Contenedor from "../components/Contenedor";
import "./Amigos.css";
import FriendListHook from "../hooks/FriendListHook";
import { LoggedIn, LoggedOut } from "@solid/react";
import Desconectar from "../components/Desconectar";

function Amigos() {
  return (
    
    <div className="Amigos">
      <Contenedor/>
      <body className ="Vista-body">
        <LoggedIn>
          <h1>Amigos agregados</h1>
            <div class="listaAmigos">
                <FriendListHook/>
            </div>
        </LoggedIn>
        <LoggedOut>
          <Desconectar/>
        </LoggedOut>
      </body>
    </div>
  );
}


export default Amigos;
