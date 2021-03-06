import * as React from "react";
import { Component } from "react";

import MapGL from "react-map-gl";
import MapMarker from "./MapMarker";
import "../../vistas/mapa.css";
import FriendMarker from "../../hooks/markers/FriendMarker";
//import {StaticMap} from 'react-map-gl';

//import * as mapboxgl from 'mapbox-gl';
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
mapboxgl.workerClass = MapboxWorker;


const MAPBOX_TOKEN = "pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg"; // Set your mapbox token here

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {

		max:10,
      viewport: {
		
        latitude: parseFloat(this.props.lat),
        longitude: parseFloat(this.props.lon),
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
	
	for(var element of this.props.responses.values() ){
		
		if(element.user.length>this.state.max){
			console.log(element.user.length)
			this.state.max=element.user.length;
		}
	}
	
  }

  /**
   * Este método es el responsable de generar los marcadores de los amigos en el mapa según el rango establecido en el formulario de entrada. 
   * Tanto el rango como la lista de amigos son recibidos como props de su componente padre.
   * @returns MapMarker correspondiente
   */
  renderMarkers = () => {
  
    return (Array.from(this.props.responses.values())).map((item) => {
	
		
      if (Math.sqrt((item.longitude - this.props.lon) * (item.longitude - this.props.lon) + (item.latitude - this.props.lat) * (item.latitude - this.props.lat)) < this.props.rango) {
        return (
          <MapMarker  nombre={item.user} longitude={item.longitude} latitude={item.latitude} max={this.state.max} marker={<FriendMarker/>} >
          </MapMarker>
        );
      } else { // else block añadido para arreglar error de CI: Array.prototype.map() expects a value to be returned at the end of arrow function  array-callback-return
        return null;
      }
    });
  }

  /**
   * Se encarga del renderizado del mapa, desde este método se llama a renderMarkers para que pinte los marcadores.
   * @returns mapa renderizado
   */
  render() {
    return (
	<div class = "mapa">
      <MapGL 
        {...this.state.viewport}
        width="94vw"
        height="70vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >

        {this.renderMarkers()}


        <MapMarker  nombre="MiPosición" longitude={parseFloat(this.props.lon)} latitude={parseFloat(this.props.lat)} max={this.state.max} marker={<FriendMarker/>}  />
      </MapGL>
	  </div>
    );
  }
}

export default Map;

