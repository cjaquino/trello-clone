import Header from "./Header"
import ListContainer from "./ListContainer"
import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from '../../actions/BoardActions';
import { useParams } from "react-router-dom";

const BoardContainer = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  let { id } = useParams();

  useEffect(() => {
  dispatch(getBoard(id));
  }, [dispatch, id])
  return (
    <>
      <Header />
      <ListContainer lists={board.lists}/>
    </>
  )   
}

export default BoardContainer