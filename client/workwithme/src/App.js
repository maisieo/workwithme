import React, { useState } from "react";
import "./App.css";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
// // import { Icon } from "leaflet";
import { NavBar } from "../components/NavBar"

const position = [51.505, -0.09];
function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        Here's our map! It's highly editable by the way :)
        
        <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Buuble 1</Popup>
          </Marker>
        </MapContainer>
        
      </header>
    </div>
  );
}

export default App;
