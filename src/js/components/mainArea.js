import React from 'react';
import Header from './header';
import Footer from './footer';

export default class MainArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { label: 'Todo1' },
        { label: 'Todo2' },
        { label: 'Todo3' },
        { label: 'Todo4' },
        { label: 'Todo5' },
      ],
      todoInputValue: ''
    }
  }

  onChangeTodoInput(event) {
  }

  onClickAddButton(event) {
  }

  renderTodoItems() {
    let todoItemDom = [];
    for (let i = 0; i < this.state.todos.length; i++) {
      let todoItem = <li className="todo-list-item" key={"item-" + i}>{this.state.todos[i].label}</li>;
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
                   onChange={this.onChangeTodoInput} />
            <button className="add-button"
                    onClick={this.onClickAddButton}>登録</button>
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