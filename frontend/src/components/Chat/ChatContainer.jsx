import React from 'react';
import ChatComponent from './ChatComponent'
import { getChatToken } from '../../actions/chat_actions'
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        channelUser: state.entities.users[state.ui.channelId],
        chatClient: state.chat.chat_client
    }
}

const mdp = (dispatch) => {
    return {
        getChatToken: () => dispatch(getChatToken())
    }
}
export default connect(msp, mdp)(ChatComponent);