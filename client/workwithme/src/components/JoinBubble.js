import React from 'react';
import MapBubbles from "./MapBubbles"
import MapBubbleForm from "./MapBubbleForm"

function NewBubble() {
    return (
        <div className="NewBubble">
            Join an existing Bubble
            <MapBubbleForm />
            <MapBubbles/>
        </div>
    );
}

export default NewBubble;