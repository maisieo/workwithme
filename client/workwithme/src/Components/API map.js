import { useState, React, useEffect } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
import MapBubbleForm from "./MapBubbleForm";
const key1 = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU";
const key2 = "HtjjO4zjuAqWJ5bTcp6HMXp5Ej4uq47i";
const BASEURLmap = "http://www.mapquestapi.com/geocoding/v1/";

function APImap({ bubbles }) {
  const [data, setData] = useState("");
  const [dataLocations, setDataLocations] = useState("");
  const [error, setError] = useState("");
  const [markers, setMarkers] = useState();
  let allBubblesData = null;
  let coordinatesOfLocations = [];
  let justArray = [];
  let resultsArray = [];
  let hopefullyFinal = null;
  let bubbleData = [];
  let array3 = [];
  let objs = [];

  useEffect(() => {
    // Update the document title using the browser API
    getCoordinatesOfDB();
    // getBatchData();
  });
  let URLpart = "";
  let locationOfBubbles = bubbles.map((b) => [b.location]);
  console.log("These are the locations", locationOfBubbles);
  console.log("bubbles", bubbles);

  function getCoordinatesOfDB() {
    locationOfBubbles.forEach(
      (location) => (URLpart += `&location=${location[0]}`)
    );
    // getBatchData();
  }

  const getBatchData = async () => {
    let url = `${BASEURLmap}batch?key=${key2}${URLpart}&thumbMaps=true&outFormat=json`;
    console.log("URL", url);
    setData("");

    try {
      let response = await fetch(url);
      // call fetch, wait for return
      if (response.ok) {
        console.log("Response ok");
        let data = await response.json();
        setDataLocations(data);
        console.log(data);
        resultsArray = data.results;
        console.log("THIS IS RESULTS ARRAY", resultsArray);
        resultsArray.forEach((location) =>
          coordinatesOfLocations.push([
            location.locations[0].latLng.lat,
            location.locations[0].latLng.lng,
          ])
        );
        justArray.push(Object.values(coordinatesOfLocations));
        console.log("coordinates of locations", coordinatesOfLocations);
        hopefullyFinal = justArray[0];
        console.log("hope", hopefullyFinal);
        bubbleData = bubbles.map((e) => [e.firstname, e.workstations]);
        console.log("this is bubble data", bubbleData);
        array3 = bubbleData.map((item, idx) => [
          ...item,
          ...hopefullyFinal[idx],
        ]);
        // for (let i=0; i <bubbleData.length; i++) {array3.push([...bubbleData[i],...hopefullyFinal[i]])}
        console.log(array3, "this is array3");
        objs = array3.map(function (x) {
          return {
            name: x[0],
            workstations: x[1],
            lat: x[2],
            lon: x[3],
          };
        });
        console.log(objs)
        setMarkers(objs);

        console.log("These are markrs", markers);
      } else {
        console.log("Run into an error");
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log("Ended up in catch");
      setError(`Network error: ${err.message}`);
    }
  };

  //now we have coordinates of locations, and we need to turn all these into markers.

  //using dataLocations, find the coordinates of each location and put it in a separate array called "coordinatesOfLocation"

  const getData = async (location) => {
    let url = `${BASEURLmap}address?key=${key1}&location=${location}`;
    console.log("URL", url);
    setData("");
    getBatchData();
    try {
      let response = await fetch(url);
      // call fetch, wait for return
      if (response.ok) {
        console.log("Response ok");
        let data = await response.json();
        setData(data);
      } else {
        console.log("Run into an error");
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log("Ended up in catch");
      setError(`Network error: ${err.message}`);
    }
  };

  return (
    <div>
      <MapBubbleForm onSubmit={(location) => getData(location)} />
      <div>
        {hopefullyFinal}
        {data && (
          <MapContainer
            center={[
              data.results[0].locations[0].latLng.lat,
              data.results[0].locations[0].latLng.lng,
              // 50.8503 , -4.3517
            ]}
            zoom={12.5}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map(
              ({name, lat, lon, workstations}, idx) => (
                <Marker position={[lat, lon]}>
                  <Popup>
                 <h6>{name}'s bubble<br></br> has {workstations} workstations <br></br>available</h6>
                 <button>Join</button>
                  </Popup>
                </Marker>
              )
              //change the popup to include data about the bubble
            )}
          </MapContainer>
        )}
      </div>
    </div>
  );
}

export default APImap;
