import React from "react";

const CardLabel = ({ label }) => {
  // possible labels: green, yellow, red, orange, blue, purple
  return (
    <div className={`card-label ${label} colorblindable`}></div>
  );
};

export default CardLabel;