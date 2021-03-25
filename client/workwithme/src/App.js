// import { latLng } from "leaflet";
import React, { useState } from "react";
import "./App.css";
import { useEffect } from 'react-router-dom';


// the code below is for checking if users are being authorized to use the app
import Local from './Components/helpers/Local';
import Api from './Components/helpers/Api';

// // import { Icon } from "leaflet";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";
// import AuthenticatedRoute from "./Components/AuthenticatedRoute";

function App() {
  // const history = useHistory();

    const [user, setUser] = useState(Local.getUser());
    const [loginErrorMsg, setLoginErrorMsg] = useState('');
    const [bubbles, setBubbles] = useState([]);
    // async function doLogin(username, password) {
    //     let response = await Api.loginUser(username, password);
    //     if (response.ok) {
    //         Local.saveUserInfo(response.data.token, response.data.user);
    //         setUser(response.data.user);
    //         setLoginErrorMsg('');
    //         history.push('/');
    //     } else {
    //         setLoginErrorMsg('Login failed');
    //     }
    // }

  //const [bubble, setBubble] = useState([{name: "Julie", workstations: ""}]);
  // let history = useHistory();

  // function showNewBubble(newBubbleData) {
  //   // event.preventDefault();
  //   console.log("New bubble is back to app", newBubbleData)
  //   setBubble(newBubbleData)
  //   // history.push("/new-bubble-created");
  // }

  //code to get, add and delete bubbles from databaase
  //code to get, add and delete bubbles from databaase to add a new bubble into database from the form
  useEffect(() => {
    getBubbles();
  }, []);

  //function to get the walks from the database
  const getbubbles = () => {
    fetch("/bubbles")
      .then(result => result.json())
      .then(bubbles => {
        setBubbles(bubbles);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //Deletes walks from the database
  function deleteBubble(id) {
    console.log("Delete bubble console log" + id);
    let options = {
      method: "DELETE"
      // body: JSON.stringify(walks)
    };

    fetch(`/bubbles/${id}`, options)
      .then(result => result.json())
      .then(bubbles => {
        setWalks(bubbles);
      })
      .catch(err => {
        console.log("error!", err.message);
      });
  }

  //Adds a walk to the database
  function addBubble (ownername,
    place,
    totalws,
    wifi,
    petfriendly,
    kitchen,
    quietspace,
    smokerfriendly,
    availablews,
    wheelchairaccess,
    usersinbubble,) {
    let newBubbleData = {ownername,
      place,
      totalws,
      wifi,
      petfriendly,
      kitchen,
      quietspace,
      smokerfriendly,
      availablews,
      wheelchairaccess,
      usersinbubble};
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //this tells the server in what format to expect the data
      body: JSON.stringify(newBubble) //object needs to converted to json (with stringify)
    };
    fetch("/bubbles", options)
      .then(result => result.json())
      .then(bubbles => {
        setWalks(bubbles);
      })
      .catch(err => {
        console.log("error!", err.message);
      });
  }

  
  return (
    <div className="App">
    <div>
      <Navbar />
      <Routes getBubbles={getBubbles} addBubble={addBubble} deleteBubble={deleteBubble}
      // showNewBubble={()=>showNewBubble}
      // bubble={bubble}
      // doLogin={doLogin}
      />
    </div>
    </div>
  );
}

export default App;
