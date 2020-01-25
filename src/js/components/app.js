import React from 'react';
import SideArea from './sideArea';
import MainArea from './mainArea';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupList: [
        { id: 'inbox', label: '受信箱' },
        { id: 'group-1', label: 'グループ1' },
        { id: 'group-2', label: 'グループ2' },
      ],
      todoList: {
        'inbox': [
          { id: 1, label: 'Todo1', completed: false },
          { id: 2, label: 'Todo2', completed: false },
        ],
        'group-1': [
          { id: 3, label: 'Todo3', completed: false },
          { id: 4, label: 'Todo4', completed: false },
        ],
        'group-2': [
          { id: 5, label: 'Todo5', completed: false },
        ]
      },
      todoCount: 5,
      selectedGroup: 'group-1'
    }
  }

  onAddTodo(label) {
    let _state = Object.assign({}, this.state);
    _state.todoCount++;
    let todoList = _state.todoList[_state.selectedGroup];
    let todoItem = { id: _state.todoCount, label, completed: false }
    todoList.push(todoItem);
    this.setState(_state);
  }

  onCompleteTodo(id) {
    let _state = Object.assign({}, this.state);
    let todoList = _state.todoList[_state.selectedGroup];
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id == id) {
        todoList[i].completed = true;
        break;
      }
    }
    this.setState(_state);
  }

  onDeleteTodo(id) {
    let _state = Object.assign({}, this.state);
    let todoList = _state.todoList[_state.selectedGroup];
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id == id) {
        todoList[i].splice(i, 1);
        break;
      }
    }
    this.setState(_state);
  }

  onSelectGroup(id) {
    this.setState({ selectedGroup: id });
  }

  render() {
    return (
      <div className="wrap">
        <SideArea
          groupList={this.state.groupList}
          onSelect={this.onSelectGroup.bind(this)} />
        <MainArea
          todoList={this.state.todoList[this.state.selectedGroup]}
          onAddTodo={this.onAddTodo.bind(this)}
          onCompleteTodo={this.onCompleteTodo.bind(this)}
          onDeleteTodo={this.onDeleteTodo.bind(this)} />
      </div>
    )
  }
}