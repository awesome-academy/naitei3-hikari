import React from 'react';
import LoginModalContainer from '../LoginModal/LoginModalContainer';
import NavBarContainer from '../NavBar/NavBarContainer';
import SideBarContainer from '../SideBar/SideBarContainer';
import MainBarContainer from '../MainBar/MainBarContainer';
import UserDropDownContainer from '../UserDropDown/UserDropDownContainer';

export class AppComponent extends React.Component { 
  constructor(props) {
    super(props);
    this.timeout = null;
    this.toggleUserDrop = this.toggleUserDrop.bind(this);
  }

  toggleUserDrop(e) {
    if (this.props.userDropDownStatus === false || this.props.modalStatus === true) return;
    
    this.props.toggleUserDrop(!this.props.userDropDownStatus);
  }

  render() {
    const base = {
      color: 'rgb(218, 216, 222)',
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: "#0f0e11",
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      overflowX: 'hidden',
      // overflowY: 'hidden'
    }
    const MainDiv = {
      // width: '100vw',
      // height: '100vh',
      display: 'relative',
    }

    return (
      <div style={base} onClick={this.toggleUserDrop} id="base"> 
        {this.props.modalStatus         && <LoginModalContainer /> }
        {this.props.userDropDownStatus  && <UserDropDownContainer chatClient={this.props.chatClient} />}
        <NavBarContainer chatClient={this.props.chatClient} />
        <div style={MainDiv} id="mainAppComp">
          <SideBarContainer />
          <MainBarContainer />
        </div>
      </div>  
    );
  }
};