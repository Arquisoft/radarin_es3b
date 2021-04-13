import React from "react";
import Contenedor from "../components/Contenedor";
import "./Amigos.css";
import FriendListHook from "../hooks/FriendListHook";

const useStyles = makeStyles(theme => ({

  listaAmigos: {
    textAlign: "left",
    marginLeft:theme.spacing(2),
    marginRight:theme.spacing(2),
    border: "2px solid #3F51B5",
  },

}))
function Amigos() {
  const classes = useStyles()

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
