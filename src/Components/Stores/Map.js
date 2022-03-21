import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// "latitude": -23.568767,
// "longitude": -46.649907,

const Map = () => {
  return (
    <MapContainer
      center={[-23.568767, -46.649907]}
      zoom={13}
      style={{ height: "384.8px", width: "622px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
