import { AppComponent } from './AppComponent';
import { connect } from 'react-redux';
import React from 'react';
import { toggleUserDrop } from '../../actions/ui_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    userDropDownStatus: state.ui.userDropDown.status
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleUserDrop: (status) => dispatch(toggleUserDrop(status))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
