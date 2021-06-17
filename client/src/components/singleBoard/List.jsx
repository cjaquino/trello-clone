import React from "react";
import { useSelector } from "react-redux";
import CardContainer from "./CardContainer";
import AddDropdown from "./AddDropdown";

const List = ({
  title,
  id
}) => {
  const allCards = useSelector((state) => state.cards);
  const cards = allCards.filter(c => c.listId === id);

  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <p className="list-title">{title}</p>
          </div>
          <AddDropdown pos="top" />
          {cards.map(c => <CardContainer key={c._id} cardId={c._id} />)}
          <AddDropdown pos="bottom" />
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;