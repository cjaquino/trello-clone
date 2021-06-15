import Header from "./Header"
import ListContainer from "./ListContainer"
import List from "./List"

const BoardContainer = () => {
  let lists = [<List />, <List />, <List />]
  return (
    <>
      <Header />
      <ListContainer lists={lists}/>
    </>
  )   
}

export default BoardContainer