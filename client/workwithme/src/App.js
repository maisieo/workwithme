// import { latLng } from "leaflet";
import React, { useState } from "react";
import "./App.css";
import { useHistory } from 'react-router-dom';


// the code below is for checking if users are being authorized to use the app
import Local from './Components/helpers/Local';
import Api from './Components/helpers/Api';

// // import { Icon } from "leaflet";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";
// import AuthenticatedRoute from "./Components/AuthenticatedRoute";

function App() {

    const [user, setUser] = useState(Local.getUser());
    const [loginErrorMsg, setLoginErrorMsg] = useState('');

    async function doLogin(username, password) {
        let response = await Api.loginUser(username, password);
        if (response.ok) {
            Local.saveUserInfo(response.data.token, response.data.user);
            setUser(response.data.user);
            setLoginErrorMsg('');
            useHistory.push('/');
        } else {
            setLoginErrorMsg('Login failed');
        }
    }

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
      // doLogin={doLogin}
      />
    </div>
    </div>
  );
}

export default App;
