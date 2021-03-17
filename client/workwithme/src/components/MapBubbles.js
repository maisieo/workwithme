import React, { useState } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
// // import { Icon } from "leaflet";

const MapBubbles = (props) => {
  const position = /* props.coordinates; */[52.517037,
  13.38886] // this should be props.coordinates
  console.log("This is coordinates props", props.coordinates);
  return (
    <div>
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Buuble 1</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapBubbles;
