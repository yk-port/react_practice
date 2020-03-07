import React from 'react';

import Header from './header';
import Footer from './footer';

export default class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <Header />
        <main className="list-area">
          <ul className="todo-list">
            <li className="todo-list-item">Todo1</li>
            <li className="todo-list-item">Todo2</li>
          </ul>
        </main>
        <Footer />
      </div>
    );
  }
}
