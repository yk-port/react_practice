import React from 'react';
import Header from './header';
import Footer from './footer';
import ListItem from './listItem';

export default class MainArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, label: 'Todo1' },
        { id: 2, label: 'Todo2' },
        { id: 3, label: 'Todo3' },
        { id: 4, label: 'Todo4' },
        { id: 5, label: 'Todo5' },
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

  onCompleteTodo(data) {
  }

  renderTodoItems() {
    let todoItemDom = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      let todoItem = <ListItem
                        key={"item-" + i}
                        data={this.state.todos[i]}
                        completeTodo={this.onCompleteTodo.bind(this)}
                     />;
      todoItemDom.push(todoItem);
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