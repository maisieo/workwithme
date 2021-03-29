import React, { useState } from "react";
import Popup from "./PopUp";

//Defines the use states for the walk form
function CreateABubbleForm(props) {
  const [firstname, setFirstname] = useState("");
  const [location, setLocation] = useState("");
  const [workstations, setWorkstations] = useState("");
  const [wifi, setWifi] = useState(false);
  const [petfriendly, setPetfriendly] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [quietspace, setQuietspace] = useState(false);
  const [wheelchair, setWheelchair] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [bubble, setBubble] = useState([{ firstname: "Julie", workstations: "" }]);
  

  //Function to change the date, time and title when the form field change
  function handleChange(event) {
    let { name, value, checked } = event.target;

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
    }
  }
  const handleWifi = () => setWifi(!wifi);
  const handleKitchen = () => setKitchen(!kitchen);
  const handlePet = () => setPetfriendly(!petfriendly);
  const handleQuiet = () => setQuietspace(!quietspace);
  const handleWheelchair = () => setWheelchair(!wheelchair);
  const handleSmoking = () => setSmoking(!smoking);

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
  //Function to add the title, date and time to the table on submit
  function handleSubmit(event) {
    event.preventDefault();
    props.addBubble(
      firstname,
      location,
      workstations,
      wifi,
      petfriendly,
      kitchen,
      quietspace,
      wheelchair,
      smoking
    );
    setFirstname("");
    setLocation("");
    setWorkstations("");
    setWifi("");
    setPetfriendly("");
    setKitchen("");
    setQuietspace("");
    setWheelchair("");
    setSmoking("");
    setBubble(newBubbleData)
    console.log("this is bubble", bubble)
    console.log(
      "After submit",
      firstname,
      location,
      workstations,
      wifi,
      petfriendly,
      wheelchair,
      smoking
    );
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
    console.log(firstname, "here's first name on toggle");
  };
  return (
    //Walk form
    <div className="CreateABubbleForm">
      <h2 id="CreateABubble"> Create a bubble</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname&nbsp;
          <input
            id="firstname"
            type="textarea"
            name="firstname"
            value={firstname}
            onChange={handleChange}
          />
        </label>
        <label>
          Location&nbsp;
          <input
            id="location"
            type="textarea"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </label>
        <label>
          How many workstations can you offer?{" "}
          <select
            name="workstations"
            value={workstations}
            onChange={handleChange}
            required
          >
            <option id="empty"></option>
            <option id="one">1</option>
            <option id="two">2 </option>
            <option id="three">3 </option>
            <option id="four">4</option>
          </select>
        </label>
        Wifi?{" "}
        <span>
          {" "}
          Wifi
          <input type="checkbox" onClick={handleWifi} value={wifi} />
        </span>
        <span>
          {" "}
          Pet friendly
          <input
            type="checkbox"
            value={petfriendly}
            onClick={handlePet}
            onChange={handleChange}
          ></input>
        </span>
        <span>
          {" "}
          Access to kitchen
          <input
            type="checkbox"
            value={kitchen}
            onClick={handleKitchen}
          ></input>
        </span>
        <span>
          {" "}
          Quiet space
          <input
            type="checkbox"
            value={quietspace}
            onChange={handleChange}
            onClick={handleQuiet}
          ></input>
        </span>
        <span>
          {" "}
          Wheelchair access
          <input
            type="checkbox"
            value={wheelchair}
            onChange={handleChange}
            onClick={handleWheelchair}
          ></input>
        </span>
        <span>
          {" "}
          Smoking corner
          <input
            type="checkbox"
            value={smoking}
            onChange={handleChange}
            onClick={handleSmoking}
          ></input>
        </span>
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
                    <span> Wifi: {bubble.wifi === true ? "Yes" : "/"}</span>
                    <span>
                      {" "}
                      Pet Friendly: {bubble.petfriendly === true ? "Yes" : "/"}
                    </span>
                    <span>
                      Kitchen Access: {bubble.kitchen === true ? "Yes" : "/"}
                    </span>
                    <span>
                      Quiet Space: {bubble.quietspace === true ? "Yes" : "/"}
                    </span>
                    <span>
                      Wheelchair Access: {bubble.wheelchair === true ? "Yes" : "/"}
                    </span>
                    <span>Smoking Corner {bubble.smoking === true ? "Yes" : "/"}</span>
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

export default CreateABubbleForm;
