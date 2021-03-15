import React, { useState } from "react";

function MapBubbleForm(props) {
  //  define the initial use state of the form
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    // handle key presses
    setLocation(e.target.value);
    // e is the event that receives the event, which has a property of value
    // sets the location field
  };

  //defines what to do when a user submits. Sets location.
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(location);
    setLocation("");
    // resets to empty string
  };
  return (
    //HTML for the form
    <div className="MapBubbleForm">
      <form onSubmit={handleSubmit}>
        <label>
          Location &nbsp;
          <input
            id="locationField"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default MapBubbleForm;
