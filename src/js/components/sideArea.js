import React from 'react';
import ReactDOM from 'react-dom';

import AddGroupDialog from './addGroupDialog';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddGroupDialog: false,
    }
  }

  onClickGroup(event) {
    let listItem = ReactDOM.findDOMNode(event.target);
    let clickedId = listItem.dataset.id;
    this.props.onSelect(clickedId);
  }

  onClickAddGroup() {
    this.setState({ showAddGroupDialog: true });
  }

  onSaveAddGroupDialog() {
    this.setState({ showAddGroupDialog: false });
  }

  onCancelAddGroupDialog() {
    this.setState({ showAddGroupDialog: false });
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
        <AddGroupDialog
          show={this.state.showAddGroupDialog}
          onSave={this.onSaveAddGroupDialog.bind(this)}
          onCancel={this.onCancelAddGroupDialog.bind(this)} />
        <div className="side-area-footer">
          <button
            onClick={this.onClickAddGroup.bind(this)}>グループ作成</button>
        </div>
      </div>
    );
  }
}
