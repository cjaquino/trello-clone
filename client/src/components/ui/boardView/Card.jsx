import React from "react";
import CardLabel from "./CardLabel";
import { useDispatch } from "react-redux";
import { fetchCard } from "../../../actions/CardActions";

const Card = ({ card }) => {
  const dispatch = useDispatch();

  const handleFetchCard = () => {
    dispatch(fetchCard(card._id));
  };

  return (
    <div className="card-background">
      <div className="card " onClick={handleFetchCard}>
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {card.labels.map(label => {
            return <CardLabel key={`${label}-${card._id}`} label={label} />
          })}
          <p>{card.title}</p>
        </div>
        <div className="card-icons">
          {card.dueDate !== null
           ? <i className="clock-icon sm-icon overdue-recent completed">
              {(new Date(card.dueDate)).toDateString().slice(4, 11)}
            </i>
           : ""
          }
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
        {/* {showModal ? <Modal /> : ""} */}
      </div>
    </div>
  );
};

export default Card;