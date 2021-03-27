import React, { useState } from "react";

//Defines the use states for the walk form
function CreateABubbleForm(props) {
  const [firstname, setFirstname] = useState("");
  const [location, setLocation] = useState("");
  const [workstations, setWorkstations] = useState("");
  const [wifi, setWifi] = useState("yes");
  const [petfriendly, setPetfriendly] = useState("yes");
  const [kitchen, setKitchen] = useState("yes");
  const [quietspace, setQuietspace] = useState("yes");
  const [wheelchair, setWheelchair] = useState("yes");
  const [smoking, setSmoking] = useState("yes");

  //   const [isOpen, setIsOpen] = useState(false);

  //Function to change the date, time and title when the form field change
  function handleChange(event) {
    let { name, value } = event.target;

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
        setWifi(value);
        break;
      case "petfriendly":
        setPetfriendly(value);
        break;
      case "kitchen":
        setKitchen(value);
        break;
      case "quietspace":
        setQuietspace(value);
        break;
      case "wheelchair":
        setWheelchair(value);
        break;
      case "smoking":
        setSmoking(value);
        break;
    }
    
  }

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
    console.log("After submit", firstname, location, workstations, wifi, petfriendly, wheelchair)
  }

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
            <option id="one">1</option>
            <option id="two">2 </option>
            <option id="three">3 </option>
            <option id="four">4</option>
          </select>
        </label>
        <label>
          Wifi?{" "}
          <select
            name="wifi"
            value={wifi}
            onChange={handleChange}
            required
          >
            <option id="yes">yes</option>
            <option id="no">no </option>
            </select>
        </label>
        <label>
          Pet friendly?{" "}
          <select
            name="petfriendly"
            value={petfriendly}
            onChange={handleChange}
            required
          >
            <option id="yes">yes</option>
            <option id="no">no </option>
            </select>
        </label>
        <label>
        Kitchen access?{" "}
          <select
            name="kitchen"
            value={kitchen}
            onChange={handleChange}
            required
          >
            <option id="yes">yes</option>
            <option id="no">no </option>
            </select>
        </label>
        <label>
        Quiet space?{" "}
          <select
            name="quietspace"
            value={quietspace}
            onChange={handleChange}
            required
          >
            <option id="yes">yes</option>
            <option id="no">no </option>
            </select>
        </label>
        <label>
        Wheelchair access?{" "}
          <select
            name="wheelchair"
            value={wheelchair}
            onChange={handleChange}
            required
          >
            <option id="yes">yes</option>
            <option id="no">no </option>
            </select>
        </label>
        <label>
        Smoking?{" "}
          <select
            name="smoking"
            value={smoking}
            onChange={handleChange}
            required
          >
            <option id="yes">yes</option>
            <option id="no">no </option>
            </select>
        </label>

        <button>Create bubble</button>
      </form>
    </div>
  );
}

export default CreateABubbleForm;
