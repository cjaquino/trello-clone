import Header from "./Header"
import ListContainer from "./ListContainer"
import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from '../../actions/BoardActions';
import { useParams } from "react-router-dom";

const BoardContainer = () => {
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
    dispatch(getBoard(id));
  }, [dispatch, id])

  const boards = useSelector(state => state.boards);
  let boardTitle = "Loading...";

  if (boards.length > 0) {
    boardTitle = boards[0].title;
  }

  return (
    <>
      <Header title={boardTitle} />
      <ListContainer />
    </>
  )   
}

export default BoardContainer