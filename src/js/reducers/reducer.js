import { combineReducers } from 'redux';
import { todoActionNames } from '../actions/todoActions';
import { groupActionNames } from '../actions/groupActions'
import _ from 'lodash';

const initialState = {
  groupList: [
    { id: 'inbox', label: '受信箱' },
    { id: 'group-1', label: 'グループ1' },
    { id: 'group-2', label: 'グループ2' },
  ],
  todoList: {
    'inbox': [
      { id: 'item-1', label: 'Todo1', completed: false },
      { id: 'item-2', label: 'Todo2', completed: false },
    ],
    'group-1': [
      { id: 'item-3', label: 'Todo3', completed: false },
      { id: 'item-4', label: 'Todo4', completed: false },
    ],
    'group-2': [
      { id: 'item-5', label: 'Todo5', completed: false },
      { id: 'item-6', label: 'Todo6', completed: false },
    ]
  },
  selectedGroup: 'inbox',
  groupCount: 2,
  todoCount: 6,
}

function todoReducer(state, action) {
  let _state = _.cloneDeep(state);
  let todoList = {};

  switch (action.type) {
    case todoActionNames.ADD_TODO:
      _state.todoCount++;
      todoList = _state.todoList[_state.selectedGroup];
      let todoItem = {
        id: 'item' + _state.todoCount,
        label: action.payload.data,
        completed: false,
      };
      todoList.push(todoItem);
      return _state;
    case todoActionNames.COMPLETE_TODO:
      todoList = _state.todoList[_state.selectedGroup];
      todoList.forEach(todo => {
        if (todo.id == action.payload.id) {
          todo.completed = true;
        }
      });
      return _state;
    case todoActionNames.DELETE_TODO:
      todoList = _state.todoList[_state.selectedGroup];
      todoList.forEach((todo, index) => {
        if (todo.id == action.payload.id) {
          todoList.splice(index, 1);
        }
      });
      return _state;
    default:
      return state;
  }
}

function groupReducer(state, action) {
  let _state = _.cloneDeep(state);

  switch (action.type) {
    case groupActionNames.ADD_GROUP:
      _state.groupCount++;
      let groupId = 'group-' + _state.groupCount;
      let groupItem = {
        id: groupId,
        label: action.payload.data,
      }
      _state.groupList.push(groupItem);
      _state.todoList[groupId] = [];
      return _state;
    case groupActionNames.SELECT_GROUP:
      _state.selectedGroup = action.payload.id
      return _state;
    case groupActionNames.EDIT_GROUP:
      _state.groupList.forEach(group => {
        if (group.id == action.payload.id) {
          group.label = action.payload.groupName;
        }
      });
      return _state;
    case groupActionNames.DELETE_GROUP:
      _state.groupList.forEach((group, index) => {
        if (group.id == action.payload.id) {
          _state.groupList.splice(index, 1);
        }
      });
      delete _state.todoList[action.payload.id];
      if (_state.selectedGroup == action.payload.id) {
        _state.selectedGroup = 'inbox';
      }
      return _state;
    default:
      return state;
  }
}

const reducer = combineReducers({
  todoReducer,
  groupReducer
});

export default reducer;
