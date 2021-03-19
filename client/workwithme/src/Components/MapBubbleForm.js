import React, {  useState } from "react";

function MapBubbleForm(props) {
  //  define the initial use state of the form
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [error, setError] = useState(null);

  const key = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU";
  const BASEURL = "http://www.mapquestapi.com/geocoding/v1/address?key";
  let latitude = "";
  let longitude = "";
  let latlng = "";

  //gets the coordinates from the city name/address
  const getCoordinates = async location => {
    let url = `${BASEURL}=${key}&location=${location}`;
    // sets the url for the query
    setCoordinates("");
    //resets to null

    try {
      let response = await fetch(url);
      // call fetch, wait for return
      if (response.ok) {
        console.log("Response ok");
        // server received and understood the request
        let data = await response.json();
        latitude = data.results[0].locations[0].latLng.lat;
        longitude = data.results[0].locations[0].latLng.lng;
        latlng = [latitude, longitude];
        setCoordinates(latlng); //update state
        // console.log("This are coorindates", coordinates);
      } else {
        console.log("Run into an error");
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log("Ended up in catch");
      setError(`Network error: ${err.message}`);
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  //defines what to do when a user submits. Sets location.
  const handleSubmit = (e) => {
    e.preventDefault();
    getCoordinates(location);
    props.onSubmit(coordinates);
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
