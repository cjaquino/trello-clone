import React from "react";

const AddDropdown = ({
  pos,
}) => {
  if (pos === "top") {
    return (
      <div className="add-dropdown add-top">
        <div className="card"></div>
        <a className="button">Add</a>
        <i className="x-icon icon"></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
    );
  } else if (pos === "bottom") {
    return (
      <>
      <div className="add-dropdown add-bottom active-card">
        <div className="card">
          <div className="card-info"></div>
          <textarea name="add-card"></textarea>
          <div className="members"></div>
        </div>
        <a className="button">Add</a>
        <i className="x-icon icon"></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
      <div className="add-card-toggle" data-position="bottom">
        Add a card...
      </div>
      </>
    );
  }
};

export default AddDropdown;