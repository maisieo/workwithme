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
  
    
     <form onSubmit={handleSubmit}>
         {/* <h2>Find a bubble</h2> */}
      <label for="exampleDataList" class="form-label">
        Location
      </label>
      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        type="text"
        name="location"
        value={location}
        onChange={handleChange}
      />
      <datalist id="datalistOptions">
        <option value="Barcelona" />
        <option value="London" />
        <option value="New York" />
      </datalist>
    </form>

    // {/* <div className="MapBubbleForm">
    //   <form >
    //     <label>
    //       Location &nbsp;
    //       <input
    //         id="locationField"
    //         type="text"
    //         name="location"
    //         value={location}
    //         onChange={handleChange}
    //       />
    //     </label>
    //   </form>

    // </div> */}
  );
}

export default MapBubbleForm;
