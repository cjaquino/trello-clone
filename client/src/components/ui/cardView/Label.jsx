import React from "react";

const Label = ({ color }) => {
  return (
    <div className="member-container">
      <div className={`${color} label colorblindable`}></div>
    </div>
  );
};

export default Label;