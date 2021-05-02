import React from "react";

import Contenedor from "../components/Contenedor";

import "react-notifications-component/dist/theme.css";

import "./Ayuda.css";

import MenuImg from "./img/menuDrawerIniciarSesion.PNG";
import MenuLOImg from "./img/MenuDrawerLogOut.PNG";
import MenuLIImg from "./img/MenuDrawerLogIn.PNG";
import NavInicio from "./img/navIniciarSesión.PNG";
import HomeImg from "./img/HomeNotLoged.PNG";
import HomeImgLI from "./img/HomeLoged.PNG";
import NavHome from "./img/navHome.png";
import PopUpImg from "./img/IniciarSesionPopUp.PNG";
import LogInForm from "./img/FormIniciarSesión.PNG";
import Area from "./img/AreaVis.PNG";
import FormAmigos from "./img/AgregarAmigosForm.PNG";
import PrefPODImg from "./img/PODSolidPreferences.png";
import RoutesPOD from "./img/RutasSolidPod.PNG";
import AddFriend from "./img/AñadirAmigo.PNG";


function Ayuda() {
  return (
    <div>
      <Contenedor/>
      <h1 class="title">Ayuda</h1>

      <body className="App-body">

        <h2 class= "subtitle">Navegar por la aplicación sin estar identificado</h2>

        <p class="parrafo">
          Desde la página principal podemos acceder al menu lateral:
        </p>
        <div class="imgDiv">
            <img alt= "imgHome" class="imgHome" src={HomeImg}></img>
        </div>
        <p class="parrafo">
          El menú lateral en este punto, nos ofrece estás distintas opciones:
        </p>
        <div>
          <table class="table">
            <tr>
              <td><img alt="imgMenu" src={MenuLOImg}></img></td>
              <td>
                <ul class ="tablaValores">
                  <li><b>Inicio: </b>vuelve a la página principal desde cualquier punto.</li>
                  <li><b>Iniciar Sesión: </b>inicia sesión en la aplicación.</li>
                  <li><b>Administrador: </b>inicia sesión como administrador en la aplicación.</li>
                  <li><b>Ayuda: </b>accede a la ayuda en linea.</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <p class="parrafo">
          Puedes acceder en cualquier momento y desde cualquier parte de la aplicación al menu principal pulsando encima de Radarin:
        </p>
        <div>
            <img alt="imgNavHome" class="imgHome" src={NavHome}></img>
        </div>

        <h2 class= "subtitle">Iniciar Sesión</h2>

          <p class="parrafo">
          Para iniciar sesión necesitas contar con unas credenciales de Solid (<a href="https://solidproject.org">Link para acceder a SolidPoject.org)</a>
          Una vez Tienes tu Pod de Solid ya puedes iniciar sesión en la aplicación, bien desde el menú lateral:
          </p>
          <div class="imgDiv">
            <img alt="MenuImgDiv" src={MenuImg}></img>
          </div>
          <p class="parrafo">
          Tambien puedes encontrar el botón de inicio de sesión en la parte derecha de la barra de navegación superior:
          </p>
          <div class="imgDiv">
            <img alt="imgNavInicio" class="imgNav" src={NavInicio}></img>
          </div>
          <p class="parrafo">
          Una vez pulsamos el boton veremos en pantalla la siguiente ventana emergente:
          </p>
          <div class="imgDiv">
            <img alt="imgPopUpImg" class="imgNav" src={PopUpImg}></img>
          </div>
          <p class="parrafo">
          Clicamos en una de las opciones e introducimos nuestras credenciales:
          </p>
          <div class="imgDiv">
            <img alt="imgLogInForm" class="imgNav" src={LogInForm}></img>
          </div>

        <h2 class= "subtitle">Navegar por la aplicación estando identificado</h2>

        <p class="parrafo">
          El menú lateral en este punto, nos ofrece estás distintas opciones:
        </p>
        <div>
          <table class="table">
            <tr>
              <td><img alt="imgMenuLIImg" src={MenuLIImg}></img></td>
              <td>
                <ul class ="tablaValores">
                  <li><b>Inicio: </b>vuelve a la página principal desde cualquier punto.</li>
                  <li><b>Lista de Amigos: </b>consulta tu lista de amigos.</li>
                  <li><b>Consultar Localización: </b>accede a la funcionalidad principal de la aplicación.</li>
                  <li><b>Ayuda: </b>accede a la ayuda en linea.</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>

        <h2 class= "subtitle">Usar la Aplicación</h2>
        <p class="parrafo">
        Una vez hemos accedido a la aplicación nos encontraremos en la pantaña de inicio:
        </p>
        <div class="imgDiv">
            <img alt="imgHomeImgLI" class="imgHome" src={HomeImgLI}></img>
        </div>

        <p class="parrafo">
        Si pulsamos el botón "Comenzar" accederemos directamente a la aplicación.
        </p>
        <p class="parrafo">
        Para empezar debemos introducir el radio de búsqueda del mapa, y este nos mostrará todos nuestros contactos dentro de dicho rádio:
        </p>
        <div class="imgDiv">
            <img alt="imgArea" class="imgArea" src={Area}></img>
          </div>

        <h2 class= "subtitle">Añadir o Borrar amigos</h2>
        <p class="parrafo">
          Se puede ampliar o reducir tu número de amigos desde la página "Lista de Amigos" a traves del formulario de la parte superior de esta:
          <div class="imgDiv">
                <img alt="imgFormAmigos" class="imgFormAmigos"src={FormAmigos}></img>
            </div>
        </p>
        <p class="parrafo">
          Antes de poder añadir amigos debes configurar tu Solid POD para que acepte las solicitudes de cambios de la aplicación:
          <ul>
            <li>
              Accede a tu SolidPod al menú de preferencias:<br></br>
              <div class="imgDiv">
                <img alt="imgPrefPod" src={PrefPODImg}></img>
              </div>
            </li>
            <li>
              Intruduce la URL de la aplicación, dale permisos de "Read", "Write" y "Append", y presiona "Add".
              <div class="imgDiv">
                <img alt="imgRoutesPod" src={RoutesPOD}></img>
              </div>
            </li>
            <li>
              <p>
              Dirigete de nuevo a la ventana de "Lista de Amigos" y copia la URL del POD de tu amigo.
              </p>
              <b>Importante añadir / al final.</b>
              <p>
                Presiona agregar para añadir a tu amigo a la lista, o borrar, para eliminarlo:
              </p>
            <div class="imgDiv">
                <img class="imgFormAmigos" alt="addFriendImg" src={AddFriend}></img>
              </div>
            </li>
          </ul>
        </p>

        <h2 class= "subtitle">Documentación</h2>
        <p class="parrafo">
        Puedes acceder a la documentación de nuestro proyecto en GitHub clicando este enlace: <a href="https://github.com/Arquisoft/radarin_es3b">Link al repositorio del proyecto</a>
        </p>
       

      </body>
    </div>
  );
}


export default Ayuda;