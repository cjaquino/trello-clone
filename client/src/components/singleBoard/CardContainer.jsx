import React from "react";
import Card from "./Card"

const CardContainer = ({ cardId }) => {
  return (
    <div id="cards-container" data-id="list-1-cards">
      <Card id={cardId} />
    </div>
  )
}


export default CardContainer;            