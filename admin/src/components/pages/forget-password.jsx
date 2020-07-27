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
                                                            <img src={require('../../assets/images/key.png')} className="img-fluid security-icon" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 p-0">
                                                    <div className="auth-innerright">
                                                        <div className="reset-password-box">
                                                            <h3>RESET YOUR PASSWORD</h3>
                                                            <div className="card mt-4  mb-0">
                                                                <form className="theme-form">
                                                                    <div className="form-group">
                                                                        <label className="col-form-label">Enter Your
                                                                            Mobile Number</label>
                                                                        <div className="form-row">
                                                                            <div className="col-md-2">
                                                                                <input type="text" className="form-control digits mb-1" value="+ 91"/>
                                                                            </div>
                                                                            <div className="col-md-7 col-xl-8">
                                                                                <input type="tel" className="form-control digits mb-1" value="000-000-0000"/>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <button type="submit" className="btn btn-primary m-0">Send </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-center mt-4 mb-4"><span
                                                                        className="reset-password-link">If don't receive OTP?&nbsp;&nbsp;
                                                                        <a href="#" className="btn-link text-danger">Resend</a></span>
                                                                    </div>
                                                                    <div className="form-group rounded p-4 opt-box">
                                                                        <label className="col-form-label pt-0">Enter OTP</label>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control digits text-center opt-text" value="00"/>
                                                                            </div>
                                                                            <div className="col">
                                                                                <input type="text" className="form-control digits text-center opt-text" value="00"/>
                                                                            </div>
                                                                            <div className="col">
                                                                                <input type="text" className="form-control digits text-center opt-text" value="00"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h6 className="f-14 mt-4 mb-3">CREATE YOUR
                                                                        PASSWORD</h6>
                                                                    <div className="form-group">
                                                                        <label className="col-form-label">New
                                                                            Password</label>
                                                                        <input type="password" className="form-control"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-form-label">Retype
                                                                            Password</label>
                                                                        <input type="password" className="form-control"/>
                                                                    </div>
                                                                    <div className="form-group form-row mb-2">
                                                                        <div className="col-md-2">
                                                                            <button type="submit"
                                                                                    className="btn btn-primary">Done
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                       {/*Reset Password page end*/}


                        </div>
                    </div>
                </div>
        )
    }
}


export default Samplepage;