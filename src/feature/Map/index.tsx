"use client";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
/* 
      {gyms.map((gym) => (
        <Marker key={gym.id} position={gym.location}>
          <Popup>
            <h2 className="font-bold">{gym.name}</h2>
            <p>{gym.description}</p>
          </Popup>
        </Marker>
      ))}
*/
export default function Map() {
  return (
    <div className="h-full w-full">
      <MapContainer
        center={[50.0647, 19.945]}
        zoom={15}
        style={{ height: "100%", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
