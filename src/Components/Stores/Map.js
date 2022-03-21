import React from "react";
import L from "leaflet";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ContainerMap } from "./Map.styled";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const Map = ({ paginetedData }) => {
  return (
    <ContainerMap center={[-23.568767, -46.649907]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {paginetedData?.map(({ latitude, longitude, name }) => (
        <Marker key={name} position={[latitude, longitude]}>
          <Popup>{name}</Popup>
          {console.log(name)}
        </Marker>
      ))}
    </ContainerMap>
  );
};

export default Map;
