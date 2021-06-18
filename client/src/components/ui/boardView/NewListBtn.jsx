import React, { useState } from "react";

const NewListBtn = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = (ev) => {
    ev.preventDefault();
    setShowForm(!showForm);
  };

  let selected = showForm ? "selected" : "";

  return (
    <div id="new-list" className={`new-list ${selected}`}>
      <span onClick={toggleForm}>Add a list...</span>
      <input type="text" placeholder="Add a list..." />
      <div>
        <input type="submit" className="button" value="Save" />
        <i onClick={toggleForm} className="x-icon icon"></i>
      </div>
    </div>
  );
};

export default NewListBtn;