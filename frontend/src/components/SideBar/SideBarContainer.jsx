import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { SideBarComponent } from './SideBarComponent';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users[state.session.id]
  }
}



export default withRouter(connect(msp, )(SideBarComponent));