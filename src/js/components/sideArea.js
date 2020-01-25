import React from 'react';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupList: [
        { id: 'inbox', label: '受信箱' },
        { id: 'group-1', label: 'グループ1' },
      ]
    }
  }

  renderGroup() {
    let groupListDom = [];
    for (let i = 0; i < this.state.groupList.length; i++) {
      let group = this.state.groupList[i];
      let groupList = <li key={group.id}>{group.label}</li>
      groupListDom.push(groupList);
    }
    return groupListDom;
  }

  render() {
    return (
      <div className="side-area">
        <ul className="group-list">
          {this.renderGroup()}
        </ul>
      </div>
    )
  }
}