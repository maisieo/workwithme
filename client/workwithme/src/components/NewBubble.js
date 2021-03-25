import React, { useState } from "react";
import NewBubbleForm from "./NewBubbleForm";
import APImap from "./API map";
import Popup from "./PopUp";

function NewBubble({ addBubble, bubbles }) {
  const [firstname, setFirstname] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [workstations, setWorkstations] = useState(0);
  // const [isChecked , setIsChecked] = useState(false)
  const [wifi, setWifi] = React.useState(false);
  const [petfriendly, setPetfriendly] = React.useState(false);
  const [kitchen, setKitchen] = React.useState(false);
  const [quietspace, setQuietspace] = React.useState(false);
  const [wheelchair, setWheelchair] = React.useState(false);
  const [smoking, setSmoking] = React.useState(false);
  const [bubble, setBubble] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(event) {
    // console.log('event: ', event)
    // console.log(event.target.checked);
    switch (event.target.name) {
      case "firstname":
        setFirstname(event.target.value);
        break;
      case "location":
        setLocation(event.target.value);
        break;
      case "workstations":
        setWorkstations(event.target.value);
        break;
      case "wifi":
        setWifi(event.target.checked);
        break;
      case "petfriendly":
        setPetfriendly(event.target.checked);
        break;
      case "kitchen":
        setKitchen(event.target.checked);
        break;
      case "quietspace":
        setQuietspace(event.target.checked);
        break;
      case "wheelchair":
        setWheelchair(event.target.checked);
        break;
      case "smoking":
        setSmoking(event.target.checked);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `A request has been logged: 
        From ${firstname} with ${workstations} spots and WIFI ${wifi}
        
        "And heres the bubble data from the backend",`, {bubbles}
    );
    let newBubbleData = {
      firstname,
      location,
      workstations,
      wifi,
      petfriendly,
      kitchen,
      quietspace,
      wheelchair,
      smoking,
    };

    //props.showNewBubble(newBubbleData);
    setBubble(newBubbleData);
    console.log("New bubble", newBubbleData);
    setFirstname("");
    setLocation("");
    setWorkstations("");
    setWifi("");
    setPetfriendly("");
    setKitchen("");
    setQuietspace("");
    setWheelchair("");
    setSmoking("");
    // the submission event would then add the new bubble to the backend tables
    // the map would then be returned with the new bubble on it
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="NewBubble">
      <form onSubmit={handleSubmit}>
        Create a new Bubble
        <NewBubbleForm
          firstname={firstname}
          location={location}
          workstations={workstations}
          handleChange={handleChange}
          wifi={wifi}
          petfriendly={petfriendly}
          kitchen={kitchen}
          quietspace={quietspace}
          wheelchair={wheelchair}
          smoking={smoking}

      
        />
        <button
          id="buttonCreateBubble"
          type="submit"
          value="Click to Open Popup"
          onClick={togglePopup}
        >
          {" "}
          Create a bubble{" "}
          {isOpen && (
            <Popup
              content={
                <>
                  {/* {bubbles.map(bubbles => <div> <h1>{bubbles}</h1> </div>)} */}
                  <h2>Your new bubble has been created</h2>
                  <p>Welcome {bubble.name}</p>
                  <p>
                    {" "}
                    Your bubble has {bubble.workstations} workstation(s) to
                    {bubble.wifi} bubble wifi {bubble.kitchen}bubble kitchen{" "}
                    {bubble.kitchen}
                    offer{" "}
                  </p>
                  <h1> Features </h1>
                  <p>
                    <span> Wifi: {(bubble.wifi = "true" ? "Yes" : "No")}</span>
                    <span>
                      {" "}
                      Pet Friendly:{" "}
                      {(bubble.petfriendly = "true" ? "Yes" : "No")}
                    </span>
                    <span>
                      Kitchen Access: {(bubble.kitchen = "true" ? "Yes" : "No")}
                    </span>
                    <span>
                      Quiet Space: {(bubble.quietspace = "true" ? "Yes" : "No")}
                    </span>
                    <span>
                      Wheelchair Access:{" "}
                      {(bubble.wheelchair = "true" ? "Yes" : "No")}
                    </span>
                    <span>
                      Smoking Corner {(bubble.smoking = "true" ? "Yes" : "No")}
                    </span>
                  </p>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </button>
      </form>
    </div>
  );
}

export default NewBubble;
