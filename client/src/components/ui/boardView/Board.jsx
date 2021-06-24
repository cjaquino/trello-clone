import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { useParams, useLocation } from "react-router-dom";
import { fetchBoard } from "../../../actions/BoardActions";
import { fetchCard } from "../../../actions/CardActions";
import MenuSidebar from "./MenuSidebar";
import ListContainer from "./ListContainer";
import Modal from "../cardView/Modal";

const Board = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  let { pathname } = useLocation();

  const board = useSelector((state) => state.boards);

  useEffect(() => {
    if (pathname.includes("cards")) {
      dispatch(fetchCard(id, (card) => {
        dispatch(fetchBoard(card.boardId));
      }));
    } else {
      dispatch(fetchBoard(id));
    }
  }, [dispatch, id, pathname]);

  return (
    <>
      <Header title={board.title} />
      <main>
        <ListContainer />
      </main>
      <MenuSidebar />
      <Modal />
      <div id="dropdown-container"></div>
    </>
  );
};

export default Board;