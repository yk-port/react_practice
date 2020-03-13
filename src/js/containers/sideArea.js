import { connect } from 'react-redux';
// import { todoActions } from '../actions/todoActions';
import SideArea from '../components/sideArea';

const mapStateToProps = (state) => {
  return {
    groupList: state.groupList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideArea);
