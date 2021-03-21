import React, { useState } from "react";
import MapBubbles from "./MapBubbles";
import MapBubbleForm from "./MapBubbleForm";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
import APImap from "./API map";
// have a state here that gets updates with the mapbubbleform

function JoinBubble() {
  const [data, setData] = useState("");

  return (
    <div className="NewBubble">
      <h3>Join an existing Bubble</h3>
      <APImap data={data} />
    </div>
  );
}

export default JoinBubble;
