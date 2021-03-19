import React from 'react';
import MapBubbles from "./MapBubbles"
// import MapBubbleForm from "./MapBubbleForm";


function MapWithNewBubble(props) {



    return (
        <div className="NewBubble">
           <h2>Your new bubble has been created</h2>
           <p>Welcome {props.bubble.name}</p>
            <p> You have {props.bubble.workstations} workstations to offer</p>
            <MapBubbles />
        </div>
    );
}

export default MapWithNewBubble;