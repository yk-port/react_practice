import React from 'react';

export default class addGroupDialog extends React.Component {
  render() {
    return (
      <div className="modal-layer">
        <div className="dialog">
          <div className="dialog-header">グループ作成</div>
          <div className="dialog-content">
            グループ名：
            <input
              type="text"
              name="groupName"
              className="group-text-input" />
          </div>
          <div className="dialog-footer">
            <button
              className="cancel-button">キャンセル</button>
            <button
              className="save-button">保存</button>
          </div>
        </div>
      </div>
    );
  }
}
