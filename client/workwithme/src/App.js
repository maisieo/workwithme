// import { latLng } from "leaflet";
import React, { useState, useEffect } from "react";
import "./App.css";
// the code below is for checking if users are being authorized to use the app
import Local from "./Components/helpers/Local";
import Api from "./Components/helpers/Api";

// // import { Icon } from "leaflet";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AuthenticatedRoute from "./Components/AuthenticatedRoute";

function App() {

  const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  async function doLogin(username, password) {
    let response = await Api.loginUser(username, password);
    if (response.ok) {
      Local.saveUserInfo(response.data.token, response.data.user);
      setUser(response.data.user);
      setLoginErrorMsg("");
      useHistory.push("/");
    } else {
      setLoginErrorMsg("Login failed");
    }
  }
  let [error, setError] = useState(null);
  let [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    getBubbles();
  }, []);

  //function to get the walks from the database
  const getBubbles = () => {
    fetch("/bubbles")
      .then((result) => result.json())
      .then((bubbles) => {
        setBubbles(bubbles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Deletes walks from the database
  function deleteBubble(id) {
    console.log("Delete bubble console log" + id);
    let options = {
      method: "DELETE",
      // body: JSON.stringify(walks)
    };

    fetch(`/bubbles/${id}`, options)
      .then((result) => result.json())
      .then((bubbles) => {
        setBubbles(bubbles);
      })
      .catch((err) => {
        console.log("error!", err.message);
      });
  }

  function addBubble(firstname,
    location,
    workstations,
    wifi,
    petfriendly,
    kitchen,
    quietspace,
    wheelchair,
    smoking) 
  
  { 
    let newBubble = {
      firstname,
      location,
      workstations,
      wifi,
      petfriendly,
      kitchen,
      quietspace,
      wheelchair,
      smoking
    };   

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //this tells the server in what format to expect the data
      body: JSON.stringify(newBubble), //object needs to converted to json (with stringify)
    };
    fetch("/bubbles", options)
      .then(result => result.json())
      .then(bubbles => {
        setBubbles(bubbles);
        console.log("Function add bubble is being called")
      })
      .catch((err) => {
        console.log("error!", err.message);
      });
  }

  // function addBubble(data) {
  //   console.log("This has been called on submit")
  // }
 
  return (
    <div className="App">
      <Navbar />
      {/* <div>
        <ul>{bubbles.map(b=>(<li> Firstname: {b.firstname}, Workstations: {b.workstations}</li>))}</ul>
          </div> */}
      <Routes
        getBubbles={getBubbles}
        addBubble={() => addBubble}
        // onSubmit={(firstname, location, workstations, wifi, petfriendly, kitchen, quietspace, wheelchair, smoking) => addBubble(firstname, location, workstations, wifi, petfriendly, kitchen, quietspace, wheelchair, smoking)}
        deleteBubble={deleteBubble}
        bubbles={bubbles}
        // bubbles={bubbles}
        doLogin={doLogin}
      />
    </div>
  );
}

export default App;

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

// function showNewBubble(newBubbleData) {
//   // event.preventDefault();
//   console.log("New bubble is back to app", newBubbleData)
//   setBubble(newBubbleData)
//   // history.push("/new-bubble-created");
// }

//code to get, add and delete bubbles from databaase
//code to get, add and delete bubbles from databaase to add a new bubble into database from the form
