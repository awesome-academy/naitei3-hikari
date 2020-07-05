import React from 'react';
import {connect} from 'react-redux';
import LoginModalComponent from './LoginModalComponent';
import { toggleLoginModal } from '../../actions/ui_actions';
import { resetErrors } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: {
      username: "",
      password: ""
    },
    modalStatus: state.ui.modal,
    modalTab: state.ui.formType
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginModal: (status, formType) => dispatch(toggleLoginModal(status, formType)),
    resetErrors: () => dispatch(resetErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModalComponent);