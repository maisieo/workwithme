import { latLng } from "leaflet";
import React, { useState } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";

// the code below is for checking if users are being authorized to use the app
// import Local from './helpers/Local';
// import Api from './helpers/Api';

// // import { Icon } from "leaflet";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";
// import { useHistory } from 'react-router-dom';

const position = [51.505, -0.09];
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
      <Navbar />
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
