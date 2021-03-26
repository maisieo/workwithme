import React, { useState } from "react";
function MapBubbleForm(props) {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  //defines what to do when a user submits. Sets location.
  const handleSubmit = (e) => {
    e.preventDefault();
    // getData(location);
    props.onSubmit(location);
    setLocation("");
  };

  return (
    //   //HTML for the form
    
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
