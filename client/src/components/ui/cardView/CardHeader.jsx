import React from "react";
import { useSelector } from "react-redux";

const CardHeader = () => {
  const modal = useSelector((state) => state.modal);
  const card = modal.cardInfo;
  const list = useSelector((state) => state.lists.filter(l => l._id === card.listId));
  
  return (
    <header>
      <i className="card-icon icon .close-modal"></i>
      <textarea className="list-title" style={{ height: "45px" }} defaultValue={card.title} />
      <p>
        in list <a className="link">{list.length === 0 ? "Loading..." : list[0].title}</a>
        <i className="sub-icon sm-icon"></i>
      </p>
    </header>
  );
};

export default CardHeader;