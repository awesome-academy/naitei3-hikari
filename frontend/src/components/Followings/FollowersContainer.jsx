import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FollowingsComponent } from './FollowingsComponent';

const mapStateToProps = (state, ownProps) => {
  return {
    type: "Followers",
    currentUser: state.entities.users[state.session.id],
    channelUser: state.entities.users[state.ui.channelId],
    users: Object.values(state.follows.currentChannel)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowingsComponent))