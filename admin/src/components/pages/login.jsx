import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux'
import { login } from '../../services/authentications/actions'
class Samplepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {},
            username: '',
            password: ''
        };
    }
    componentDidMount() {
        setTimeout(function () {
            this.setState({style: {display:'none'}});
        }.bind(this),1000)
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit= e => {
        e.preventDefault();
        const data = {
            user: {
                username: this.state.username,
                password: this.state.password
            }
        }
        this.props.login(data).then(()=> {
            this.props.history.push("/admin/dashboard")
        })
        .catch(err => {
            console.log(err)
            document.getElementsByClassName("wrong_password")[0].style.display = 'block'
        })
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
                        {/*login page start*/}
                        <div className="authentication-main" >
                            <div className="row">
                                <div className="col-md-4 p-0">
                                    <div className="auth-innerleft" style ={ { backgroundImage: "url("+background+")" } }>
                                        <div className="text-center">
                                            <img src={require('../../assets/images/logo-login.png')}
                                                 className="logo-login" alt=""/>
                                            <hr/>
                                            <div className="social-media">
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><i
                                                        className="fa fa-facebook txt-fb" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i
                                                        className="fa fa-google-plus txt-google-plus"
                                                        aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i
                                                        className="fa fa-twitter txt-twitter" aria-hidden="true"></i>
                                                    </li>
                                                    <li className="list-inline-item"><i
                                                        className="fa fa-linkedin txt-linkedin" aria-hidden="true"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 p-0">
                                    <div className="auth-innerright">
                                        <div className="authentication-box">
                                            <h4>LOGIN</h4>
                                            <h6>Enter your Username and Password For Login or Signup</h6>
                                            <p className="wrong_password" style={{color: 'red', display: 'none'}}><strong>Wrong Password</strong></p>
                                            <div className="card mt-4 p-4 mb-0">
                                                <Form className="theme-form" onSubmit={this.onSubmit} >
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">Your username</label>
                                                        <input onChange={this.onChange} name="username" required type="text" className="form-control form-control-lg"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Password</label>
                                                        <input onChange={this.onChange} name="password" required  type="password" className="form-control form-control-lg"/>
                                                    </div>
                                                    <div className="checkbox p-0">
                                                        <input id="checkbox1" type="checkbox"/>
                                                        <label htmlFor="checkbox1">Remember me</label>
                                                    </div>
                                                    <div className="form-group form-row mt-3">
                                                        <div className="col-md-3">
                                                            <button type="submit" className="btn btn-secondary">LOGIN
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
                        {/*login page end*/}
                    </div>
                </div>
                {/*page-wrapper Ends*/}

            </div>

        )
    }
}


export default connect(null, {login})(Samplepage);
