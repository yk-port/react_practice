import React from 'react';

export default class listItem extends React.Component {
  onChangeCheckBox(event) {
    this.props.completeTodo(event.target.value);
  }

  onClickDeleteButton(event) {
    this.props.deleteTodo(this.props.data.id);
  }

  render() {
    return (
      <li className="todo-list-item">
        <input type="checkbox"
               value={this.props.data.id}
               onChange={this.onChangeCheckBox.bind(this)} />
        {this.props.data.label}
        <button
          className="delete-button"
          onClick={this.onClickDeleteButton.bind(this)}>×</button>
      </li>
    );
  }
}
