import { useState, React, useEffect } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
import MapBubbleForm from "./MapBubbleForm";
import { popupContent, popupHead, popupText, okText } from "./PopupStyles";
const key1 = "3ZRkB6HHC7nuyGx3xGq1wvkQNUZgBEyU"; //separate keys for both batch and single API call
const key2 = "HtjjO4zjuAqWJ5bTcp6HMXp5Ej4uq47i";
const BASEURLmap = "http://www.mapquestapi.com/geocoding/v1/"; // base URL applies for both single and batch call
const BASEURLmap2 = "http://www.mapquestapi.com/geocoding/v1/";
function APImap({ bubbles }) {
  const [data, setData] = useState(""); //useState for data from the single API call
  const [dataLocations, setDataLocations] = useState("");
  const [error, setError] = useState("");
  const [markers, setMarkers] = useState();
  let allBubblesData = null;
  let coordinatesOfLocations = [];
  let bubblesCoArray = [];
  let resultsArray = [];
  let bubblesData = null;
  let bubbleData = [];
  let bubblesArray = [];
  let objs = [];

  useEffect(() => {
    APICallAddition();
    //locations are added to API calls when the page opens
  });

  let URLpart = "";
  let locationOfBubbles = bubbles.map((b) => [b.location]); //gets the locations of individual bubbles in db

  //Each location of the bubbles in the database is added to the end of a "URL part" to be included in API call
  function APICallAddition() {
    locationOfBubbles.forEach(
      (location) => (URLpart += `&location=${location[0]}`)
    );
  }

  //function to use the above URL part to fetch coordinates of all locations in database
  const getBatchData = async () => {
    let url = `${BASEURLmap2}batch?key=${key2}${URLpart}&thumbMaps=true&outFormat=json`;
    setData("");

    try {
      let response = await fetch(url);
      // call fetch, wait for return
      if (response.ok) {
        console.log("Response ok");
        let data = await response.json();
        setDataLocations(data);
        resultsArray = data.results;
        resultsArray.forEach((
          location //finds lat and lng of each location from API data
        ) =>
          coordinatesOfLocations.push([
            location.locations[0].latLng.lat,
            location.locations[0].latLng.lng,
          ])
        );
        //pushes the coordinates to a new array
        bubblesCoArray.push(Object.values(coordinatesOfLocations));
        bubblesData = bubblesCoArray[0]; //accesses a more specific array in the above array
        bubbleData = bubbles.map((e) => [e.firstname, e.workstations]); //gets the firstname and workstations info from bubble data
        bubblesArray = bubbleData.map((item, idx) => [
          ...item,
          ...bubblesData[idx],
        ]); // merges "bubbleData" and "bubblesData"
        //maps data into an object, making it "mappable" later"
        objs = bubblesArray.map(function (x) {
          return {
            name: x[0],
            workstations: x[1],
            lat: x[2],
            lon: x[3],
          };
        });
        //the markers useState is set to be these above objects
        setMarkers(objs);
      } else {
        console.log("Run into an error");
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log("Ended up in catch");
      setError(`Network error: ${err.message}`);
    }
  };

  //gets single map lcoation data when user inputs a location
  const getData = async (location) => {
    let url = `${BASEURLmap}address?key=${key1}&location=${location}`;
    console.log("URL", url);
    setData("");
    //also gets the batch data as a secondary function
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
        {/* {bubblesData} */}
        {data && ( //if location has been added to form and coordinates collect, let center of map be lat lng of that location
          <MapContainer
            center={[
              data.results[0].locations[0].latLng.lat,
              data.results[0].locations[0].latLng.lng,
            ]}
            zoom={12.5}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers && //if there is marker data, map out markers with information about bubbles
              markers.map(({ name, lat, lon, workstations }, idx) => (
                <Marker
                  key={`marker-${idx}`}
                  position={[lat, lon]}
                  // icon={defaultMarker}
                >
                  <Popup className="popup">
                    <div style={popupContent}>
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/co-working/512/coworking-sharing-02-128.png"
                        width="70"
                        height="70"
                      />
                      <div className="m-2" style={popupHead}>
                        {name}'s bubble has {workstations} workstations free!
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
}

export default APImap;
