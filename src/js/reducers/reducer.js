import { combineReducers } from 'redux';
import groupReducer from './groupReducer';
import todoReducer from './todoReducer';

const reducer = combineReducers({
  todoReducer,
  groupReducer
})

export default reducer;
