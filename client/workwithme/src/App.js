// import { latLng } from "leaflet";
import React, { useState } from "react";
import "./App.css";
import { useHistory } from 'react-router-dom';


// // import { Icon } from "leaflet";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";

const key = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU";
const BASEURL = "http://www.mapquestapi.com/geocoding/v1/address?key";

function App() {
  // const history = useHistory();
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

  const [bubble, setBubble] = useState([{name: "Julie", workstations: ""}]);
  let history = useHistory();

  function showNewBubble(newBubbleData) {
    // event.preventDefault();
    console.log("New bubble is back to app", newBubbleData)
    setBubble(newBubbleData)
    history.push("/new-bubble-created");
  }

  
  return (
    <div>
      <Navbar />
      <Routes 
      showNewBubble={()=>showNewBubble}
      bubble={bubble}
      />
    </div>
  );
}

export default App;
