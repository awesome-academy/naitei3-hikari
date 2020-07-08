import React from 'react';
import { connect } from 'react-redux';
import { IndexComponent } from './IndexComponent';
import { withRouter } from 'react-router';
import { getUsers } from '../../actions/user_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (request) => dispatch(getUsers(request))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(IndexComponent));
