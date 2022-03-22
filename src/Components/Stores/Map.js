import React from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ContainerMap } from "./Map.styled";
import { iconRed, iconBlue } from "./Icon";

const Map = ({ paginetedData, faturamentoMin }) => {
  return (
    <ContainerMap center={[-23.568767, -46.649907]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {paginetedData?.map(({ latitude, longitude, name, revenue }) => (
        <Marker
          key={name}
          position={[latitude, longitude]}
          icon={faturamentoMin > revenue ? iconRed : iconBlue}
        ></Marker>
      ))}
    </ContainerMap>
  );
};

export default Map;
