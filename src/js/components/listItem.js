import React from 'react';

export default class listItem extends React.Component {
  render() {
    return (
      <li className="todo-list-item">{this.props.data}</li>
    );
  }
}
