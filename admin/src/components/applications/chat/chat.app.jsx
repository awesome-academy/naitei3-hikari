import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

import {
    getAllMembers,
    getAllChats,
    changeChat,
    searchMember,
    sendMessage,
    createNewChat,
    CurrentUserUpdateStatus
} from '../../../actions/chat.actions';

var images = require.context('../../../assets/images', true);


class ChatApp extends Component {
    constructor(props) {
        super(props);

        this.settingToggle = this.settingToggle.bind(this);

        this.state = {
            SelectedTab: '1',
            searchKeyword: '',
            messageInput: '',
            statusInput: '',
            menuToggle:false
        }
    }

    settingToggle(tab) {
        if (this.state.SelectedTab !== tab) {
            this.setState({
                SelectedTab: tab
            });
        }
    }

    changeChatClick = (e, selectedUserId) => {
        this.handleSearchKeyword('');
        const { chats, currentUser } = this.props.ChatApp;
        const currentChat = chats.find(x => x.users.includes(currentUser.id) && x.users.includes(selectedUserId))
        if (currentChat) {
            this.props.changeChat(selectedUserId);
        } else {
            this.props.createNewChat(currentUser.id, selectedUserId, chats)
        }
    }

    handleSearchKeyword = (keyword) => {
        this.setState({
            searchKeyword: keyword
        })
        this.props.searchMember(keyword)
    }

    handleMessageChange = (message) => {
        this.setState({
            messageInput: message
        })
    }

    handleMessagePress = (e) => {
        if (e.key === "Enter" || e === "send") {

            var container = document.querySelector(".chat-history");
            setTimeout(function () {
               container.scrollBy({ top: 200, behavior: 'smooth' });
            }, 310)

            let currentUserId = this.props.ChatApp.currentUser.id;
            let selectedUserId = this.props.ChatApp.selectedUser.id;

            if (this.state.messageInput.length > 0) {
                this.props.sendMessage(currentUserId, selectedUserId, this.state.messageInput, this.props.ChatApp.chats);
                this.setState({
                    messageInput: ''
                })
            }

            this.scrollToBottom();
        }
    }

    handleChangeStatus = (e) => {
        this.setState({
            statusInput:e.target.value
        })
    }

    handleUpdateStatus = (e) => {
        if (e.key === "Enter" ) {
            if (this.state.statusInput.length > 0) {
                this.props.CurrentUserUpdateStatus(this.state.statusInput);
                this.setState({
                    statusInput: ''
                })
            }
        }
    }

    componentDidMount() {
        const currentUserId = 0;
        this.props.getAllMembers();
        this.props.getAllChats(currentUserId);
    }

    dynamicImage(image){
        return images(`./${image}`);
    }

    scrollToBottom = () => {
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        messagesContainer.scrollTop = 700;
        this.messagesContainer.scrollIntoView({ bottom: 10, behavior: "smooth" });

    }

    chatMenuToggle = () => {
        this.setState({
            menuToggle:!this.state.menuToggle
        });
    }

