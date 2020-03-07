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
    }
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
          <ul className="todo-list">
            {this.renderTodoItems()}
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}
