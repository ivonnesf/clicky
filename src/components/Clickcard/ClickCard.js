import React from "react";

const ClickCard = props => (
	<div onClick={() => props.setClicked(props.id)} className="card">
		<div className="img-container">
      		<img src={props.image} />
    	</div>
  </div>
);

export default ClickCard;