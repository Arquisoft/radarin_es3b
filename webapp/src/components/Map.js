import * as React from 'react';
import {Component} from 'react';

//import MapGL from 'react-map-gl';
import MapMarker from './MapMarker';
import {StaticMap} from 'react-map-gl';

import mapboxgl from 'mapbox-gl';
const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2lrZWthaWsiLCJhIjoiY2tsenMzYXF0MTVkcDJxbHlvZGhhM2N6MyJ9.hg3CQqQ380aEm4XcjWLXJg'; // Set your mapbox token here


// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

class Map extends Component {
  constructor(props) {
    super(props);
	
	
    this.state = {
      viewport: {
        latitude: parseFloat(this.props.lat),
        longitude: parseFloat(this.props.lon),
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
      <StaticMap
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        //onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
	 <MapMarker longitude={parseFloat(this.props.lon)} latitude={parseFloat(this.props.lat)} />
	  </StaticMap>
    );
  }
}

export default Map;

