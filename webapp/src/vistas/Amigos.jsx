import React from "react";
import Contenedor from "../components/Contenedor";

import CleanDatabase from "../components/database/CleanDatabase";

import FriendListHook from "../hooks/FriendListHook";

function Amigos() {
  return (
    
    <div className="Amigos">
      <Contenedor/>
      <body className ="Vista-body">
          <h1>Amigos</h1>
          
		        <CleanDatabase/>
            <div>
                <FriendListHook/>
            </div>
      </body>
    </div>
  );
}


export default Amigos;
