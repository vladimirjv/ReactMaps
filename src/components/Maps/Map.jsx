/* jshint esversion: 6 */
import React, { Component } from 'react';
import MapContainer from "./MapContainer";

export class Map extends Component {
  render() {
    return (
        /*jshint ignore:start */
            <MapContainer
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: this.props.height }} />}
                mapElement={<div style={{ height: `100%` }} />}
            >
            </MapContainer>
      /*jshint ignore:end */
    );
  }
}

export default Map;
