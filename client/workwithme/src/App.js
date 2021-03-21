// import { latLng } from "leaflet";
import React, { useState } from "react";
import "./App.css";
// import { useHistory } from 'react-router-dom';


// // import { Icon } from "leaflet";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";


function App() {
  // const history = useHistory();
 

  //const [bubble, setBubble] = useState([{name: "Julie", workstations: ""}]);
  // let history = useHistory();

  // function showNewBubble(newBubbleData) {
  //   // event.preventDefault();
  //   console.log("New bubble is back to app", newBubbleData)
  //   setBubble(newBubbleData)
  //   // history.push("/new-bubble-created");
  // }

  
  return (
    <div>
      <Navbar />
      <Routes 
      // showNewBubble={()=>showNewBubble}
      // bubble={bubble}
      />
    </div>
  );
}

export default App;
