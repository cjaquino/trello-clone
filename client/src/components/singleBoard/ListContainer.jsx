import React, { useEffect } from "react";

const ListContainer = ({lists}) => {
  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {lists}
      </div>
    </div>
  )
}

export default ListContainer;