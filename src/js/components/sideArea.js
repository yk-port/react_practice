import React from 'react';
// import ReactDom from 'react-dom';
import AddGroupDialog from './addGroupDialog';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickGroup(id) {
    this.props.onSelect(id);
  }

  renderGroup() {
    let groupListDom = [];
    for (let i = 0; i < this.props.groupList.length; i++) {
      let group = this.props.groupList[i];
      let groupItem = <li key={group.id} onClick={() => this.onClickGroup(group.id)}>{group.label}</li>
      groupListDom.push(groupItem);
    }
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
    )
  }
}