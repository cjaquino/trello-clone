import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListSuccess(list) {
  return { type: types.CREATE_LIST_SUCCESS, list };
}

export function createList(title, boardId, callback) {
  return function(dispatch) {
    apiClient.createList(title, boardId, data => {
      dispatch(createListSuccess(data));

      if (callback) {
        callback(data);
      }
    });
  };
}

export function updateListSuccess(list) {
  return { type: types.UPDATE_LIST_SUCCESS, list}
}

export function updateList(title, listId, callback) {
  return function(dispatch) {
    apiClient.updateList(title, listId, data => {
      dispatch(updateListSuccess(data));

      if (callback) {
        callback(data);
      }
    });
  };
}