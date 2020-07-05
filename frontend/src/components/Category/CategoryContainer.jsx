import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getUsers } from '../../actions/user_actions';
import { getCategoriesInfo } from '../../actions/category_actions'
import { CategoryComponent } from './CategoryComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    categories: state.entities.categories
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (request) => dispatch(getUsers(request)),
    getCategoriesInfo: (request) => dispatch(getCategoriesInfo(request))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryComponent));