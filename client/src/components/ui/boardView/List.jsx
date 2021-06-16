import React from "react";
import AddDropdown from "./AddDropdown";
import Card from "./Card";

const List = ({
  title,
}) => {
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <p className="list-title">{title}</p>
          </div>
          <AddDropdown pos="top" />
          <div id="cards-container" data-id="list-1-cards">
            <Card />
          </div>
          <AddDropdown pos="bottom" />
          <div className="add-card-toggle" data-position="bottom">
            Add a card...
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;