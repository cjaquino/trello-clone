import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from "../../../actions/CardActions";

const AddDropdown = ({
  pos,
  listId,
  isActive,
  onAddCardOpen,
  onAddCardClose
}) => {
  const [cardInput, setCardInput] = useState("");
  const dispatch = useDispatch();

  const updateCard = (ev) => {
    setCardInput(ev.target.value);
  }

  const handleKeyDown = (ev) => {
    if (ev.key === "Enter") {
      handleAddCard()
    }
  }

  const handleAddCard = () => {
    if (cardInput !== "") {
      dispatch(createCard(cardInput, listId));
      setCardInput("");
      onAddCardClose();
    }
  }

  const handleAddCardOpen = () => {
    onAddCardOpen(listId);
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
      <div className={`add-dropdown add-bottom ${isActive ? "active-card" : ""}`}>
        <div className="card">
          <div className="card-info"></div>
          <textarea name="add-card" onKeyDown={handleKeyDown} onChange={updateCard} value={cardInput}></textarea>
          <div className="members"></div>
        </div>
        <a className="button" onClick={handleAddCard}>Add</a>
        <i className="x-icon icon" onClick={onAddCardClose}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
      <div className="add-card-toggle" data-position="bottom" onClick={handleAddCardOpen}>
        Add a card...
      </div>
      </>
    );
  }
};

export default AddDropdown;