import React from "react";
import { useSelector } from "react-redux";
import List from "./List";

const ListContainer = () => {
  const lists = useSelector((state) => state.lists);

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists.map(l => <List title={l.title} id={l._id} key={l._id} />)}
      </div>
    </div>
  )
}

export default ListContainer;