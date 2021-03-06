import React from 'react';
import ReactDOM from 'react-dom';

import AddGroupDialog from './addGroupDialog';
import EditGroupDialog from './editGroupDialog'

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddGroupDialog: false,
      showEditGroupDialog: false,
      selectedGroup: '',
    }
  }

  onClickGroup(event) {
    let listItem = ReactDOM.findDOMNode(event.target);
    let clickedId = listItem.dataset.id;
    this.props.onSelectGroup(clickedId);
  }

  onClickAddGroup() {
    this.setState({ showAddGroupDialog: true });
  }

  onSaveAddGroupDialog(groupName) {
    let groupId = `group-${this.props.groupCount + 1}`;
    this.props.onAddGroup(groupName, groupId);
    this.setState({ showAddGroupDialog: false });
  }

  onCancelAddGroupDialog() {
    this.setState({ showAddGroupDialog: false });
  }

  onClickEditGroup() {
    let editButton = ReactDOM.findDOMNode(event.target);
    let id = editButton.dataset.id;
    let selectedGroup = this.props.groupList.find(group => {
      return group.id == id;
    });
    this.setState({
      selectedGroup,
      showEditGroupDialog: true
    });
  }

  onSaveEditGroupDialog(id, groupName) {
    this.props.onEditGroup(id, groupName);
    this.setState({ showEditGroupDialog: false });
  }

  onCancelEditGroupDialog() {
    this.setState({ showEditGroupDialog: false });
  }

  onDeleteEditGroupDialog(id) {
    this.props.onDeleteGroup(id);
    this.setState({ showEditGroupDialog: false });
  }

  renderGroup() {
    let groupListDom = [];
    this.props.groupList.forEach(group => {
      let groupItem = <li key={group.id}>
                        <span
                          data-id={group.id}
                          onClick={this.onClickGroup.bind(this)}>{group.label}</span>
                        <button
                          data-id={group.id}
                          className="group-edit-button"
                          onClick={this.onClickEditGroup.bind(this)}>編集</button>
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
        <div className="side-area-footer">
          <button
            className="add-group-button"
            onClick={this.onClickAddGroup.bind(this)}>グループ作成</button>
        </div>
        <AddGroupDialog
          show={this.state.showAddGroupDialog}
          onSave={this.onSaveAddGroupDialog.bind(this)}
          onCancel={this.onCancelAddGroupDialog.bind(this)} />
        <EditGroupDialog
          show={this.state.showEditGroupDialog}
          group={this.state.selectedGroup}
          onSave={this.onSaveEditGroupDialog.bind(this)}
          onCancel={this.onCancelEditGroupDialog.bind(this)}
          onDelete={this.onDeleteEditGroupDialog.bind(this)} />
      </div>
    );
  }
}
