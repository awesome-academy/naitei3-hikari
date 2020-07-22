import { GET_CHAT_TOKEN } from '../actions/chat_actions';
import { StreamChat } from 'stream-chat'
const chatReducer = (state = {'chat_token': '', 'chat_client': new StreamChat(process.env.REACT_APP_API_KEY)}, action) => {
    Object.freeze(state);
    let newState = null;
    switch (action.type) {
      case GET_CHAT_TOKEN:
        const chat_token = action.chat_token
        newState = [...state, chat_token];
        newState['chat_token'] = action.chat_token;
        return newState;
      default:
        return state; 
    }
}
  
  export default chatReducer;