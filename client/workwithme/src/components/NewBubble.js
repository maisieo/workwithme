import React, { useState } from "react";
import NewBubbleForm from "./NewBubbleForm";

function NewBubble(props) {
  const [name, setName] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [workstations, setWorkstations] = useState(0);
  const [wifi, setWifi] = React.useState(true);
  const [petfriendly, setPetfriendly] = React.useState(true)
  const [kitchen, setKitchen] = React.useState(true);
  const [quietspace, setQuietspace] = React.useState(true);
  const [wheelchair, setWheelchair] = React.useState(true);
  const [smoking, setSmoking] = React.useState(true);
  


  function handleChange(event) {
    // console.log('event: ', event)
    console.log(event.target.checked);
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "postcode":
        setPostcode(event.target.value);
        break;
      case "workstations":
        setWorkstations(event.target.value);
        break;
      case "wifi":
        setWifi(event.target.value);
        break;
      case "petfriendly":
        setPetfriendly(event.target.value);
          break;
      case "kitchen":
        setKitchen(event.target.value);
        break;
      case "quietspace":
        setQuietspace(event.target.value);
        break;
      case "wheelchair":
        setWheelchair(event.target.value);
        break;
      case "smoking":
        setSmoking(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `A request has been logged: 
        From ${name} ${postcode} with ${workstations} spots and WIFI ${wifi}
        `
    );
    let newBubbleData = {name, postcode, workstations, wifi, petfriendly, kitchen, quietspace, wheelchair, smoking}
    props.showNewBubble(newBubbleData);
    console.log("New bubble" , newBubbleData)
    setName("");
    setPostcode("");
    setWorkstations("");
    setWifi("");
    setPetfriendly("")
    setKitchen("")
    setQuietspace("")
    setWheelchair("")
    setSmoking("")
    // the submission event would then add the new bubble to the backend tables
    // the map would then be returned with the new bubble on it
  }

  return (
    <div className="NewBubble">
      <form onSubmit={handleSubmit}>
        Create a new Bubble
        <NewBubbleForm
          name={name}
          postcode={postcode}
          workstations={workstations}
          handleChange={handleChange}
          wifi={wifi}
          petfriendly={petfriendly}
          kitchen={kitchen}
          quietspace={quietspace}
          wheelchair={wheelchair}
          smoking={smoking}

        />
        <button id="buttonCreateBubble" type="submit">
          {" "}
          Create a bubble{" "}
        </button>
      </form>
    </div>
  );
}

export default NewBubble;

