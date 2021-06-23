export default function modal(state = { visible: false }, action) {
  switch (action.type) {
    case "FETCH_CARD_SUCCESS": {
      const modal = {
        visible: true,
        cardInfo: action.card,
      };

      return modal;
    }
    case "HIDE_MODAL": {
      return { visible: false }
    }
    default: {
      return state;
    }
  }
}