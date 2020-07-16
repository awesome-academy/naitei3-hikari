import React, {Component} from 'react';

// Import authService

class UserMenu extends Component {

    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }

    render() {

        return (
            <li className="onhover-dropdown">
                <div className="media  align-items-center">
                    <img className="align-self-center pull-right mr-2" src={require("../../../assets/images/dashboard/user.png")} alt="header-user" />
                    <div className="media-body">
                        <h6 className="m-0 txt-dark f-16">
                            My Account
                            <i className="fa fa-angle-down pull-right ml-2"></i>
                        </h6>
                    </div>
                </div>
                <ul className="profile-dropdown onhover-show-div p-20">
                    <li>
                        <a href="#">
                            <i className="icon-user"></i>
                            Edit Profile
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon-email"></i>
                            Inbox
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon-check-box"></i>
                            Task
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="icon-comments"></i>
                            Chat
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={this.logOut.bind(this)}>
                            <i className="icon-power-off"></i>
                            Logout
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
}


export default UserMenu