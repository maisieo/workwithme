import React from "react";

const NewBubbleForm = ({
  name,
  handleChange,
  location,
  workstations,
  wifi,
  petfriendly,
  kitchen,
  quietspace,
  wheelchair,
  smoking,
}) => (
  <div>
  
     <label>
      {" "}
      Name
      <input
        name="name"
        type="text"
        value={name}
        onChange={handleChange}
        required
        autoComplete="nope"
      ></input>
    </label>

    <label>
      {" "}
      Location
      <input
        name="location"
        type="text"
        value={location}
        onChange={handleChange}
        required
        autoComplete="nope"
      ></input>
      
    </label> 
    <label>
      {" "}
      How many workstations do you offer?
      <select
        name="workstations"
        value={workstations}
        onChange={handleChange}
        required
      >
        <option id="emtpy"> </option>
        <option id="one">1</option>
        <option id="two">2 </option>
        <option id="three">3 </option>
        <option id="four">4</option>
      </select>
    </label>

    <label>
      Which features does your bubble have?
      <span>
        {" "}
        Wifi
        <input type="checkbox" onChange={handleChange} value={wifi} />
      </span>
      <span>
        {" "}
        Pet friendly
        <input
          type="checkbox"
          value={petfriendly}
          onChange={handleChange}
        ></input>
      </span>
      <span>
        {" "}
        Access to kitchen
        <input type="checkbox" value={kitchen} onChange={handleChange}></input>
      </span>
      <span>
        {" "}
        Quiet space
        <input
          type="checkbox"
          value={quietspace}
          onChange={handleChange}
        ></input>
      </span>
      <span>
        {" "}
        Wheelchair access
        <input
          type="checkbox"
          value={wheelchair}
          onChange={handleChange}
        ></input>
      </span>
      <span>
        {" "}
        Smoking corner
        <input type="checkbox" value={smoking} onChange={handleChange}></input>
      </span>
    </label>
    </div>
);

export default NewBubbleForm;
