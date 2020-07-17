import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ChannelComponent } from './ChannelComponent';
import { toggleLoginModal, receiveChannel } from '../../actions/ui_actions';
import { createFollow, showFollows, destroyFollow } from '../../actions/follow_actions';
import { getUserByName } from '../../actions/user_actions'


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    modalStatus: state.ui.modal,
    follows: state.follows,
    channelUser: state.entities.users[state.ui.channelId],
    channelFollowers: Object.values(state.follows.currentChannel),
    channelFollowings: Object.values(state.follows.currentChannelFollowings)
  }
}

const mdp = (dispatch) => {
  return {
    getUserByName: (username) => dispatch(getUserByName(username)),
    loginModal: (status, formType) => dispatch(toggleLoginModal(status, formType)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    showFollows: (user) => dispatch(showFollows(user)),
    destroyFollow: (follow) => dispatch(destroyFollow(follow)),
    receiveChannel: (id) => dispatch(receiveChannel(id))
  }
}

export default withRouter(connect(msp, mdp)(ChannelComponent));