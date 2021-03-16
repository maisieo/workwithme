import React from 'react';
import MapBubbles from "./MapBubbles"
import MapBubbleForm from "./MapBubbleForm"

function NewBubble(props) {
    return (
        <div className="NewBubble">
            Join an existing Bubble
            <MapBubbleForm /*onSubmit={location => ocation(location)}*//>
            <MapBubbles/>
        </div>
    );
}

export default NewBubble;