import { todoActionNames } from '../actions/todoActions';

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
      { id: 'item-7', label: 'Todo7', completed: false },
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActionNames.ADD_TODO:
      let _state = Object.assign({}, state);
      _state.todoCount++;
      let todoList = _state.todoList[_state.selectedGroup];
      let todoItem = {
        id: 'item' + _state.todoCount,
        label: action.payload.data,
        completed: false,
      };
      todoList.push(todoItem);
      return _state;
    default:
      return state;
  }
}

export default reducer;
