export default function boards(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS": {
      return action.board;
    }
    case "FETCH_BOARDS_SUCCESS": {
      return action.boards;
    }
    case "CREATE_BOARD_SUCCESS": {
      const newBoard = action.board;
      return state.concat(newBoard);
    }
    case "CREATE_LIST_SUCCESS": {
      let clonedState = Object.assign({}, state);
      clonedState.lists.push(action.list);
      return clonedState;
    }
    default:
      return state;
  }
}
