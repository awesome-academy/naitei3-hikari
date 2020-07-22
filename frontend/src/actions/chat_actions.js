export const GET_CHAT_TOKEN = 'GET_CHAT_TOKEN';

const receiveChatToken = (chat_token) => ({
    type: GET_CHAT_TOKEN,
    chat_token: chat_token
})

export const getChatToken = () => (dispatch) => {
    const chat_token = localStorage.getItem("chat_token")
    dispatch(receiveChatToken(chat_token))
}