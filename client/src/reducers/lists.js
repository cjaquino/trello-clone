export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      return action.board.lists;
    }
    case "UPDATE_LIST_SUCCESS": {
      return state.map(list => {
        if (list._id === action.list._id) {
          return action.list;
        }

        return list;
      })
    }
    default:
      return state;
  }
}
