import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import { permissions } from './permissions'
export default class ChatComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chatClient: null,
      channel: null
    }
  }
  async componentDidMount(){
    const chatClient = this.props.chatClient;
    const userToken = localStorage.getItem("chat_token");
    if(this.props.currentUser){
     chatClient.disconnect();
     await chatClient.setUser(
        {
          id: String(this.props.currentUser.id),
          name: this.props.currentUser.username,
          image: this.props.currentUser.picture
        },
        userToken,
      );
      }
    else{
      await chatClient.setAnonymousUser()

    }
    if(this.props.channelUser){
      const channel = chatClient.channel('livestream', this.props.channelUser.username, {
        image: this.props.channelUser.picture,
        name: this.props.channelUser.stream_title,
      });
      this.setState({chatClient, channel})
    }
      
    await chatClient.updateChannelType("messaging", {permissions});

    
    
    
  }
  render(){
    return(<Chat client={this.state.chatClient} theme={'livestream dark'}>
    <Channel channel={this.state.channel} Message={MessageLivestream}>
      <Window hideOnThread>
        <ChannelHeader live />
        <MessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
      <Thread fullWidth />
    </Channel>
  </Chat>)
  }
}
