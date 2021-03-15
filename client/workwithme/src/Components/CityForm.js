import React, { useState } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";

function CityForm(props) {
  //  define the initial use state of the form
  const [location, setLocation] = useState("New York");
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(location);
    setLocation("");
    // resets to empty string
  };
  let position = [40.7128, -74.006];
  return (
    //HTML for the form
    <div className="CityForm">
      <form onSubmit={handleSubmit}>
        <label>
          Location &nbsp;
          <input
            id="locationField"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            placeholder="I live in..."
          />
        </label>
      </form>

      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Bubble 1</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default CityForm;
