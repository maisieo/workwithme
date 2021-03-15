import React, { useState } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
// // import { Icon } from "leaflet";

const key = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU";
const url = "http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=";

//gets the weather from the API
const getCoordinates = async location => {
  console.log("location -->", location);
  let url = `${BASEURL}${location}`;
  // sets the url for the query
  setForecast(null);
  //resets to null

  try {
    console.log(url);
    let response = await fetch(url);

    // call fetch, wait for return
    if (response.ok) {
      console.log("Response ok");
      // server received and understood the request
      let data = await response.json();
      setForecast(data); //update state
    } else {
      console.log("Run into an error");
      setError(`Server error: ${response.status} ${response.statusText}`);
    }
  } catch (err) {
    console.log("Ended up in catch");
    setError(`Network error: ${err.message}`);
  }
};




const position = [51.505, -0.09];
const MapBubbles = (props) => {
  //  define the initial use state of the form
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    // handle key presses
    setLocation(e.target.value);
    // e is the event that receives the event, which has a property of value
    // sets the location field
  };

  //defines what to do when a user submits. Sets location.
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(location);
    setLocation("");
    // resets to empty string
  };
  return (
    <div>
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
      </div>
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
