import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

var images = require.context('../../assets/images/', true);

class Samplepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {},
        };
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({style: {display:'none'}});
        }.bind(this),1000)
    }

    render() {
        let style = this.state.style;
        const background = require('../../assets/images/auth-layer.png')

        return (
            <div>
                {/* Loader starts */}
                <div className="loader-wrapper" style={style}>
                    <div className="loader bg-white">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <h4>Have a great day at work today <span>&#x263A;</span></h4>
                    </div>
                </div>
                {/* Loader ends */}

                {/*page-wrapper Start*/}
                <div className="page-wrapper">

                    <div className="container-fluid">

                        {/*sign up page start*/}
                        <div className="authentication-main">
                            <div className="row">
                                <div className="col-md-4 p-0">
                                    <div className="auth-innerleft" style ={{ backgroundImage: "url("+background+")" }}>
                                        <div className="text-center">
                                            <img src={require('../../assets/images/logo-auth.gif')} className="logo-login" alt=""/>
                                                <hr/>
                                                 <div className="social-media">
                                                     <ul className="list-inline">
                                                         <li className="list-inline-item"><i className="fa fa-facebook" aria-hidden="true"></i></li>
                                                         <li className="list-inline-item"><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                                                         <li className="list-inline-item"><i className="fa fa-twitter" aria-hidden="true"></i></li>
                                                         <li className="list-inline-item"><i className="fa fa-instagram" aria-hidden="true"></i></li>
                                                         <li className="list-inline-item"><i className="fa fa-rss" aria-hidden="true"></i></li>
                                                     </ul>
                                                 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 p-0">
                                    <div className="auth-innerright">
                                        <div className="authentication-box">
                                            <h3 className="text-center">NEW USER</h3>
                                            <h6 className="text-center">Enter your Username and Password For Login or Signup</h6>
                                            <div className="card mt-4 p-4">
                                                <form action='/' className="theme-form">
                                                    <div className="form-row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="col-form-label">First Name</label>
                                                                <input required type="text" className="form-control" placeholder="John"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="col-form-label">Last Name</label>
                                                                <input required type="text" className="form-control" placeholder="Deo"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">User Name</label>
                                                        <input type="text" required className="form-control" placeholder="John Deo"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Password</label>
                                                        <input type="password" required className="form-control" placeholder="**********"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">BOD</label>
                                                        <div className="form-row">
                                                            <div className="col-sm-4">
                                                                <select required className="form-control mb-1">
                                                                    <option>DD</option>
                                                                    <option>01</option>
                                                                    <option>02</option>
                                                                    <option>03</option>
                                                                    <option>04</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <select required className="form-control mb-1">
                                                                    <option>MM</option>
                                                                    <option>01</option>
                                                                    <option>02</option>
                                                                    <option>03</option>
                                                                    <option>04</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <select required className="form-control mb-1">
                                                                    <option>YYYY</option>
                                                                    <option>1990</option>
                                                                    <option>1991</option>
                                                                    <option>1992</option>
                                                                    <option>1993</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-sm-3">
                                                            <button type="submit" className="btn btn-secondary">Sign
                                                                Up
                                                            </button>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <div className="text-left mt-2 m-l-20">
                                                                Are you already user?&nbsp;&nbsp;<a href="login.html" className="btn-link text-capitalize">Login</a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="form-divider"></div>
                                                    <div className="social mt-3">
                                                        <div className="form-row">
                                                            <div className="col-sm-4">
                                                                <button
                                                                    className="btn social-btn btn-fb mb-2">Facebook
                                                                </button>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <button
                                                                    className="btn social-btn btn-twitter mb-2">Twitter
                                                                </button>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <button
                                                                    className="btn social-btn btn-google mb-2">Google +
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        {/*sign up page Ends*/}

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Samplepage;