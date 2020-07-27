import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style:{},
            active_tab:'1'
        }
    };

    componentDidMount() {
        setTimeout(function () {
            this.setState({style: {display:'none'}});
        }.bind(this),1000)
    }

    toggle(tab) {
        if (this.state.active_tab !== tab) {
            this.setState({
                active_tab: tab
            });
        }

    }

    render() {
        let style = this.state.style;
        const backgroundHome = require('../../../assets/images/landing/home/main_bg.jpg');
        const background_advance = require('../../../assets/images/landing/widgets-bck.png');
        const background_freatures = require('../../../assets/images/landing/background.jpg');

        return (
            <div>
                <div className='loader-wrapper' style={style}>
                    <div className="loader bg-white">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <h4>Have a great day at work today <span>&#x263A;</span></h4>
                    </div>
                </div>
                 {/*Loader ends */}

                {/*page-wrapper Start*/}
                <div className="page-wrapper">

                    <div className="page-body-wrapper landing-main">
                        <div className="landing-home" style ={ { backgroundImage: "url("+backgroundHome+")" } }>
                            <div className="landing-header">
                                <div className="container-fluid">
                                    <nav className="navbar navbar-expand-lg">
                                        <a className="navbar-brand" href="#">
                                            <img src={require('../../../assets/images/logo-light.png')}
                                                 className="img-fluid" alt=""/></a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#collapsibleNavbar">
                                                <span className="navbar-toggler-icon">
                                                    <i className="fa fa-bars"></i>
                                                </span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#pre-build">Layout</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#cutomizer">customizer</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#key-feature">key-feature</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#support">Update</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#rate">support</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="landing-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-lg-4 offset-lg-2 dashboard-image-pt-xs offset-md-1 col-md-5 offset-sm-0">
                                            <div className="landing-left">
                                                <div>
                                                    <h1>Bootstrap ReactJS<span className="txt-danger"> Admin </span>Template
                                                    </h1>
                                                    <p className="pr-5">When it comes to dashboard or web apps. one of
                                                        the first
                                                        impression you consider is the design. It needs to be high
                                                        quality
                                                        enough otherwise you will lose potential users due to bad
                                                        design.</p>
                                                    <div className="button-bottom">
                                                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}
                                                              target="_blank" className="btn btn-primary mr-2">View Demo</Link>
                                                        <a href="https://templateforest.net/user/pixelstrap"
                                                           target="_blank" className="btn btn-outline-primary-2x">Buy
                                                            Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pr-0 col-md-6">
                                            <img src={require('../../../assets/images/landing/home/right.png')} className="img-fluid"
                                                 alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="section-space bg-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="landing-header">
                                            <h2><span className="digits">4</span> Pre Build Layout Options</h2>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="live-box">
                                            <img src={require('../../../assets/images/landing/layouts_prebuild/1.jpg')}
                                                 className="img-fluid" alt=""/>
                                                <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}
                                                  target="_blank" className="btn live-btn btn-info" >View Demo</Link>
                                        </div>
                                        <div className="m-t-15 m-b-20  text-center">
                                            <h6 className="f-w-700">Left Sidebar</h6>
                                            <h6>(Light layout)</h6>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="live-box">
                                            <img src={require('../../../assets/images/landing/layouts_prebuild/5.jpg')}
                                                 className="img-fluid" alt=""/>
                                            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}
                                                  target="_blank" className="btn live-btn btn-info" >View Demo</Link>
                                        </div>
                                        <div className="m-t-15 m-b-20  text-center">
                                            <h6 className="f-w-700">Perfect For All</h6>
                                            <h6>(dark layout)</h6>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="live-box">
                                            <img src={require('../../../assets/images/landing/layouts_prebuild/9.jpg')}
                                                 className="img-fluid" alt=""/>
                                            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}
                                                  target="_blank" className="btn live-btn btn-info" >View Demo</Link>
                                        </div>
                                        <div className="m-t-15 m-b-20  text-center">
                                            <h6 className="f-w-700">Perfect For All</h6>
                                            <h6>(RTL layout)</h6>
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                        <div className="live-box">
                                            <img src={require('../../../assets/images/landing/layouts_prebuild/13.jpg')}
                                                 className="img-fluid" alt=""/>
                                            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}
                                                  target="_blank" className="btn live-btn btn-info" >View Demo</Link>
                                        </div>
                                        <div className="m-t-15 m-b-20  text-center">
                                            <h6 className="f-w-700">Perfect For All</h6>
                                            <h6>(Box layout)</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="landing-header pt-5 pb-3">
                                            <h4 className="text-uppercase f-w-900">2 PRE BUILD DASHBOARD OPTIONS</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="live-box">
                                            <img src={require('../../../assets/images/landing/layouts_prebuild/1.jpg')} className="img-fluid" alt=""/>
                                            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}
                                                  target="_blank" className="btn btn-sm btn-info">View Demo</Link>
                                        </div>
                                        <div className="m-t-15 m-b-20">
                                            <h6 className="f-w-700">Default Dashboard</h6>
                                            <h6>(Light layout)</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="live-box">
                                            <img src={require('../../../assets/images/landing/layouts_prebuild/2.jpg')} className="img-fluid" alt=""/>
                                            <Link to={`${process.env.PUBLIC_URL}/dashboard/ecommerce`}
                                                  target="_blank" className="btn btn-sm btn-info">View Demo</Link>
                                        </div>
                                        <div className="m-t-15 m-b-20">
                                            <h6 className="f-w-700">Ecommerce Dashboard</h6>
                                            <h6>(Light layout)</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="section-space advance-widget">
                            <div className="landing-header">
                                <h2>Advance Widget</h2>
                                <div className="line"></div>
                            </div>
                            <div className="widgets-section"
                                 style ={ { backgroundImage: "url("+background_advance+")" } }>
                            </div>
                        </section>

                        <section className="section-space bg-white" id="cutomizer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="landing-header">
                                            <h2>Real Time Customizer</h2>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img src={require('../../../assets/images/landing/UNIVERSAL.gif')}
                                             className="img-fluid customizer-img" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="section-space application-section" id="pre-build">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="landing-header">
                                            <h2>With <span className="digits">6+</span> Pre Build Apps</h2>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">

                                        <Nav tabs className={'nav-pills'}>
                                            <NavItem >
                                                <NavLink
                                                    className={classnames({ active: this.state.active_tab === '1' })}
                                                    onClick={() => { this.toggle('1'); }} >
                                                    Users
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.active_tab === '2' })}
                                                         onClick={() => { this.toggle('2'); }} >
                                                    Email
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.active_tab === '3' })}
                                                         onClick={() => { this.toggle('3'); }}>
                                                    TodoApp
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.active_tab === '4' })}
                                                         onClick={() => { this.toggle('4'); }}>
                                                    Chat
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={classnames({ active: this.state.active_tab === '5' })}
                                                         onClick={() => { this.toggle('5'); }}>
                                                    Ecommerce
                                                </NavLink>
                                            </NavItem>
                                        </Nav>

                                        <TabContent activeTab={this.state.active_tab} className="container tab-pane">
                                            <TabPane tabId="1" >
                                                <Row>
                                                    <Col sm="12">
                                                        <Link to={`${process.env.PUBLIC_URL}/applications/users/user-profile`} target="_blank">
                                                            <img src={require('../../../assets/images/landing/app/user.png')} className="img-fluid"
                                                                 alt=""/>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="2" className="container tab-pane">
                                                <Row>
                                                    <Col sm="12">
                                                        <Link to={`${process.env.PUBLIC_URL}/applications/users/user-profile`} target="_blank">
                                                            <img src={require('../../../assets/images/landing/app/email.png')} className="img-fluid"
                                                                 alt=""/>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="3" className="container tab-pane">
                                                <Row>
                                                    <Col sm="12">
                                                        <Link to={`${process.env.PUBLIC_URL}/applications/todo-app`} target="_blank">
                                                            <img src={require('../../../assets/images/landing/app/todo.png')} className="img-fluid"
                                                                 alt=""/>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="4" className="container tab-pane">
                                                <Row>
                                                    <Col sm="12">
                                                        <Link to={`${process.env.PUBLIC_URL}/applications/chat-app`} target="_blank">
                                                            <img src={require('../../../assets/images/landing/app/chat.png')} className="img-fluid"
                                                                 alt=""/>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="5" className="container tab-pane">
                                                <Row>
                                                    <Col sm="12">
                                                        <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/product`} target="_blank">
                                                            <img src={require('../../../assets/images/landing/app/ecommerce.png')} className="img-fluid"
                                                                 alt=""/>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>

                                        {/*<ul className="nav nav-pills" role="tablist">*/}
                                            {/*<li className="nav-item">*/}
                                                {/*<a className="nav-link active" data-toggle="pill"*/}
                                                   {/*href="#users">Users</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                                {/*<a className="nav-link" data-toggle="pill" href="#email">Email</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                                {/*<a className="nav-link" data-toggle="pill" href="#blog">Todo</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                                {/*<a className="nav-link" data-toggle="pill" href="#chat">Chat</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                                {/*<a className="nav-link" data-toggle="pill"*/}
                                                   {/*href="#ecommerce">Ecommerce</a>*/}
                                            {/*</li>*/}

                                        {/*</ul>*/}

                                        {/*<div className="tab-content">*/}
                                            {/*<div id="users" className="container tab-pane active"><br />*/}
                                                {/*<a href="default/user-profile.html" target="_blank">*/}
                                                    {/*<img src={require('../../../assets/images/landing/app/user.png')} className="img-fluid"*/}
                                                         {/*alt=""/>*/}
                                                {/*</a>*/}
                                            {/*</div>*/}
                                            {/*<div id="email" className="container tab-pane fade"><br />*/}
                                                {/*<a href="default/email-application.html" target="_blank">*/}
                                                    {/*<img src={require('../../../assets/images/landing/app/email.png')} className="img-fluid"*/}
                                                         {/*alt=""/>*/}
                                                {/*</a>*/}
                                            {/*</div>*/}
                                            {/*<div id="blog" className="container tab-pane fade"><br />*/}
                                                {/*<a href="default/blog.html" target="_blank">*/}
                                                    {/*<img src={require('../../../assets/images/landing/app/blog.png')} className="img-fluid"*/}
                                                         {/*alt=""/>*/}
                                                {/*</a>*/}
                                            {/*</div>*/}
                                            {/*<div id="chat" className="container tab-pane fade"><br />*/}
                                                {/*<a href="default/chat.html" target="_blank">*/}
                                                    {/*<img src={require('../../../assets/images/landing/app/chat.png')} className="img-fluid"*/}
                                                         {/*alt=""/>*/}
                                                {/*</a>*/}
                                            {/*</div>*/}
                                            {/*<div id="ecommerce" className="container tab-pane fade"><br />*/}
                                                {/*<a href="default/product.html" target="_blank">*/}
                                                    {/*<img src={require('../../../assets/images/landing/app/ecommerce.png')}*/}
                                                         {/*className="img-fluid" alt=""/>*/}
                                                {/*</a>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-space key-features-section bg-white" id="key-feature">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="landing-header">
                                            <h2>Key Features</h2>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-1.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Seamless Coding</h5>
                                                <p className="mb-0">We have crafted our templates very carefully and our
                                                    code is W3C validated</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-2.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Lots of Table Example</h5>
                                                <p className="mb-0">We made sure that you get lots of table options to
                                                    choose</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-3.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Easy to Customize</h5>
                                                <p className="mb-0">Our Template is easy to do any required changes</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-6.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Gallery Options</h5>
                                                <p className="mb-0">Included gallery options for you to showcase
                                                    products</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-7.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Editors</h5>
                                                <p className="mb-0">Options to select the editors that you are
                                                    comfortable with</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-9.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Bootstrap</h5>
                                                <p className="mb-0">Cloudui is built with latest version of
                                                    bootstrap</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-10.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Fully responsive</h5>
                                                <p className="mb-0">100% fully responsive layout, It display well in any
                                                    size of devices</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-11.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Rich components</h5>
                                                <p className="mb-0">A lot of UI components, plugins and widgets</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-12.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Data visualisation</h5>
                                                <p className="mb-0">A lot of customised chart libraries</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-13.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>3000s of icons</h5>
                                                <p className="mb-0">Over 3000+ icons to choose</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-14.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>SCSS</h5>
                                                <p className="mb-0">Built with scss to make development and
                                                    customisation easier</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-15.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Support</h5>
                                                <p className="mb-0">we are always there as your backbone for any of your
                                                    minor query</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main pb-0">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-16.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content pb-xs-feature">
                                                <h5>Clean design</h5>
                                                <p className="mb-0">Clean and attractive design</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main pb-0 xs-mt-feature">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-17.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content pb-xs-feature">
                                                <h5>Color templates</h5>
                                                <p className="mb-0">Dark and light templates available</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="feature-main pb-0 xs-mt-feature">
                                            <div className="feature-icon">
                                                <img src={require('../../../assets/images/landing/icon/key-feature-18.png')}
                                                     className="img-fluid" alt=""/>
                                            </div>
                                            <div className="feature-content">
                                                <h5>Documentation</h5>
                                                <p className="mb-0">Well documented</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-space advance-widget many-feature-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="landing-header">
                                            <h2>Lots Of More...</h2>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h5>+ <span className="digits">2+</span> Dashboards</h5>
                                        <h5>+ <span>Multiple Navbar Options</span></h5>
                                        <h5>+ <span>Multiple Menu Options</span></h5>
                                        <h5>+ <span>Footer Options</span></h5>
                                        <h5>+ <span>Advance Card UI</span></h5>
                                        <h5>+ <span className="digits">4</span> Icon Sets</h5>
                                        <h5 className="mb-0">+ <span className="digits">4</span> Form Wizard</h5>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="mt-md-many-feature">+ <span>Customize Bootstrap Tables</span>
                                        </h5>
                                        <h5>+ <span>Tables & Datatable</span></h5>
                                        <h5>+ <span className="digits">2</span> Chart Libraries</h5>
                                        <h5>+ <span>GMaps & Vector Maps</span></h5>
                                        <h5>+ <span>Organized Folder Structure</span></h5>
                                        <h5>+ <span>Fully Responsive Layouts</span></h5>
                                        <h5 className="mb-0">+ <span>SASS Support</span></h5>
                                    </div>
                                    <div className="col-lg-4">
                                        <h5 className="mt-md-many-feature">+ <span>Cross Browser Compatibility</span>
                                        </h5>
                                        <h5>+ <span>Well Documented</span></h5>
                                        <h5>+ <span>Clean & Commented Code</span></h5>
                                        <h5>+ <span>Range Slider</span></h5>
                                        <h5>+ <span className="digits">6</span> In-Build Apps</h5>
                                        <h5>+ <span>Include All Necessary Pages</span></h5>
                                        <h5 className="mb-0">+ <span>And Much More...</span></h5>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-space updates-features advance-bg"
                                 style ={ { backgroundImage: "url("+background_freatures+")" } }>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="landing-header">
                                            <h2 className="mb-0">Every Updates Upcoming Features</h2>
                                            <p> Pre-Build Admin(Coming Soon..)</p>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-3 col-6 updates-xs-mb">
                                                            <img
                                                                src={require('../../../assets/images/landing/cooming/pre-build-admin-1.png')}
                                                                className="img-fluid" alt=""/>
                                                            <h6 className="mb-0">Real Estate</h6>
                                                        </div>
                                                        <div className="col-md-3 col-6 updates-xs-mb">
                                                            <img
                                                                src={require('../../../assets/images/landing/cooming/pre-build-admin-2.png')}
                                                                className="img-fluid" alt=""/>
                                                            <h6 className="mb-0">University</h6>
                                                        </div>
                                                        <div className="col-md-3 col-6">
                                                            <img
                                                                src={require('../../../assets/images/landing/cooming/pre-build-admin-3.png')}
                                                                className="img-fluid" alt=""/>
                                                            <h6 className="mb-0">Hospital</h6>
                                                        </div>
                                                        <div className="col-md-3 col-6">
                                                            <img
                                                                src={require('../../../assets/images/landing/cooming/pre-build-admin-4.png')}
                                                                className="img-fluid" alt=""/>
                                                            <h6 className="mb-0">Many more..</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-space advance-widget bg-white" id="support">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="landing-header">
                                            <h2>Support</h2>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="support-section">
                                            <i className="icon-headphone-alt font-primary"></i>
                                            <h6>Have any Problem?</h6>
                                            <p>No worries- Support service is always ready to support you</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="support-section">
                                            <i className="icon-import font-secondary"></i>
                                            <h6>Are you new user and you can't install template?</h6>
                                            <p>No worries- Well install free template for you</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="support-section">
                                            <i className="icon-help-alt font-success"></i>
                                            <h6>Frequently asked questions</h6>
                                            <p className="mb-0">If you have any question, please feel free to post it in
                                                our support system</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="section-space footer-bg" id="rate">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h2>if you like our products Please Rate Us</h2>
                                        <div className="star-rate">
                                            <i className="fa fa-star font-warning"></i>
                                            <i className="fa fa-star font-warning"></i>
                                            <i className="fa fa-star font-warning"></i>
                                            <i className="fa fa-star font-warning"></i>
                                            <i className="fa fa-star font-warning"></i>
                                        </div>
                                        <a href={`https://themeforest.net/downloads`} target="_blank" className="btn btn-warning btn-lg"
                                                data-original-title="btn btn-info btn-lg" title="">Rate Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="tap-top">
                            <div>
                                <i className="fa fa-angle-double-up"></i>
                            </div>
                        </div>
                    </div>

                </div>
                {/*page-wrapper Ends*/}
            </div>
        )
    }
}


export default Landing;