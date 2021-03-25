import React from "react";
 
const Popup = props => {
  let info = props.bubble;
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        {props.bubble.map(bubble => bubble)}
      </div>
    </div>
  );
};
 
export default Popup;