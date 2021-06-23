import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../../actions/CardActions";

const AddDropdown = ({
  pos,
  listId
}) => {
  const [cardInput, setCardInput] = useState("");
  const dispatch = useDispatch();

  const updateCard = (ev) => {
    setCardInput(ev.target.value);
  }

  const handleAddCard = () => {
    dispatch(createCard(cardInput, listId));
    setCardInput("");
  }



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
          <textarea name="add-card" onChange={updateCard} value={cardInput}></textarea>
          <div className="members"></div>
        </div>
        <a className="button" onClick={handleAddCard}>Add</a>
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