    render() {

        const {
            allMembers,
            members,
            currentUser,
            chats,
            selectedUser
        } = this.props.ChatApp;

        const selectedChat = (allMembers && chats && selectedUser) ?
            chats.find(x => x.users.includes(currentUser.id) && x.users.includes(selectedUser.id)) :
            null;

        var activeChat = 0;
        if(selectedUser != null)
            activeChat = selectedUser.id;

        return (
            (allMembers && chats) ?
                <div>
                    <Breadcrumb title="Chat App" parent="Chat" />

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col call-chat-sidebar col-sm-12">
                                <div className="card">
                                    <div className="card-body chat-body">
                                        <div className="chat-box">
                                            <div className="chat-left-aside">
                                                <div className="media">
                                                    <img src={this.dynamicImage(currentUser.thumb)} className="rounded-circle user-image" alt="" />
                                                    <div className="about">
                                                        <div className="name f-w-600">{currentUser.name}</div>
                                                        <div className="status">
                                                            {currentUser.status}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="people-list custom-scrollbar" id="people-list">
                                                    <div className="search">
                                                        <form className="theme-form">
                                                            <div className="form-group">
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    placeholder="search"
                                                                    defaultValue={this.state.searchKeyword}
                                                                    onChange={(e) => this.handleSearchKeyword(e.target.value)}
                                                                />
                                                                <i className="fa fa-search"></i>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <ul className="list">
                                                        { (this.state.searchKeyword !== '') && members.filter(x => x.id != currentUser.id).map((item, i) => {
                                                            return (
                                                                <li className="clearfix ${selectedUser.id === item.id?active:''}" key={i} onClick={(e) => this.changeChatClick(e, item.id)}>
                                                                    <img src={this.dynamicImage(item.thumb)} className="rounded-circle user-image" alt=""/>
                                                                    <div className="status-circle away"></div>
                                                                    <div className="about">
                                                                        <div className="name">{item.name}</div>
                                                                        <div className="status">
                                                                            {item.status}
                                                                        </div>
                                                                    </div>
                                                                </li> );
                                                        })}

                                                        { (this.state.searchKeyword === '') && chats.map((item, i) => {
                                                            const Othermember = allMembers.find(u => u.id === item.users.find(x => x !== currentUser.id))
                                                            return (
                                                                <li className={`clearfix ${activeChat == Othermember.id? 'active':''}`} key={i} onClick={(e) => this.changeChatClick(e, Othermember.id)}>
                                                                    <img src={this.dynamicImage(Othermember.thumb)}
                                                                         className="rounded-circle user-image" alt=""/>
                                                                    <div className="status-circle away"></div>
                                                                    <div className="about">
                                                                        <div className="name">{Othermember.name}</div>
                                                                        <div className="status">
                                                                            {Othermember.status}
                                                                        </div>
                                                                    </div>
                                                                </li> );
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col call-chat-body">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="row chat-box">
                                            <div className="col pr-0 chat-right-aside">
                                                <div className="chat">
                                                    <div className="chat-header clearfix">
                                                        <img src={this.dynamicImage(selectedUser.thumb)} className="rounded-circle" alt="" />
                                                        <div className="about">
                                                            <div className="name">{selectedUser.name}&nbsp;&nbsp;<span className="font-primary f-12">Typing...</span></div>
                                                            <div className="status digits">
                                                                {selectedUser.lastSeenDate}
                                                            </div>
                                                        </div>
                                                        <ul className="list-inline float-left float-sm-right chat-menu-icons">
                                                            <li className="list-inline-item"><a href="#"><i className="icon-search"></i></a></li>
                                                            <li className="list-inline-item"><a href="#"><i className="icon-clip"></i></a></li>
                                                            <li className="list-inline-item"><a href="#"><i className="icon-headphone-alt"></i></a></li>
                                                            <li className="list-inline-item"><a href="#"><i className="icon-video-camera"></i></a></li>
                                                            <li className="list-inline-item toogle-bar" onClick={() => this.chatMenuToggle()}><a href="#"><i className="icon-menu"></i></a></li>
                                                        </ul>
                                                    </div>

                                                    <div className="chat-history chat-msg-box custom-scrollbar" ref={(el) => { this.messagesContainer = el; }}>
                                                        <ul>
                                                            {(selectedChat) && selectedChat.messages.map((item, index) => {
                                                                const participators = allMembers.find(x => x.id == item.sender);
                                                                return (<li key={index} className="clearfix">
                                                                    <div className={`message my-message ${item.sender != currentUser.id ? '' : 'float-right'}`}>
                                                                        <img src={this.dynamicImage(participators.thumb)}
                                                                             className={`rounded-circle ${item.sender != currentUser.id ? 'float-left' : 'float-right'} chat-user-img img-30`} alt="" />
                                                                        <div className="message-data text-right">
                                                                            <span className="message-data-time">{item.time}</span>
                                                                        </div>
                                                                        {item.text}
                                                                    </div>
                                                                </li> );
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div className="chat-message clearfix">
                                                        <div className="row">
                                                            <div className="col-xl-12 d-flex">
                                                                <div className="smiley-box bg-primary">
                                                                    <div className="picker"><img src={require('../../../assets/images/smiley.png')} className="" alt="" /></div>
                                                                </div>
                                                                <div className="input-group text-box">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control input-txt-bx"
                                                                        placeholder="Type a message......"
                                                                        value={this.state.messageInput}
                                                                        onKeyPress={(e) => this.handleMessagePress(e)}
                                                                        onChange={(e) => this.handleMessageChange(e.target.value)}
                                                                    />
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-primary" type="button" onClick={() => this.handleMessagePress('send')} >SEND</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`col pl-0 chat-menu ${this.state.menuToggle?'show':''}`}>

                                                <Nav tabs className="nav-material nav-info">
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.SelectedTab === '1' })}
                                                            onClick={() => { this.settingToggle('1'); }}
                                                        >
                                                            MEMBERS
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.SelectedTab === '2' })}
                                                            onClick={() => { this.settingToggle('2'); }}
                                                        >
                                                            STATUS
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem>
                                                        <NavLink
                                                            className={classnames({ active: this.state.SelectedTab === '3' })}
                                                            onClick={() => { this.settingToggle('3'); }}
                                                        >
                                                            PROFILE
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                                <TabContent className="tab-content" activeTab={this.state.SelectedTab}>
                                                    <TabPane tabId="1">
                                                        <Row>
                                                            <Col sm="12">
                                                                <div className="tab-pane " id="info-home" role="tabpanel" aria-labelledby="info-home-tab">
                                                                    <div className="people-list custom-scrollbar">
                                                                        <ul className="list digits">
                                                                            { allMembers.filter(x => x.id != currentUser.id).map((member, i) =>
                                                                                <li className="clearfix" key={i} onClick={(e) => this.changeChatClick(e, member.id)}>
                                                                                    <img src={this.dynamicImage(member.thumb)} className="rounded-circle user-image" alt="" />
                                                                                    <div className="status-circle away"></div>
                                                                                    <div className="about">
                                                                                        <div className="name">{member.name}</div>
                                                                                        <div className="status">{member.status}
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    <TabPane tabId="2">
                                                        <Row>
                                                            <Col sm="12">
                                                                <div className="tab-pane " id="info-profile" role="tabpanel" aria-labelledby="profile-info-tab">
                                                                    <div className="">
                                                                        <div className="search">
                                                                            <div className="form-group">
                                                                                <input className="form-control"
                                                                                       type="text"
                                                                                       defaultValue={this.state.statusInput}
                                                                                       onChange={(e) => this.handleChangeStatus(e)}
                                                                                       onKeyPress={(e) => this.handleUpdateStatus(e)}
                                                                                       placeholder="Write Status..." />
                                                                                <i className="fa fa-pencil"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="status">
                                                                        <p className="font-dark">{currentUser.status}</p>
                                                                        <hr />
                                                                        <p>Established fact that a reader will be
                                                                            distracted &nbsp;<i className="icofont icofont-emo-heart-eyes font-danger f-20"></i>&nbsp;<i className="icofont icofont-emo-heart-eyes font-danger f-20"></i></p>
                                                                        <hr />
                                                                        <p>Dolore magna aliqua &nbsp;<i className="icofont icofont-emo-rolling-eyes font-success f-20"></i></p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                    <TabPane tabId="3">
                                                        <Row>
                                                            <Col sm="12">
                                                                <div className="tab-pane" id="info-contact" role="tabpanel" aria-labelledby="contact-info-tab">
                                                                    <div className="user-profile">
                                                                        <div className="image">
                                                                            <div className="avatar text-center">
                                                                                <img alt="" src={require('../../../assets/images/user/14.png')} />
                                                                            </div>
                                                                            <div className="icon-wrapper"><i className="icofont icofont-pencil-alt-5"></i></div>
                                                                        </div>
                                                                        <div className="user-content text-center">
                                                                            <h5 className="text-uppercase">mark jenco</h5>
                                                                            <div className="social-media">
                                                                                <ul className="list-inline">
                                                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-rss"></i></a></li>
                                                                                </ul>
                                                                            </div>
                                                                            <hr />
                                                                            <div className="follow text-center">
                                                                                <div className="row">
                                                                                    <div className="col border-right">
                                                                                        <span>Following</span>
                                                                                        <div className="follow-num">236k</div>
                                                                                    </div>
                                                                                    <div className="col">
                                                                                        <span>Follower</span>
                                                                                        <div className="follow-num">3691k</div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <hr />
                                                                            <div className="text-center digits">
                                                                                <p className="mb-0">Mark.jecno23@gmail.com</p>
                                                                                <p className="mb-0">+91 365 - 658 - 1236</p>
                                                                                <p className="mb-0">Fax: 123-4560</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </TabPane>
                                                </TabContent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="loading"></div>
        )
    }
}

const mapStateToProps = ({ChatApp}) => {
    return { ChatApp };
}

export default connect(
    mapStateToProps,{
        getAllMembers,
        getAllChats,
        changeChat,
        searchMember,
        sendMessage,
        createNewChat,
        CurrentUserUpdateStatus
    }
)(ChatApp);