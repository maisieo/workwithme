import React, { useState } from "react";
import "./App.css";

// // import { Icon } from "leaflet";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
// import { useHistory } from 'react-router-dom';

function App() {
  let [coordinates, setCoordinates] = useState(null);
  let [error, setError] = useState(null);

  const key = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU";
  const BASEURL = "http://www.mapquestapi.com/geocoding/v1/address?key";

  //gets the coordinates from the city name/address
  const getCoordinates = async (location) => {
    let url = `${BASEURL}=${key}&location=${location}`;
    // sets the url for the query
    setCoordinates(null);
    //resets to null

    try {
      let response = await fetch(url);
      // call fetch, wait for return
      if (response.ok) {
        console.log("Response ok");
        // server received and understood the request
        let data = await response.json();
        setCoordinates(data); //update state
      } else {
        console.log("Run into an error");
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log("Ended up in catch");
      setError(`Network error: ${err.message}`);
    }
  };
  // const history = useHistory();

  function showNewBubble(event) {
    event.preventDefault();
    // history.push("/new-bubble-created");
  }

  return (
    <div>
      <Navbar />
      <Routes showNewBubble={() => showNewBubble} getCoordinates={() => getCoordinates} coordinates={coordinates}/>
    </div>
  );
}

export default App;
