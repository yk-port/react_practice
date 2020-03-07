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
      ],
      TodoInputValue: '',
    }
  }

  onChangeTodoInput(event){
    this.setState({ TodoInputValue: event.target.value })
  }

  onClickAddButton(event) {

  }

  renderTodoItems() {
    let todoItemDom = [];
    this.state.todos.forEach((todo, index) => {
      let todoItem = <li className="todo-list-item" key={"item-" + index}>{todo.label}</li>;
      todoItemDom.push(todoItem);
    });
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
                   value={this.state.TodoInputValue}
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
    );
  }
}
