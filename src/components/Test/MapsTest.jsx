/* jshint esversion:6 */
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    /* jshint ignore: start */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBs4Icy6WhjZ73-pqjPLKsq0p8I06AsCII&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
    /* jshint ignore: end */
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  /* jshint ignore: start */
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
  /* jshint ignore: end */
));

export default MyMapComponent;