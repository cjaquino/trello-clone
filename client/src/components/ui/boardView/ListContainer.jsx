import React from "react";
import { useSelector } from "react-redux";
import List from "./List";
import NewListBtn from "./NewListBtn";

const ListContainer = () => {
  const lists = useSelector(state => state.lists);
  
  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {
          lists.map((l) => <List key={l._id} id={l._id} addDropdownClass="add-dropdown-active" />)
        }
      </div>
      <NewListBtn />
    </div>
  )
};

export default ListContainer;