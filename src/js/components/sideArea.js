import React from 'react';
import ReactDOM from 'react-dom';

import AddGroupDialog from './addGroupDialog';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickGroup(event) {
    let listItem = ReactDOM.findDOMNode(event.target);
    let clickedId = listItem.dataset.id;
    this.props.onSelect(clickedId);
  }

  renderGroup() {
    let groupListDom = [];
    this.props.groupList.forEach(group => {
      let groupItem = <li key={group.id}
                          data-id={group.id}
                          onClick={this.onClickGroup.bind(this)}>
                        {group.label}
                      </li>;
      groupListDom.push(groupItem);
    });
    return groupListDom;
  }

  render() {
    return (
      <div className="side-area">
        <ul className="group-list">
          {this.renderGroup()}
        </ul>
        <AddGroupDialog />
      </div>
    );
  }
}
