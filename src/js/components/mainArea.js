import React from 'react';
import Header from './header';
import Footer from './footer';
import ListItem from './listItem';

export default class MainArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, label: 'Todo1', completed: false },
        { id: 2, label: 'Todo2', completed: false },
        { id: 3, label: 'Todo3', completed: false },
        { id: 4, label: 'Todo4', completed: false },
        { id: 5, label: 'Todo5', completed: false },
      ],
      todoInputValue: ''
    }
  }

  onChangeTodoInput(event) {
    this.setState({todoInputValue: event.target.value})
  }

  onClickAddButton(event) {
    let addItem = {label: this.state.todoInputValue};
    let todos = this.state.todos.slice();
    todos.push(addItem);

    this.setState({
      todos: todos,
      todoInputValue: ''
    });
  }

  onCompleteTodo(id) {
    let _state = Object.assign({}, this.state);
    for (let i = 0; i < _state.todos.length; i++) {
      if (_state.todos[i].id == id) {
        _state.todos[i].completed = true;
        break;
      }
    }
    this.setState(_state);
  }

  renderTodoItems() {
    let todoItemDom = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      if (!this.state.todos[i].completed) {
        let todoItem = <ListItem
                         key={"item-" + i}
                         data={this.state.todos[i]}
                         completeTodo={this.onCompleteTodo.bind(this)}
                       />;
        todoItemDom.push(todoItem);
      }
    }
    return todoItemDom;
  }

  render() {
    return (
      <div className="main-area">
        <Header />
        <main className="list-area">
          <div className="todo-input-area">
            <input type="text"
                   className="todo-input"
                   placeholder="Todoを追加"
                   value={this.state.todoInputValue}
                   onChange={this.onChangeTodoInput.bind(this)} />
            <button className="add-button"
                    onClick={this.onClickAddButton.bind(this)}>登録</button>
          </div>
          <ul className="todo-list">
            {this.renderTodoItems()}
          </ul>
        </main>
        <Footer />
      </div>
    )
  }
}