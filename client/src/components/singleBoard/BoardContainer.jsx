import Header from "./Header"
import ListContainer from "./ListContainer"
import React, {useEffect} from "react"
import { useDispatch } from "react-redux";
import { getBoard } from '../../actions/BoardActions';
import { useParams } from "react-router-dom";

const BoardContainer = () => {
  const dispatch = useDispatch();

  let { id } = useParams();

  useEffect(() => {
  dispatch(getBoard(id));
  }, [dispatch, id])

  return (
    <>
      <Header />
      <ListContainer />
    </>
  )   
}

export default BoardContainer