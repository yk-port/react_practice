import React from 'react';

export default class listItem extends React.Component {
  onChangeCheckBox(event) {
    this.props.completeTodo(event.target.value);
  }

  render() {
    return (
      <li className="todo-list-item">
        <input type="checkbox"
               value={this.props.data.id}
               onChange={this.onChangeCheckBox.bind(this)} />
        {this.props.data.label}
      </li>
    );
  }
}
