import React from 'react';

export default class ListItem extends React.Component {
  render() {
    return(
      <li className="todo-list-item">
        <input type="checkbox"/>
        {this.props.data.label}
      </li>
    )
  }
}