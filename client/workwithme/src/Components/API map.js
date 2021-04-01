import { useState, React, useEffect } from "react";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
import MapBubbleForm from "./MapBubbleForm";
import { popupContent, popupHead, popupText, okText } from "./PopupStyles";
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
  let bubblesCoArray = [];
  let resultsArray = [];
  let bubblesData = null;
  let bubbleData = [];
  let bubblesArray = [];
  let objs = [];

  useEffect(() => {
    // Update the document title using the browser API
    getCoordinatesOfDB();
  });
  let URLpart = "";
  let locationOfBubbles = bubbles.map((b) => [b.location]);
  console.log("These are the locations", locationOfBubbles);
  console.log("bubbles", bubbles);

  function getCoordinatesOfDB() {
    locationOfBubbles.forEach(
      (location) => (URLpart += `&location=${location[0]}`)
    );
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
        resultsArray = data.results;
        resultsArray.forEach((location) =>
          coordinatesOfLocations.push([
            location.locations[0].latLng.lat,
            location.locations[0].latLng.lng,
          ])
        );
        bubblesCoArray.push(Object.values(coordinatesOfLocations));
        bubblesData = bubblesCoArray[0];
        bubbleData = bubbles.map((e) => [e.firstname, e.workstations]);
        bubblesArray = bubbleData.map((item, idx) => [...item, ...bubblesData[idx]]);
        objs = bubblesArray.map(function (x) {
          return {
            name: x[0],
            workstations: x[1],
            lat: x[2],
            lon: x[3],
          };
        });

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
        {bubblesData}
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

            {markers &&
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
                        {name}'s bubble has {workstations} workstations free!{" "}
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
