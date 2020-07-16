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
                                                        <div className="authentication-box">
                                                            <h3>RESET YOUR PASSWORD</h3>
                                                            <div className="card mt-4 p-4">
                                                                <Form  className="theme-form">
                                                                    <h5 className="f-16 mb-3">CREATE YOUR PASSWORD</h5>
                                                                    <div className="form-group">
                                                                        <label className="col-form-label">New Password</label>
                                                                        <input type="password" className="form-control" placeholder="*****"/>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="col-form-label">Retype Password</label>
                                                                        <input type="password" className="form-control" placeholder="*****"/>
                                                                    </div>
                                                                    <div className="form-group form-row mb-0">
                                                                        <div className="col-md-2">
                                                                            <button type="submit" className="btn btn-secondary">Done
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </Form>
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
