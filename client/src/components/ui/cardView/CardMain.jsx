import React from "react";
import { useSelector } from "react-redux";
import Label from "./Label";

const CardMain = () => {
  const modal = useSelector((state) => state.modal);
  const card = modal.cardInfo;
  console.log(card);

  const formatDueDate = () => {
    let date = new Date(card.dueDate);
    let day = date.toDateString().slice(4, 11);

    return `${day} at ${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
  };

  const isPastDue = () => {
    let cardDate = new Date(card.dueDate);
    let today = new Date();

    return cardDate < today;
  };

  return (
    <section className="modal-main">
      <ul className="modal-outer-list">
      <li className="details-section">
        <ul className="modal-details-list">
          <li className="labels-section">
            <h3>Labels</h3>
            {card.labels.map(color => <Label key={`${color}label`} color={color} />)}
            <div className="member-container">
              <i className="plus-icon sm-icon"></i>
            </div>
          </li>
          <li className="due-date-section">
            <h3>Due Date</h3>
            <div id="dueDateDisplay" className="overdue completed">
              <input
                id="dueDateCheckbox"
                type="checkbox"
                className="checkbox"
                checked=""
              />
              {formatDueDate()} {isPastDue() ? <span>(past due)</span> : ""}
            </div>
          </li>
        </ul>
        <form className="description">
          <p>Description</p>
          <span id="description-edit" className="link">
            Edit
          </span>
          <p className="textarea-overlay">
            {card.description}
          </p>
          <p id="description-edit-options" className="hidden">
            You have unsaved edits on this field.{" "}
            <span className="link">View edits</span> -{" "}
            <span className="link">Discard</span>
          </p>
        </form>
      </li>
      </ul>
    </section>
  );
};

export default CardMain;