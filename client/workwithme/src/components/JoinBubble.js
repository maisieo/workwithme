import React, { useState } from "react";
import MapBubbles from "./MapBubbles";
import MapBubbleForm from "./MapBubbleForm";

// have a state here that gets updates with the mapbubbleform

function JoinBubble() {
  const [inputCoordinates, setInputCoordinates] = useState([
    52.517037,
    13.38886,
  ]);

  const joiningFunction = (coordinates) => {
    setInputCoordinates(coordinates);
    console.log("These are coordinates", coordinates)
  };

  return (
    <div className="NewBubble">
      Join an existing Bubble
      <MapBubbleForm onSubmit={(coordinates) => joiningFunction(coordinates)} />
      <MapBubbles coordinates={inputCoordinates} />
    </div>
  );
}

export default JoinBubble;
