import "./map.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function App() {
  return (
    <MapContainer
      id="mapId"
      center={[39.28614221534618, -76.62149012088777]}
      zoom={16}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
