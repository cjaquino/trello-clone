import React from "react";
import { useSelector } from "react-redux";
import AddDropdown from "./AddDropdown";
import Card from "./Card";

const List = ({ id }) => {
  const list = useSelector((state) => state.boards.lists.find((l) => l._id === id));
  console.log(list);
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <p className="list-title">{list.title}</p>
          </div>
          <AddDropdown pos="top" />
          <div id="cards-container" data-id="list-1-cards">
            {list.cards.map((c) => <Card key={c._id} />)}
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