import React, {Component} from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

class AlertMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <Breadcrumb title="Alert" parent="Base" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Theme Color Alerts</h5>
                                    <span>Theme color Archive just adding class <code>.dark</code></span>
                                </div>
                                <div className="card-body">
                                    <Alert color="primary dark">
                                        This is a primary alert — check it out!
                                    </Alert>
                                    <Alert color="secondary dark">
                                        This is a secondary alert — check it out!
                                    </Alert>
                                    <Alert color="success dark">
                                        This is a success alert — check it out!
                                    </Alert>
                                    <Alert color="danger dark">
                                        This is a danger alert — check it out!
                                    </Alert>
                                    <Alert color="warning dark">
                                        This is a warning alert — check it out!
                                    </Alert>
                                    <Alert color="info dark">
                                        This is a info alert — check it out!
                                    </Alert>
                                    <Alert color="light dark">
                                        This is a light alert — check it out!
                                    </Alert>
                                    <Alert color="dark dark">
                                        This is a dark alert — check it out!
                                    </Alert>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Link color in theme-color</h5>
                                    <span>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert </span>
                                </div>
                                <div className="card-body">
                                    <Alert color="primary dark">
                                        This is a primary alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="secondary dark">
                                        This is a secondary alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="success dark">
                                        This is a success alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="danger dark">
                                        This is a danger alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="warning dark">
                                        This is a warning alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="info dark">
                                        This is a info alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="light dark">
                                        This is a light alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="dark dark">
                                        This is a dark alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Dismissing</h5>
                                    <span>To animate alerts when dismissing them, be sure to add the .fade and .show classes.</span>
                                </div>
                                <div className="card-body">
                                    <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
                                        I am an alert and I can be dismissed!
                                    </Alert>
                                </div>
                                <div className="card-header">
                                    <h5>Uncontrolled [disable] Alerts</h5>
                                    <span>For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component.</span>
                                </div>
                                <div className="card-body">
                                    <UncontrolledAlert color="success" fade={false}>
                                        I am an alert and I can be dismissed without animating!
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="primary" fade={false}>
                                        I am an alert and I can be dismissed without animating!
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="secondary" fade={false}>
                                        I am an alert and I can be dismissed without animating!
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="warning" fade={false}>
                                        I am an alert and I can be dismissed without animating!
                                    </UncontrolledAlert>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Alert With Icon</h5>
                                    <span>Just add Any icon before text</span>
                                </div>
                                <div className="card-body">
                                    <UncontrolledAlert color="primary" fade={false}>
                                        <i className="icon-heart"></i>   You can check in on some of those fields below.
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="secondary" fade={false}>
                                        <i className="icon-thumb-up"></i>   You can check in on some of those fields below.
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="success" fade={false}>
                                        <i className="icon-help-alt"></i>   You can check in on some of those fields below.
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="info" fade={false}>
                                        <i className="icon-bell"></i>   You can check in on some of those fields below.
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="warning" fade={false}>
                                        <i className="icon-thumb-down"></i>   You can check in on some of those fields below.
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="danger" fade={false}>
                                        <i className="icon-alert"></i>   You can check in on some of those fields below.
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="light" fade={false}>
                                        <i className="icon-info-alt"></i>   You can check in on some of those fields below.
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="dark" fade={false}>
                                        <i className="icon-timer"></i>   You can check in on some of those fields below.
                                    </UncontrolledAlert>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Light Alerts</h5>
                                    <span>Alerts are available for any length of text, as well as an optional dismiss button.</span>
                                </div>
                                <div className="card-body">
                                    <Alert color="primary">
                                        This is a primary alert — check it out!
                                    </Alert>
                                    <Alert color="secondary">
                                        This is a secondary alert — check it out!
                                    </Alert>
                                    <Alert color="success">
                                        This is a success alert — check it out!
                                    </Alert>
                                    <Alert color="danger">
                                        This is a danger alert — check it out!
                                    </Alert>
                                    <Alert color="warning">
                                        This is a warning alert — check it out!
                                    </Alert>
                                    <Alert color="info">
                                        This is a info alert — check it out!
                                    </Alert>
                                    <Alert color="light">
                                        This is a light alert — check it out!
                                    </Alert>
                                    <Alert color="dark">
                                        This is a dark alert — check it out!
                                    </Alert>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Link color</h5>
                                    <span>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert </span>
                                </div>
                                <div className="card-body">
                                    <Alert color="primary">
                                        This is a primary alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="secondary">
                                        This is a secondary alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="success">
                                        This is a success alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="danger">
                                        This is a danger alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="warning">
                                        This is a warning alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="info">
                                        This is a info alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="light">
                                        This is a light alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                    <Alert color="dark">
                                        This is a dark alert with <a href="#" className="alert-link">an example link</a> click it.
                                    </Alert>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 ">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Outline Alerts</h5>
                                    <span>Outline Archive just adding class <code>.outline</code></span>
                                </div>
                                <div className="card-body">
                                    <Alert color="primary outline">
                                        This is a primary alert — check it out!
                                    </Alert>
                                    <Alert color="secondary outline">
                                        This is a secondary alert — check it out!
                                    </Alert>
                                    <Alert color="success outline">
                                        This is a success alert — check it out!
                                    </Alert>
                                    <Alert color="danger outline">
                                        This is a danger alert — check it out!
                                    </Alert>
                                    <Alert color="warning outline">
                                        This is a warning alert — check it out!
                                    </Alert>
                                    <Alert color="info outline">
                                        This is a info alert — check it out!
                                    </Alert>
                                    <Alert color="light outline">
                                        This is a light alert — check it out!
                                    </Alert>
                                    <Alert color="dark outline">
                                        This is a dark alert — check it out!
                                    </Alert>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Outline Dark Alerts</h5>
                                    <span>Outline Archive just adding class <code>.outline-2x</code></span>
                                </div>
                                <div className="card-body">
                                    <Alert color="primary outline-2x">
                                        This is a primary alert — check it out!
                                    </Alert>
                                    <Alert color="secondary outline-2x">
                                        This is a secondary alert — check it out!
                                    </Alert>
                                    <Alert color="success outline-2x">
                                        This is a success alert — check it out!
                                    </Alert>
                                    <Alert color="danger outline-2x">
                                        This is a danger alert — check it out!
                                    </Alert>
                                    <Alert color="warning outline-2x">
                                        This is a warning alert — check it out!
                                    </Alert>
                                    <Alert color="info outline-2x">
                                        This is a info alert — check it out!
                                    </Alert>
                                    <Alert color="light outline-2x">
                                        This is a light alert — check it out!
                                    </Alert>
                                    <Alert color="dark outline-2x">
                                        This is a dark alert — check it out!
                                    </Alert>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Alert With Icon outline</h5>
                                    <span>Just add Any icon before text</span>
                                </div>
                                <div className="card-body">
                                    <UncontrolledAlert color="primary outline" fade={false}>
                                        <p><i className="icon-timer"></i>  Your time Over after <b>5</b> miniute</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="secondary outline" fade={false}>
                                        <p><i className="icon-heart"></i>   Oh snap! Change a few things up and submit again.</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="success outline" fade={false}>
                                        <p><i className="icon-thumb-up"></i>
                                        <b> Well done! </b>You successfully read this important alert message.</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="info outline" fade={false}>
                                        <p><i className="icon-help-alt"></i>  <b>Welcome!</b> Start your day with some alerts.</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="warning outline" fade={false}>
                                        <p><i className="icon-bell"></i>
                                        <b> Congratulation! </b>Your Product Added in Like List</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="danger outline" fade={false}>
                                        <p><i className="icon-thumb-down"></i>  Your  <b> Perfomance </b> is down on this week</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="light outline" fade={false}>
                                        <p><i className="icon-alert"></i>  You can check in on some of those fields below.</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="dark outline" fade={false}>
                                        <p><i className="icon-info-alt"></i>  You can check in on some of those fields below.</p>
                                    </UncontrolledAlert>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Alert With Icon inverse</h5>
                                    <span>Use the <code>.inverse</code> class to quickly provide matching colored links within any alert </span>
                                </div>
                                <div className="card-body">
                                    <UncontrolledAlert color="primary inverse" fade={false}>
                                        <i className="icon-timer"></i>  <p>Your time Over after <b>5</b> miniute</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="secondary inverse" fade={false}>
                                        <i className="icon-heart"></i>  <p>Oh snap! Change a few things up and submit again.</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="success inverse" fade={false}>
                                        <i className="icon-thumb-up"></i>
                                        <p><b> Well done! </b>You successfully read this important alert message.</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="info inverse" fade={false}>
                                        <i className="icon-help-alt"></i>  <p><b>Welcome!</b> Start your day with some alerts.</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="warning inverse" fade={false}>
                                        <i className="icon-bell"></i>
                                        <p><b> Congratulation! </b>Your Product Added in Like List</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="danger inverse" fade={false}>
                                        <i className="icon-thumb-down"></i>  <p>Your  <b> Perfomance </b> is down on this week</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="light inverse" fade={false}>
                                        <i className="icon-alert"></i>  <p>You can check in on some of those fields below.</p>
                                    </UncontrolledAlert>
                                    <UncontrolledAlert color="dark inverse" fade={false}>
                                        <i className="icon-info-alt"></i>  <p>You can check in on some of those fields below.</p>
                                    </UncontrolledAlert>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Additional content</h5>
                                    <span>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</span>
                                </div>
                                <div className="card-body">
                                    <Alert color="primary">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>
                                            Aww yeah, you successfully read this important alert message. This example text is going
                                            to run a bit longer so that you can see how spacing within an alert works with this kind
                                            of content.
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                        </p>
                                    </Alert>
                                    <Alert color="secondary">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>
                                            Aww yeah, you successfully read this important alert message. This example text is going
                                            to run a bit longer so that you can see how spacing within an alert works with this kind
                                            of content.
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                        </p>
                                    </Alert>
                                    <Alert color="success">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>
                                            Aww yeah, you successfully read this important alert message. This example text is going
                                            to run a bit longer so that you can see how spacing within an alert works with this kind
                                            of content.
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                        </p>
                                    </Alert>
                                    <Alert color="danger">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>
                                            Aww yeah, you successfully read this important alert message. This example text is going
                                            to run a bit longer so that you can see how spacing within an alert works with this kind
                                            of content.
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                        </p>
                                    </Alert>
                                    <Alert color="info">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>
                                            Aww yeah, you successfully read this important alert message. This example text is going
                                            to run a bit longer so that you can see how spacing within an alert works with this kind
                                            of content.
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                        </p>
                                    </Alert>
                                    <Alert color="light">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>
                                            Aww yeah, you successfully read this important alert message. This example text is going
                                            to run a bit longer so that you can see how spacing within an alert works with this kind
                                            of content.
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                        </p>
                                    </Alert>
                                    <Alert color="dark">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>
                                            Aww yeah, you successfully read this important alert message. This example text is going
                                            to run a bit longer so that you can see how spacing within an alert works with this kind
                                            of content.
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                        </p>
                                    </Alert>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AlertMessage;
