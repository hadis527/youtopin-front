import {
  ADD_TO_DO_LIST,
  UPDATE_TO_DO_LIST,
  DELETE_TO_DO_LIST,
  TO_DO_LIST
} from './const'

export const toDoListView = (data) => ({
  type: TO_DO_LIST,
  payload: data
});
export const addToDoList = (data) => ({
  type: ADD_TO_DO_LIST,
  payload: data
});
export const updateToDoList = (data) => ({
  type: UPDATE_TO_DO_LIST,
  payload: data
});
export const deleteToDoList = (data) => ({
  type: DELETE_TO_DO_LIST,
  payload: data
})

