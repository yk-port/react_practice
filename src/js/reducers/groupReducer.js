import { groupActionNames } from '../actions/groupActions';
import _ from 'lodash';

const groupInitState = {
  groupList: [
    { id: 'inbox', label: '受信箱' },
    { id: 'group-1', label: 'グループ1' },
    { id: 'group-2', label: 'グループ2' },
  ],
  groupCount: 2,
  selectedGroup: 'inbox',
}

function groupReducer(state = groupInitState, action) {
  let _state = _.cloneDeep(state);

  switch (action.type) {
    case groupActionNames.ADD_GROUP:
      _state.groupCount++;
      let groupItem = {
        id: action.payload.groupId,
        label: action.payload.data,
      }
      _state.groupList.push(groupItem);
      return _state;
    case groupActionNames.SELECT_GROUP:
      _state.selectedGroup = action.payload.id
      return _state;
    case groupActionNames.EDIT_GROUP:
      _state.groupList.forEach(group => {
        if (group.id == action.payload.id) {
          group.label = action.payload.groupName;
        }
      });
      return _state;
    case groupActionNames.DELETE_GROUP:
      _state.groupList.forEach((group, index) => {
        if (group.id == action.payload.id) {
          _state.groupList.splice(index, 1);
        }
      });
      if (_state.selectedGroup == action.payload.id) {
        _state.selectedGroup = 'inbox';
      }
      return _state;
    default:
      return state;
  }
}

export default groupReducer;
