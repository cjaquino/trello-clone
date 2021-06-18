import React, { useState } from "react";
import * as actions from "../../../actions/ListActions";
import { useDispatch, useSelector } from "react-redux";

const NewListBtn = () => {
  const [showForm, setShowForm] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const board = useSelector(state => state.boards);

  const dispatch = useDispatch();

  const toggleForm = () => {
    setShowForm(!showForm);
    setTitleInput("");
  };

  const updateTitle = (ev) => {
    setTitleInput(ev.target.value);
  };

  const saveList = (ev) => {
    ev.preventDefault();
    if (titleInput !== "") {
      dispatch(actions.createList(titleInput, board._id, toggleForm));
    }
  }

  let selected = showForm ? "selected" : "";

  return (
    <div id="new-list" className={`new-list ${selected}`}>
      <span onClick={toggleForm}>Add a list...</span>
      <input onChange={updateTitle} value={titleInput} type="text" placeholder="Add a list..." />
      <div>
        <input onClick={saveList} type="submit" className="button" value="Save" />
        <i onClick={toggleForm} className="x-icon icon"></i>
      </div>
    </div>
  );
};

export default NewListBtn;