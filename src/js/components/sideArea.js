import React from 'react';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
