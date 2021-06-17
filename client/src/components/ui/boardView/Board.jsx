import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { fetchBoard } from "../../../actions/BoardActions";
import MenuSidebar from "./MenuSidebar";
import ListContainer from "./ListContainer";

const Board = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  const board = useSelector((state) => state.boards);

  useEffect(() => {
    dispatch(fetchBoard(id));
  }, [dispatch, id]);

  return (
    <>
      <Header title={board.title} />
      <main>
        <ListContainer />
      </main>
      <MenuSidebar />
      <div id="modal-container"></div>
      <div id="dropdown-container"></div>
    </>
  );
};

export default Board;