import React from 'react';
import Header from './header';
import Footer from './footer';

export default class MainArea extends React.Component {
  render() {
    const todos = [
      { label: 'Todo1' },
      { label: 'Todo2' },
    ];

    let todoItemDom = [];
    for (let i = 0; i < todos.length; i++) {
      let todoItem = <li className="todo-list-item">{todos[i].label}</li>;
      todoItemDom.push(todoItem);
    }

    return (
      <div className="main-area">
        <Header />
        <main className="list-area">
          <ul className="todo-list">
            {todoItemDom}
          </ul>
        </main>
        <Footer />
      </div>
    )
  }
}