export default function lists(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      return action.payload.board.lists;
    }
    case "LIST_ADDED_SUCCESS": {
      return state.concat(action.list);
    }
    default:
      return state;
  }
}
