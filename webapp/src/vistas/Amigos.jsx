import React from "react";
import Contenedor from "../components/Contenedor";
import "./Amigos.css";
import FriendListHook from "../hooks/FriendListHook";

function Amigos() {
  return (
    
    <div className="Amigos">
      <Contenedor/>
      <body className ="Vista-body">
          <h1>Amigos agregados</h1>
            <div class="listaAmigos">
                <FriendListHook/>
            </div>
      </body>
    </div>
  );
}


export default Amigos;
