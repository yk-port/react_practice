import { connect } from 'react-redux';
import { todoActions } from '../actions/todoActions';
import MainArea from '../components/mainArea';

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
    groupName: getGroupName(state.groupReducer.groupList, state.groupReducer.selectedGroup),
    todoList: state.todoReducer.todoList[state.groupReducer.selectedGroup],
    selectedGroup: state.groupReducer.selectedGroup,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (label, selectedGroup) => {
      dispatch(todoActions.addTodo(label, selectedGroup));
    },
    onCompleteTodo: (id, selectedGroup) => {
      dispatch(todoActions.completeTodo(id, selectedGroup));
    },
    onDeleteTodo: (id, selectedGroup) => {
      dispatch(todoActions.deleteTodo(id, selectedGroup));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainArea);
