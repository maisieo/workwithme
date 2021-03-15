import React from 'react';
import MapBubbles from "./MapBubbles"
import MapBubbleForm from "./MapBubbleForm";


function MapWithNewBubble() {
    return (
        <div className="NewBubble">
           Here is your new bubble
            <MapBubbles />
        </div>
    );
}

export default MapWithNewBubble;