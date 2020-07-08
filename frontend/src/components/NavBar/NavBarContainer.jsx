import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { toggleLoginModal, toggleUserDrop } from '../../actions/ui_actions';
import { logout } from '../../actions/user_actions';

import NavBarComponent from './NavBarComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    modalStatus: state.ui.modal,
    state: state,
    userDropDownStatus: state.ui.userDropDown.status,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loginModal: (status, formType) => dispatch(toggleLoginModal(status, formType)),
    logout: () => dispatch(logout()),
    toggleUserDrop: (status) => dispatch(toggleUserDrop(status))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarComponent));
