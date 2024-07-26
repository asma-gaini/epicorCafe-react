import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

function CustomMap() {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={[51.0, 19.0]}
      zoom={6}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height: "400px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>
  );
}

export default CustomMap;
