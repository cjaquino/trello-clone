import React from "react";
import { useSelector } from "react-redux";

const Card = ({ id }) => {
  const allCards = useSelector(state => state.cards);
  const currentCard = allCards.find(c => c._id === id);

  const labels = currentCard.labels.map(l => {
    return <div className={`card-label ${l} colorblindable`} key={`${l}${id}`}></div>
  });

  let dateLabel = <></>;

  if (currentCard.dueDate !== null) {
    const monDay = (new Date(currentCard.dueDate)).toDateString();
    let elems = monDay.split(" ");

    dateLabel = <i className="clock-icon sm-icon overdue-recent completed">
      {elems[1]} {elems[2]}
    </i>;
  }
  
  return (
    <div className="card-background">
      <div className="card ">
        <i className="edit-toggle edit-icon sm-icon"></i>
        <div className="card-info">
          {labels}
          <p>
            {currentCard.title}
          </p>
        </div>
        <div className="card-icons">
          {dateLabel}
          <i className="description-icon sm-icon"></i>
          <i className="comment-icon sm-icon"></i>
        </div>
      </div>
    </div>
  )
}

export default Card;