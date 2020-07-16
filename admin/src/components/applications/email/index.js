import React, {Component} from 'react';
import { TabContent, TabPane } from 'reactstrap';
import CKEditor from "react-ckeditor-component";


import Breadcrumb from '../../common/breadcrumb.component'


class EmailApp extends Component {
    constructor(props) {
        super(props);

        this.mailToggle = this.mailToggle.bind(this);
        this.updateContent = this.updateContent.bind(this);

        this.state = {
            content: 'content',
            SelectedTab: '2',
            toggleMore: false
        }
    }

    mailToggle(tab) {
        if (this.state.SelectedTab !== tab) {
            this.setState({
                SelectedTab: tab
            });
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }


    onBlur(evt){
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt){
        console.log("afterPaste event called with event info: ", evt);
    }

    HandleToggleMore() {
        this.setState({
            toggleMore:!this.state.toggleMore
        })
    }

    render () {

        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Email App" parent="E-Mail App" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="email-wrap">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="email-left-aside">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="email-app-sidebar">
                                                <div className="media">
                                                    <div className="media-size-email">
                                                        <img className="mr-3 rounded-circle"
                                                             src={require('../../../assets/images/user/user.png')} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="f-w-600">MARKJENCO</h6>
                                                        <p>Markjecno@gmail.com</p>
                                                    </div>
                                                </div>
                                                <ul className="nav main-menu" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="btn-primary btn-block btn-mail"
                                                           id="pills-darkhome-tab" data-toggle="pill"
                                                           href="#pills-darkhome" role="tab"
                                                           aria-controls="pills-darkhome" aria-selected="true"
                                                           onClick={() => { this.mailToggle('1'); }}>
                                                            <i className="icofont icofont-envelope mr-2"></i> NEW MAIL</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a id="pills-darkprofile-tab" className="show"
                                                           data-toggle="pill" href="#pills-darkprofile" role="tab"
                                                           aria-controls="pills-darkprofile" aria-selected="false"
                                                           onClick={() => { this.mailToggle('2'); }}>
                                                            <span className="title"><i className="icon-import"></i> Inbox</span>
                                                            <span className="badge pull-right digits">(236)</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-folder"></i> All mail</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-new-window"></i> Sent</span>
                                                            <span className="badge pull-right digits">(69)</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-pencil-alt"></i> DRAFT</span>
                                                            <span className="badge pull-right digits">(59)</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-trash"></i> TRASH</span>
                                                            <span className="badge pull-right digits">(99)</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-info-alt"></i> IMPORTANT</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-star"></i> Starred</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr/>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-email"></i> UNREAD</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-export"></i> SPAM</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-share"></i> OUTBOX</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-file"></i> UPDATE</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-bell"></i> ALERT</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="title"><i className="icon-notepad"></i> NOTES</span>
                                                            <span className="badge pull-right digits">(20)</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="email-right-aside">
                                    <div className="card email-body">
                                        <div className="pr-0 b-r-light">
                                            <div className="email-top">
                                                <div className="row">
                                                    <div className="col">
                                                        <h5>Inbox</h5>
                                                    </div>
                                                    <div className="col text-right">
                                                        <div className="dropdown">
                                                            <button
                                                                onClick={() => this.HandleToggleMore()}
                                                                className="btn bg-transparent dropdown-toggle p-0 text-muted"
                                                                type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                                More
                                                            </button>
                                                            <div className={`dropdown-menu ${this.state.toggleMore?'show':''}`}
                                                                 aria-labelledby="dropdownMenuButton">
                                                                <a className="dropdown-item" href="#">Action</a>
                                                                <a className="dropdown-item" href="#">Another action</a>
                                                                <a className="dropdown-item" href="#">Something else
                                                                    here</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="inbox">
                                                <div className="media">
                                                    <div className="media-size-email">
                                                        <img className="mr-3 rounded-circle"
                                                             src={require('../../../assets/images/user/user.png')} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Pork Lorn <small><span
                                                            className="digits">(15</span> July <span
                                                            className="digits">2018)</span></small></h6>
                                                        <p>Mattis luctus. Donec nisi diam,</p>
                                                    </div>
                                                </div>
                                                <div className="media active">
                                                    <div className="media-size-email">
                                                        <img className="mr-3 rounded-circle"
                                                             src={require('../../../assets/images/user/user.png')} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Lorm lpsa <small><span
                                                            className="digits">(20</span> January)</small></h6>
                                                        <p>Mattis luctus. Donec nisi diam,</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="media-size-email">
                                                        <img className="mr-3 rounded-circle"
                                                             src={require('../../../assets/images/user/user.png')} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Hileri makr <small><span
                                                            className="digits">(20</span> Aug<span
                                                            className="digits"> 2018)</span></small></h6>
                                                        <p>Mattis luctus. Donec nisi diam,</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="media-size-email">
                                                        <img className="mr-3 rounded-circle"
                                                             src={require('../../../assets/images/user/user.png')} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Lion Lorpa <small><span
                                                            className="digits">(02</span> Jun <span
                                                            className="digits">2016)</span></small></h6>
                                                        <p>Mattis luctus. Donec nisi diam,</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="media-size-email">
                                                        <img className="mr-3 rounded-circle"
                                                             src={require('../../../assets/images/user/user.png')} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6 className="mt-0">Solvn Relto <small><span
                                                            className="digits">(25</span> July <span
                                                            className="digits">2015)</span></small></h6>
                                                        <p>Mattis luctus. Donec nisi diam,</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="media-size-email">
                                                        <img className="mr-3 rounded-circle"
                                                             src={require('../../../assets/images/user/user.png')} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Repro Soft <small><span
                                                            className="digits">(15</span> July <span
                                                            className="digits">2018)</span></small></h6>
                                                        <p>Mattis luctus. Donec nisi diam,</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <div className="media-size-email">
                                                        <img className="mr-3 rounded-circle"
                                                             src={require('../../../assets/images/user/user.png')} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h6>Lion Lorpa <small><span
                                                            className="digits">(02</span> Jun <span
                                                            className="digits">2016)</span></small></h6>
                                                        <p>Mattis luctus. Donec nisi diam,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12">
                                <div className="email-right-aside">
                                    <div className="card email-body radius-left">
                                        <div className="pl-0">
                                            <TabContent className="tab-content" activeTab={this.state.SelectedTab}>
                                                <TabPane tabId="1">
                                                        <div className="email-compose">
                                                            <div className="email-top compose-border">
                                                                <div className="row">
                                                                    <div className="col-sm-8 xl-50">
                                                                        <h4 className="mb-0">New Message</h4>
                                                                    </div>
                                                                    <div className="col-sm-4 btn-middle xl-50">
                                                                        <button type="button"
                                                                                className="btn btn-primary btn-block btn-mail text-center mb-0 mt-0">
                                                                            <i className="fa fa-paper-plane mr-2"></i> SEND
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="email-wrapper">
                                                                <form className="theme-form">
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputEmail1"
                                                                               className="col-form-label pt-0">To</label>
                                                                        <input type="email" className="form-control"
                                                                               id="exampleInputEmail1"
                                                                               aria-describedby="emailHelp" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label
                                                                            htmlFor="exampleInputPassword1">Subject</label>
                                                                        <input type="text" className="form-control"
                                                                               id="exampleInputPassword1" />
                                                                    </div>
                                                                    <div className="form-group mb-0">
                                                                        <label className="text-muted">Message</label>
                                                                            <CKEditor
                                                                                activeClass="p10"
                                                                                content={this.state.content}
                                                                                events={{
                                                                                    "blur": this.onBlur,
                                                                                    "afterPaste": this.afterPaste
                                                                                }}
                                                                            />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <div className="email-content">
                                                        <div className="email-top">
                                                            <div className="row">
                                                                <div className="col-md-6 xl-100 col-sm-12">
                                                                    <div className="media">
                                                                        <img className="mr-3 rounded-circle"
                                                                             src={require('../../../assets/images/user/user.png')}
                                                                             alt="" />
                                                                            <div className="media-body">
                                                                                <h6>Lorm lpsa <small><span
                                                                                    className="digits">(20</span> January) <span
                                                                                    className="digits">6:00</span> AM
                                                                                </small></h6>
                                                                                <p>Mattis luctus. Donec nisi diam
                                                                                    text.</p>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-sm-12">
                                                                    <div className="float-right d-flex">
                                                                        <p className="user-emailid">Lormlpsa<span
                                                                            className="digits">23</span>@company.com</p>
                                                                        <i className="fa fa-star-o f-18 mt-1"></i>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="email-wrapper">
                                                            <p>Hello</p>
                                                            <p>Dear Sir Good Morning,</p>
                                                            <h5>Elementum varius nisi vel tempus. Donec eleifend egestas
                                                                viverra.</h5>
                                                            <p className="m-b-20">Lorem ipsum dolor sit amet,
                                                                consectetur adipiscing elit. Curabitur non diam
                                                                facilisis, commodo libero et, commodo sapien.
                                                                Pellentesque sollicitudin massa sagittis dolor
                                                                facilisis, sit amet vulputate nunc molestie.
                                                                Pellentesque maximus nibh id luctus porta. Ut
                                                                consectetur dui nec nulla mattis luctus. Donec nisi
                                                                diam, congue vitae felis at, ullamcorper bibendum
                                                                tortor. Vestibulum pellentesque felis felis. Etiam ac
                                                                tortor felis. Ut elit arcu, rhoncus in laoreet vel,
                                                                gravida sed tor opuouououotor. </p>
                                                            <p>In elementum varius nisi vel tempus. Donec eleifend
                                                                egestas viverra. Donec dapibus sollicitudin blandit.
                                                                Donec scelerisque purus sit amet feugiat efficitur.
                                                                Quisque feugiat semper sapien vel hendrerit. Mauris
                                                                lacus felis, consequat nec pellentesque viverra,
                                                                venenatis a lorem. Sed urna lectus.Quisque feugiat
                                                                semper sapien vel hendrerit</p>
                                                            <hr />
                                                                <div className="d-inline-block">
                                                                    <h6 className="text-muted"><i
                                                                        className="icofont icofont-clip"></i> ATTACHMENTS
                                                                    </h6>
                                                                    <a href="#"
                                                                       className="text-muted text-right right-download"><i
                                                                        className="fa fa-long-arrow-down mr-2"></i>Download
                                                                        All</a>
                                                                    <div className="clearfix"></div>
                                                                </div>
                                                                <div className="attachment">
                                                                    <ul className="list-inline">
                                                                        <li className="list-inline-item">
                                                                            <img src={require('../../../assets/images/email/1.jpg')}
                                                                                 className="img-fluid" alt="" />
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <img src={require('../../../assets/images/email/2.jpg')}
                                                                                 className="img-fluid" alt="" />
                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <img src={require('../../..//assets/images/email/3.jpg')}
                                                                                 className="img-fluid" alt="" />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <hr />
                                                                <div className="action-wrapper">
                                                                    <ul className="actions">
                                                                        <li><a href="#" className="text-muted"><i
                                                                            className="fa fa-reply mr-2"></i>Reply</a>
                                                                        </li>
                                                                        <li><a href="#" className="text-muted"><i
                                                                            className="fa fa-reply-all mr-2"></i>Reply
                                                                            All</a></li>
                                                                        <li><a href="#" className="text-muted"><i
                                                                            className="fa fa-share mr-2"></i></a>Forward
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Container-fluid Ends*/}
            </div>
        )
    }
}


export default EmailApp
