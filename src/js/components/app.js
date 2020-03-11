import React from 'react';
import MainArea from '../containers/mainArea';
import SideArea from '../containers/sideArea';

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
  }

  onAddTodo(label) {
    let _state = Object.assign(this.state);
    _state.todoCount++;
    let todoList = _state.todoList[_state.selectedGroup];
    let todoItem = {
      label,
      id: 'item' + _state.todoCount,
      completed: false,
    };
    todoList.push(todoItem);
    this.setState(_state);
  }

  onCompleteTodo(id) {
    let _state = Object.assign(this.state);
    let todoList = _state.todoList[_state.selectedGroup];
    todoList.forEach(todo => {
      if (todo.id == id) {
        todo.completed = true;
      }
    });
    this.setState(_state);
  }

  onDeleteTodo(id) {
    let _state = Object.assign(this.state);
    let todoList = _state.todoList[_state.selectedGroup];
    todoList.forEach((todo, index) => {
      if (todo.id == id) {
        todoList.splice(index, 1);
      }
    });
    this.setState(_state);
  }

  onSelectGroup(id) {
    this.setState({ selectedGroup: id });
  }

  onAddGroup(groupName) {
    let _state = Object.assign({}, this.state)
    _state.groupCount++;
    let groupId = 'group-' + _state.groupCount;
    let groupItem = {
      id: groupId,
      label: groupName
    }
    _state.groupList.push(groupItem);
    _state.todoList[groupId] = [];
    this.setState(_state);
  }

  onEditGroup(id, groupName) {
    let _state = Object.assign({}, this.state);
    _state.groupList.forEach(group => {
      if (group.id == id) {
        group.label = groupName;
      }
    });
    this.setState(_state);
  }

  onDeleteGroup(id) {
    let _state = Object.assign({}, this.state);
    _state.groupList.forEach((group, index) => {
      if (group.id == id) {
        this.state.groupList.splice(index, 1);
      }
    });
    delete _state.todoList[id];
    if (_state.selectedGroup == id) {
      _state.selectedGroup = 'inbox';
    }
    this.setState(_state);
  }

  render() {
    let groupName = '';
    this.state.groupList.forEach(group => {
      if (group.id == this.state.selectedGroup) {
        groupName = group.label;
      }
    });

    return (
      <div className="wrap">
        <SideArea
          onSelect={this.onSelectGroup.bind(this)}
          onEditGroup={this.onEditGroup.bind(this)}
          onDeleteGroup={this.onDeleteGroup.bind(this)} />
        <MainArea />
      </div>
    );
  }
}
