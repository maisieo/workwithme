import React, { useState } from "react";

import MapBubbleForm from "./MapBubbleForm";
import { MapContainer, Map, Marker, Popup, TileLayer } from "react-leaflet";
import APImap from "./API map";
// have a state here that gets updates with the mapbubbleform

function JoinBubble({ bubbles }) {
  const [data, setData] = useState("");

  return (
    <div className="NewBubble">
     
          <APImap data={data} bubbles={bubbles} />
    </div>
  );
}

export default JoinBubble;
