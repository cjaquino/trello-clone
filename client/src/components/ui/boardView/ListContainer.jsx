import React,  { useState } from "react";
import { useSelector } from "react-redux";
import List from "./List";
import NewListBtn from "./NewListBtn";

const ListContainer = () => {
  const [activeListId, setActiveListId] = useState("");
  const lists = useSelector(state => state.lists);
  
  const handleAddCardOpen = (listId) => {
    setActiveListId(listId);
  }

  const handleAddCardClose = () => {
    setActiveListId("");
  }

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {
          lists.map((l) => {
            return (
              <List
                key={l._id}
                id={l._id}
                isActive={activeListId === l._id}
                onAddCardOpen={handleAddCardOpen}
                onAddCardClose={handleAddCardClose}
              />
            )
          })
        }
      </div>
      <NewListBtn />
    </div>
  )
};

export default ListContainer;