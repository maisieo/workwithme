import { useState, React, useEffect } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
import MapBubbleForm from "./MapBubbleForm";
const key = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU";
const BASEURL = "http://www.mapquestapi.com/geocoding/v1/";


function APImap({bubbles}) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [markers, setMarkers] = useState([]);


let locationOfBubbles = bubbles.map(b=> [b.location]);
console.log("These are the locations", locationOfBubbles)

//turn locations from database into markers!

// const batchGeoCode 
//for location in locationOfBubbles. add code that will be added to the url, so like "location={location}" OK YES
//THIS IS IT




  const getData = async (location) => {
    let url = `${BASEURL}address?key=${key}&location=${location}`;
    console.log("URL", url);
    setData("");

    try {
      let response = await fetch(url);
      // call fetch, wait for return
      if (response.ok) {
        console.log("Response ok");
        let data = await response.json();
        setData(data);
        let coordinates = [
          data.results[0].locations[0].latLng.lat,
          data.results[0].locations[0].latLng.lng,
        ];
        console.log("These are coordinates", coordinates);
        console.log("This is data set by getData", data);
      } else {
        console.log("Run into an error");
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log("Ended up in catch");
      setError(`Network error: ${err.message}`);
    }
  };

  // console.log("display results", data.results[0])
  return (
    <div>
      <MapBubbleForm onSubmit={(location) => getData(location)} /><div>
These are the locations <ul>{bubbles.map(b=>(<li>{b.location}</li>))}</ul></div>
      {data && (
        <MapContainer
          center={[
            data.results[0].locations[0].latLng.lat,
            data.results[0].locations[0].latLng.lng,
            // 50.8503 , -4.3517
          ]}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker
            position={[
              data.results[0].locations[0].latLng.lat,
              data.results[0].locations[0].latLng.lng,
              // 50.8503 , -4.3517
            ]}
          // > */}
          {/* //   <Popup>Bubble 1</Popup>
          // </Marker> */}
        </MapContainer>
      )}
    </div>
  );
}

export default APImap;
