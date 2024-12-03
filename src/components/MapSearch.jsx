import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapSearch = ({ onMapClick }) => {
  const MapEvents = () => {
    useMapEvents({
      click: (e) => {
        console.log("Clicked coordinates:", e.latlng); // Debugging log
        onMapClick(e.latlng); // Pass lat/lng to parent component
      },
    });
    return null;
  };

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <MapContainer center={[9.145, 40.489673]} zoom={6} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapEvents />
      </MapContainer>
    </div>
  );
};

export default MapSearch;
