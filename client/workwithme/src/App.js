import React, { useState } from "react";
import "./App.css";

// // import { Icon } from "leaflet";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
// import { useHistory } from 'react-router-dom';

function App() {
 
  // const history = useHistory();

  function showNewBubble(event) {
    event.preventDefault();
    // history.push("/new-bubble-created");
  }

  function onSubmit() {

    
  }

  return (
    <div>
      <Navbar />
      <Routes showNewBubble={() => showNewBubble}/>
    </div>
  );
}

export default App;
