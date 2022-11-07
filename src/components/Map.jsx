import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: -13.41942,
    lng: -76.144655,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBLXo0-N48IF9-C6VyzEzhM1fqFg-Cxvr8">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
