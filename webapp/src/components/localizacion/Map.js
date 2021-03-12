import * as React from 'react';
import {Component} from 'react';

import MapGL from 'react-map-gl';
import MapMarker from './MapMarker';
//import {StaticMap} from 'react-map-gl';

import mapboxgl from 'mapbox-gl';
import {getUserLocalization} from '../../api/api'
const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg'; // Set your mapbox token here


// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

class Map extends Component {
  constructor(props) {
    super(props);
	
    this.state = {
		response:"error",
	
		viewport: {
		
        latitude: parseFloat(this.props.lat),
        longitude: parseFloat(this.props.lon),
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }
  
  async componentDidMount() {
		let response=await getUserLocalization("prueba"); 
		console.log(response);
        this.setState({ response: response });
		
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        width="50vw"
        height="50vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
	 
	   {this.state.response!=="error" ?
           <MapMarker nombre={this.state.response.user} longitude={parseFloat(this.state.response.longitude)} latitude={parseFloat(this.state.response.latitude)} />:
           null
        }
	  
	  
	 <MapMarker nombre="Mi posicion" longitude={parseFloat(this.props.lon)} latitude={parseFloat(this.props.lat)} />
	  </MapGL>
    );
  }
}

export default Map;

