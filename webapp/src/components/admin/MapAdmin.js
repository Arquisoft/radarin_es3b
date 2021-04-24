import * as React from "react";
import { Component } from "react";



import "../../vistas/mapa.css";
import MapGL from "react-map-gl";
import AdminMarker from "../../hooks/markers/AdminMarker";

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


      viewport: {

        latitude: 0,
        longitude: 0,
        zoom: 0,
        bearing: 0,
        pitch: 0
      }
    };
  }

  renderMarkers = () => {
    console.log(this.props.rango);
    return this.props.responses.map((item) => {
	
		console.log(item)
      
        return (
          <AdminMarker nombre={item.user} longitude={item.longitude} latitude={item.latitude} >
          </AdminMarker>
        );
     
    });
  }

  render() {
    return (
	<div class = "mapa">
      <MapGL 
        {...this.state.viewport}
        width="96vw"
        height="96vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >

        {this.renderMarkers()}


        
      </MapGL >
	  </div>
    );
  }
}

export default Map;

