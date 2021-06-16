// TODO: make list actions
export default function lists(state = [], action) {
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
  
/**
boards = [{B1}, {B2}, {B3}]

lists = [] - visit B1 -> [{L1B1}, {L2B1}]
cards = [] - visit B1 -> [{C1L1}, {C1L2}]

visit B2
lists = [{L1B1}, {L2B1}, {L1B2}] OR [{L1B2}]

 */