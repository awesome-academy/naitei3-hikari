import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ChannelComponent } from './ChannelComponent';
import { toggleLoginModal, receiveChannel } from '../../actions/ui_actions';
import { getUserByName } from '../../actions/user_actions'


const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    modalStatus: state.ui.modal,
    channelUser: state.entities.users[state.ui.channelId],
  }
}

const mdp = (dispatch) => {
  return {
    getUserByName: (username) => dispatch(getUserByName(username)),
    loginModal: (status, formType) => dispatch(toggleLoginModal(status, formType)),
    receiveChannel: (id) => dispatch(receiveChannel(id))
  }
}

export default withRouter(connect(msp, mdp)(ChannelComponent));