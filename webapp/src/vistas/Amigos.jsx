import React from "react";
import Contenedor from "../components/Contenedor";

import FriendListHook from "../hooks/FriendListHook";

function Amigos() {
  return (
    
    <div className="Amigos">
      <Contenedor/>
      <body className ="Vista-body">
          <h1>Amigos</h1>
            <div>
                <FriendListHook/>
            </div>
      </body>
    </div>
  );
}


export default Amigos;
