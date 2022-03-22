import React from "react";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ContainerMap } from "./Map.styled";
import { iconRed, iconBlue } from "./Icon";

const Map = ({ paginatedData, faturamentoMin }) => {
  return (
    <ContainerMap center={[-23.616359, -46.664749]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {paginatedData?.map(({ latitude, longitude, name, revenue }) => (
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
