import { latLng } from "leaflet";
import React, { useState } from "react";
import "./App.css";

// // import { Icon } from "leaflet";
import { NavBar } from "../components/NavBar"
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
// import { useHistory } from 'react-router-dom';

function App() {
  // const history = useHistory();

  function showNewBubble(event) {
    event.preventDefault();
    // history.push("/new-bubble-created");
  }

  // function passCoordinatesFromMapForm() {
  //   setCoordinates(latLng)

  // }

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
    <div>
      <Navbar />
      <Routes showNewBubble={() => showNewBubble} />
    </div>
    </div>
  );
}

export default App;
