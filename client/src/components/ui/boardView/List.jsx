import React from "react";
import { useSelector } from "react-redux";
import AddDropdown from "./AddDropdown";
import CardsContainer from "./CardsContainer";

const List = ({ id }) => {
  const list = useSelector((state) => state.boards.lists.find((l) => l._id === id));
  return (
    <div className="list-wrapper">
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            <p className="list-title">{list.title}</p>
          </div>
          <AddDropdown pos="top" />
          <CardsContainer listId={id} />
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