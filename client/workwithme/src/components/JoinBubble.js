import React, { useState } from "react";
import MapBubbles from "./MapBubbles";
import MapBubbleForm from "./MapBubbleForm";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
import APImap from "./API map";
// have a state here that gets updates with the mapbubbleform

//API DATA
// const key = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU";
// const BASEURL = "http://www.mapquestapi.com/geocoding/v1/address?key";

function JoinBubble() {
  const [data, setData] = useState("");
  // const [error, setError] = useState("");

  // //API data request
  // const getData = async (location) => {
  //   let url = `${BASEURL}=${key}&location=${location}`;
  //   console.log("URL", url);
  //   setData("");

  //   try {
  //     let response = await fetch(url);
  //     // call fetch, wait for return
  //     if (response.ok) {
  //       console.log("Response ok");
  //       let data = await response.json();
  //       setData(data);
  //     } else {
  //       console.log("Run into an error");
  //       setError(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log("Ended up in catch");
  //     setError(`Network error: ${err.message}`);
  //   }
  // };

  return (
    <div className="NewBubble">
      <h3>Join an existing Bubble</h3>
      {/* <MapBubbleForm onSubmit={(location) => getData(location)} /> */}
      {/* <MapBubbleForm onSubmit={(location) => getData(location)} /> */}
      <APImap /*data={data}*/ />
    </div>
  );
}

export default JoinBubble;
