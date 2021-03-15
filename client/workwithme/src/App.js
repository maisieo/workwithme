import React, { useState } from "react";
import "./App.css";
// // import { Icon } from "leaflet";
import Navbar from "./components/Navbar"
import Routes from "./components/Routes"


function App() {
  return (

    <div>
      <Navbar/>
      <Routes/>
    </div>
  );
}

export default App;
