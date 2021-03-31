import React, { useState } from "react";
import Popup from "./PopUp";

//Defines the use states for the walk form
function CreateABubbleForm(props) {
  const [firstname, setFirstname] = useState("");
  const [location, setLocation] = useState("");
  const [workstations, setWorkstations] = useState("");
  const [wifi, setWifi] = useState(0);
  const [petfriendly, setPetfriendly] = useState(0);
  const [kitchen, setKitchen] = useState(0);
  const [quietspace, setQuietspace] = useState(0);
  const [wheelchair, setWheelchair] = useState(0);
  const [smoking, setSmoking] = useState(0);
  const [isOpen, setIsOpen] = useState(0);
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
        setWifi(convert(checked));
        break;
      case "petfriendly":
        setPetfriendly(convert(checked));
        break;
      case "kitchen":
        setKitchen(convert(checked));
        break;
      case "quietspace":
        setQuietspace(convert(checked));
        break;
      case "wheelchair":
        setWheelchair(convert(checked));
        break;
      case "smoking":
        setSmoking(convert(checked));
        break;
        }
  }
  const handleWifi = () => setWifi(convert(!wifi));
  const handleKitchen = () => setKitchen(convert(!kitchen));
  const handlePet = () => setPetfriendly(convert(!petfriendly));
  const handleQuiet = () => setQuietspace(convert(!quietspace));
  const handleWheelchair = () => setWheelchair(convert(!wheelchair));
  const handleSmoking = () => setSmoking(convert(!smoking));

  const convert = (feature) => {
return (feature) ? 1 : 0;
  }

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
    // console.log("this is bubble", bubble)
    console.log(
      "After submit",
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
                  <h3>Your coworking bubble has been created</h3>
                  <p>Welcome {bubble.firstname}!</p>
                  <p>
                    {" "}
                    Your bubble has {bubble.workstations} workstation(s) to offer{" "}
                  </p>
                  <h4> Features: </h4>
                  <p>
                    <span> Wifi: {bubble.wifi === true ? <img
                        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png"
                        width="25"
                        height="30"
                      /> : "-"} </span>
                    <span>
                      {" "}
                      Pet friendly: {bubble.petfriendly  === true ? <img
                        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png"
                        width="25"
                        height="30"
                      /> : "-"} </span>
                    <span>
                      Kitchen Access: {bubble.kitchen === true ? <img
                        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png"
                        width="25"
                        height="30"
                      /> : "-"} </span>
                    <span>
                      Quiet Space: {bubble.quietspace  === true ? <img
                        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png"
                        width="25"
                        height="30"
                      /> : "-"} </span>
                    <span>
                      Wheelchair Access: {bubble.wheelchair  === true ? <img
                        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png"
                        width="25"
                        height="30"
                      /> : "-"} </span>
                    <span>Smoking Corner {bubble.smoking  === true ? <img
                        src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png"
                        width="25"
                        height="30"
                      /> : "-"} </span>
                  </p>
                  <a href="/join-bubble" type="button" class="btn btn-secondary btn-lg"> Check the map</a>
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
