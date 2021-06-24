import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCard(id, callback) {
  return function(dispatch) {
    apiClient.getCard(id, data => {
      dispatch(fetchCardSuccess(data));

      if (callback) {
        callback(data);
      }
    });
  }
}

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card }
}

export function createCard(cardTitle, listId, callback) {
  return function(dispatch) {
    apiClient.createCard(cardTitle, listId, data => {
      dispatch(createCardSuccess(data))

      if (callback) {
        callback(data);
      }
    });
  }
}