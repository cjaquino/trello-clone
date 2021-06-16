// TODO: make card actions
export default function cards(state = [], action) {
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
      default:
        return state;
    }
  }

  