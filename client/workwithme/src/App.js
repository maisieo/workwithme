// import { latLng } from "leaflet";
import React, { useState } from "react";
import "./App.css";
// import { useHistory } from 'react-router-dom';


// the code below is for checking if users are being authorized to use the app
// import Local from './helpers/Local';
// import Api from './helpers/Api';

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
    <div className="App">
    <div>
      <Navbar />
      <Routes 
      // showNewBubble={()=>showNewBubble}
      // bubble={bubble}
      />
    </div>
    </div>
  );
}

export default App;
