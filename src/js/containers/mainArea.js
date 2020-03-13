import { connect } from 'react-redux';
import { todoActions } from '../actions/todoActions';

function getGroupName(groupList, selectedGroup) {
  let groupName = '';
  groupList.forEach(group => {
    if (group.id == selectedGroup) {
      groupName = group.label;
    }
  });
  return groupName;
}

const mapStateToProps = (state) => {
  return {
    groupName: getGroupName(state.groupList, state.selectedGroup),
    todoList: state.todoList[state.selectedGroup],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (data) => {
      dispatch(todoActions.addTodo(data));
    }
  }
}
