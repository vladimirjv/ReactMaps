/*jshint esversion:6 */
import React from 'react';
import { 
    withScriptjs, 
    withGoogleMap, 
    GoogleMap, 
    Marker 
} from 'react-google-maps';

const MapContainer = withScriptjs(
  withGoogleMap(props => (
    /*jshint ignore:start */
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
    /*jshint ignore:end */
  ))
);
export default MapContainer;