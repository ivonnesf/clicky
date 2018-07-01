import React from "react";
import "./FriendCard.css";

const friendCard = (props) => (
  <div className="card">
    <div className="img-container">
      <img
        alt= {props.name}
        src={props.image}
      />
    </div>
  </div>
);
export default friendCard;
