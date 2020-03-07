import React from 'react';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickGroup(id) {
    this.props.onSelect(id);
  }

  renderGroup() {
    let groupListDom = [];
    this.props.groupList.forEach(group => {
      let groupItem = <li key={group.id}
                          onClick={() => this.onClickGroup(group.id)}>
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
      </div>
    );
  }
}
