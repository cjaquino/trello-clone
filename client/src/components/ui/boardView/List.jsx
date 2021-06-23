import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddDropdown from "./AddDropdown";
import CardsContainer from "./CardsContainer";
import { updateList } from "../../../actions/ListActions"
import useInput from "../../../hooks/useInput";

const List = ({ id, addDropdownClass }) => {
  const [titleEditable, setTitleEditable] = useState(false)
  const list = useSelector((state) => state.boards.lists.find((l) => l._id === id));
  const titleInput = useInput(list.title)

  const dispatch = useDispatch();

  const handleTitleEditable = () => {
    setTitleEditable(!titleEditable)
  }

  const handleEditTitle = (ev) => {
    if (ev.type === 'keydown' && ev.keyCode !== 13) {
      return;
    }

    const listTitle = titleInput.value;
    const listId = list._id;
    dispatch(updateList(listTitle, listId, handleTitleEditable))
  }

  return (
    <div className={`list-wrapper ${addDropdownClass}`}>
      <div className="list-background">
        <div className="list">
          <a className="more-icon sm-icon" href=""></a>
          <div>
            { titleEditable
              ? <input 
                  className="list-title"
                  value={titleInput.value}
                  onChange={titleInput.bind.onChange}
                  autoFocus
                  onBlur={handleEditTitle}
                  onKeyDown={handleEditTitle}
                >
                </input>
              : <p className="list-title" onClick={handleTitleEditable}>{titleInput.value}</p>
            }
          </div>
          <AddDropdown pos="top" />
          <CardsContainer listId={id} />
          <AddDropdown pos="bottom" listId={id} />
        </div>
      </div>
    </div>
  );
};

export default List;