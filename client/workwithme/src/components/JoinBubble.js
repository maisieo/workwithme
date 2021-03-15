import React from 'react';
import MapBubbles from "./MapBubbles"
import MapBubbleForm from "./MapBubbleForm"

function NewBubble() {
    return (
        <div className="NewBubble">
            Join an existing Bubble
            <MapBubbleForm onSubmit={(location) => getCoordinates(location)} coordinates={coordinates} />
            <MapBubbles coordinates={coordinates}/>
        </div>
    );
}

export default NewBubble;