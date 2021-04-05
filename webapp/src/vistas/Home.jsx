import React from "react";

import Contenedor from "../components/Contenedor";

import "./Home.css";
import {  LoggedIn, Value } from "@solid/react";

import  "../components/solid/FriendsList";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import CleanDatabase from "../components/database/CleanDatabase";


function Home() {
  return (
    <div className="Home">
      <ReactNotification />
      <Contenedor/>
      <body className ="App-body">

		<LoggedIn>
		<CleanDatabase/>
		<p>welcome back, <Value src="user.name"/></p>
        
      </LoggedIn>
      <div className="Home-text">
        <table className="Home-table">
          <tr>
            <td className="Home-col">
              Radarin es blablabla Ut sodales laoreet est quis finibus.
              Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, 
              id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit 
              erat sed nulla vulputate, nec condimentum lacus dapibus. 
              In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. 
              Fusce commodo neque quis augue iaculis fermentum.
            </td>
            <td className="Home-col">
              Radarin ofrece blablabla Ut sodales laoreet est quis finibus.
              Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, 
              id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit 
              erat sed nulla vulputate, nec condimentum lacus dapibus. 
              In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. 
              Fusce commodo neque quis augue 
            </td>
          </tr>
          <tr>
            <td className="Home-col">
              Radarin es blablabla Ut sodales laoreet est quis finibus.
              Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, 
              id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit 
              erat sed nulla vulputate, nec condimentum lacus dapibus. 
              In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. 
              Fusce commodo neque quis augue iaculis fermentum.
            </td>
            <td className="Home-col">
              Radarin ofrece blablabla Ut sodales laoreet est quis finibus.
              Proin luctus, leo vel ultrices porta, nisi ante sagittis metus, 
              id eleifend orci enim nec metus. Donec nec placerat ex. Phasellus blandit 
              erat sed nulla vulputate, nec condimentum lacus dapibus. 
              In aliquet sapien eget sodales vulputate. Fusce quis nisl diam. 
              Fusce commodo neque quis augue 
            </td>
          </tr>
        </table>
      </div>
    </body>
    </div>
  );
}


export default Home;