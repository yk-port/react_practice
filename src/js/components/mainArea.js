import React from 'react';

import Header from './header';
import Footer from './footer';
import ListItem from './listItem';

export default class MainArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInputValue: '',
    }
  }

  onChangeTodoInput(event){
    this.setState({ todoInputValue: event.target.value })
  }

  onClickAddButton(event) {
    let addItem = { label: this.state.todoInputValue };
    let todos = this.state.todos.slice();
    todos.push(addItem);

    this.setState({
      todos,
      todoInputValue: '',
    });
  }

  onCompleteTodo(id) {
    this.props.onCompleteTodo(id);
  }

  onDeleteTodo(id) {
    this.props.onDeleteTodo(id);
  }

  renderTodoItems() {
    let todoItemDom = [];
    this.props.todoList.forEach((todo) => {
      if (!todo.completed) {
        let todoItem = <ListItem
                          key={todo.id}
                          data={todo}
                          completeTodo={() => this.onCompleteTodo(todo.id)}
                          deleteTodo={() => this.onDeleteTodo(todo.id)} />;
        todoItemDom.push(todoItem);
      }
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
    );
  }
}
