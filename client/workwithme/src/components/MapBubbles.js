import React, { useState } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
// // import { Icon } from "leaflet";

const MapBubbles = (props, coordinates) => {
  // //  define the initial use state of the form
  // const [location, setLocation] = useState("");

  // const handleChange = (e) => {
  //   // handle key presses
  //   setLocation(e.target.value);
  //   // e is the event that receives the event, which has a property of value
  //   // sets the location field
  // };

  // //defines what to do when a user submits. Sets location.
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.onSubmit(location);
  //   setLocation("");
  //   // resets to empty string
  // };
  const position = [52.517037, 13.38886]
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
