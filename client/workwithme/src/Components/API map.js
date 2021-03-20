import { useState, React } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";

import MapBubbleForm from "./MapBubbleForm";
const key = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU";
const BASEURL = "http://www.mapquestapi.com/geocoding/v1/address?key";

function APImap() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  //API data request
  const getData = async (location) => {
    let url = `${BASEURL}=${key}&location=${location}`;
    console.log("URL", url);
    setData("");

    try {
      let response = await fetch(url);
      // call fetch, wait for return
      if (response.ok) {
        console.log("Response ok");
        let data = await response.json();
        setData(data);
      } else {
        console.log("Run into an error");
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log("Ended up in catch");
      setError(`Network error: ${err.message}`);
    }
  };

  return (
    <div>
          <MapBubbleForm onSubmit={(location) => getData(location)} />

      <h1> The data for</h1>
      <MapContainer
        center={[
        //   data.results[0].locations[0].latLng.lat,
        //   data.results[0].locations[0].latLng.lng,
        50.8503 , -4.3517
        ]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            // data.results[0].locations[0].latLng.lat,
            // data.results[0].locations[0].latLng.lng,
            50.8503 , -4.3517
          ]}
        >
          <Popup>Buuble 1</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default APImap;
