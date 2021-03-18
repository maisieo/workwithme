// import { latLng } from "leaflet";
// import React, { useState } from "react";
import "./App.css";
// import { useHistory } from 'react-router-dom';

// // import { Icon } from "leaflet";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";


function App() {
  // const history = useHistory();

  function showNewBubble(newBubbleData) {
    // event.preventDefault();
    console.log("New bubble is back to app", newBubbleData)
    // history.push("/new-bubble-created");
  }

  
  return (
    <div>
      <Navbar />
      <Routes 
      showNewBubble={()=>showNewBubble}
      />
    </div>
  );
}

export default App;
