import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef } from "react";

function CustomMap() {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={[51.0, 19.0]}
      zoom={6}
      scrollWheelZoom={true}
      // className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      <Marker position={[51.505, -0.09]}></Marker>
    </MapContainer>

    //   <MapContainer
    //     className="markercluster-map"
    //     center={[51.0, 19.0]}
    //     zoom={4}
    //     maxZoom={18}
    //     style={{
    //       height: "100vh",
    //       width: "50vw",
    //     }}
    //   >
    //     <TileLayer
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     />
    //     <Marker position={[51.505, -0.09]} />
    //   </MapContainer>
  );
}

export default CustomMap;
