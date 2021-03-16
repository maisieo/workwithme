import React, { useState } from 'react';
import MapBubbles from "./MapBubbles"
import MapBubbleForm from "./MapBubbleForm"

// have a state here that gets updates with the mapbubbleform
let coordinates = useState([52.517037, 13.38886]);

function JoinBubble(props) {
    return (
        <div className="NewBubble">
            Join an existing Bubble
            <MapBubbleForm onSubmit={coordinates => getCoordinates(coordinates)}/>
            <MapBubbles coordinates={coordinates}/>
        </div>
    );
}

export default JoinBubble;