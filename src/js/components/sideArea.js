import React from 'react';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupList: [
        {
          id: 'inbox',
          label: '受信箱',
        },
        {
          id: 'group-1',
          label: 'グループ1',
        },
        {
          id: 'group-2',
          label: 'グループ2',
        },
      ],
    }
  }

  renderGroup() {
    let groupListDom = [];
    this.state.groupList.forEach(group => {
      let groupItem = <li key={group.id}>{group.label}</li>;
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
      </div>
    );
  }
}
