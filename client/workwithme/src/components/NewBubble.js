import React, { useState } from "react";
import NewBubbleForm from "./NewBubbleForm";
// import APImap from "./API map";
import Popup from "./PopUp";
function NewBubble(props) {
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
  const [bubble, setBubble] = useState([{ firstname: "Julie", workstations: "" }]);
  const [isOpen, setIsOpen] = useState(false);
  
  function handleChange(event) {
    // console.log('event: ', event)
    let {name, value, checked} = event.target;
    //console.log(event.target.checked);
    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "workstations":
        setWorkstations(value);
        break;
      case "wifi":
        setWifi(checked);
        break;
      case "petfriendly":
        setPetfriendly(checked);
        break;
      case "kitchen":
        setKitchen(checked);
        break;
      case "quietspace":
        setQuietspace(checked);
        break;
      case "wheelchair":
        setWheelchair(checked);
        break;
      case "smoking":
        setSmoking(checked);
        break;
      default:
        break;
    }
  }
  const handleWifi = () => setWifi(!wifi)
  const handleKitchen = () => setKitchen(!kitchen)
  const handlePet = () => setPetfriendly(!petfriendly)
  const handleQuiet = () => setQuietspace(!quietspace)
  const handleWheelchair = () => setWheelchair(!wheelchair)
  const handleSmoking = () => setSmoking(!smoking)
  //defining Global variable
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
  }; console.log("before submit", firstname, location, workstations, wifi, petfriendly, kitchen, quietspace, wheelchair, smoking)
  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `A request has been logged:
        From ${firstname} with ${workstations} spots and WIFI ${wifi}
                "This is new bubble data", ${newBubbleData}`
    );
    setBubble(newBubbleData);
    console.log("New bubble", newBubbleData);
    props.addBubble(newBubbleData); console.log("After submit", firstname, location, workstations, wifi, petfriendly, kitchen, quietspace, wheelchair, smoking)
    setFirstname("");
    setLocation("");
    setWorkstations("");
    setWifi("");
    setPetfriendly("");
    setKitchen("");
    setQuietspace("");
    setWheelchair("");
    setSmoking("");
     // onSubmit={(newBubbleData) => addBubble(newBubbleData)}
    // the submission event would then add the new bubble to the backend tables
    // the map would then be returned with the new bubble on it
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="NewBubble">
      <form onSubmit={handleSubmit} >
        Create a new Bubble
        <NewBubbleForm
          firstname={firstname}
          location={location}
          workstations={workstations}
          handleChange={handleChange}
          handleWifi={handleWifi}
          handleKitchen={handleKitchen}
          handleQuiet={handleQuiet}
          handlePet={handlePet}
          handleWheelchair={handleWheelchair}
          handleSmoking={handleSmoking}
          wifi={wifi}
          petfriendly={petfriendly}
          kitchen={kitchen}
          quietspace={quietspace}
          wheelchair={wheelchair}
          smoking={smoking}
          // onSubmit={(newBubbleData) => addBubble(newBubbleData)}
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
                  <h2>Your new bubble has been created</h2>
                  <p>Welcome {bubble.firstname}</p>
                  <p>
                    {" "}
                    Your bubble has {bubble.workstations} workstation(s) to offer{" "}
                  </p>
                  <h1> Features </h1>
                  <p>
                    <span> Wifi: {
                    bubble.wifi === true  ? "Yes" : "/"
                    }</span>
                    <span>
                      {" "}
                      Pet Friendly: {bubble.petfriendly === true ? "Yes" : "/"}
                    </span>
                    <span>Kitchen Access: {bubble.kitchen === true ?  "Yes" : "/"}</span>
                    <span>Quiet Space: {bubble.quietspace === true ? "Yes" : "/"}</span>
                    <span>
                      Wheelchair Access: {bubble.wheelchair === true ?  "Yes" : "/"}
                    </span>
                    <span>Smoking Corner {bubble.smoking === true ?  "Yes" : "/"}</span>
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