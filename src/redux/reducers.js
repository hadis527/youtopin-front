import { combineReducers } from 'redux';
import ToDo from './toDo/reducer';

const reducers = combineReducers({
  ToDo,
});

export default reducers;