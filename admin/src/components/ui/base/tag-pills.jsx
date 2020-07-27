import React, {Component} from 'react';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

class TagPills extends Component {
    render() {
        return (
            <div>
                <Breadcrumb title="Tag & Pills" parent="Base" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Contextual variations</h5>
                                </div>
                                <div className="card-body">
                                    <span className="badge badge-primary">Primary</span>
                                    <span className="badge badge-secondary">Secondary</span>
                                    <span className="badge badge-success">Success</span>
                                    <span className="badge badge-info">Info</span>
                                    <span className="badge badge-warning">Warning</span>
                                    <span className="badge badge-danger">Danger</span>
                                    <span className="badge badge-light">Light</span>
                                    <span className="badge badge-dark tag-pills-sm-mb mr-0">Dark</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Contextual variations</h5>
                                </div>
                                <div className="card-body">
                                    <span className="badge badge-pill badge-primary">Primary</span>
                                    <span className="badge badge-pill badge-secondary">Secondary</span>
                                    <span className="badge badge-pill badge-success">Success</span>
                                    <span className="badge badge-pill badge-info">Info</span>
                                    <span className="badge badge-pill badge-warning">Warning</span>
                                    <span className="badge badge-pill badge-danger">Danger</span>
                                    <span className="badge badge-pill badge-light">Light</span>
                                    <span className="badge badge-pill badge-dark tag-pills-sm-mb mr-0">Dark</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Tags with number</h5>
                                </div>
                                <div className="card-body digits">
                                    <a href="#" className="badge badge-primary">1</a>
                                    <a href="#" className="badge badge-secondary">2</a>
                                    <a href="#" className="badge badge-success">3</a>
                                    <a href="#" className="badge badge-info">4</a>
                                    <a href="#" className="badge badge-warning">5</a>
                                    <a href="#" className="badge badge-danger">6</a>
                                    <a href="#" className="badge badge-light">7</a>
                                    <a href="#" className="badge badge-dark mr-0">8</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Pills with number</h5>
                                </div>
                                <div className="card-body digits">
                                    <span className="badge badge-pill badge-primary">1</span>
                                    <span className="badge badge-pill badge-secondary">2</span>
                                    <span className="badge badge-pill badge-success">3</span>
                                    <span className="badge badge-pill badge-info">4</span>
                                    <span className="badge badge-pill badge-warning">5</span>
                                    <span className="badge badge-pill badge-danger">6</span>
                                    <span className="badge badge-pill badge-light">7</span>
                                    <span className="badge badge-pill badge-dark mr-0">8</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Tags With icon</h5>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="badge badge-primary"><i className="icofont icofont-cur-dollar"></i></a>
                                    <a href="#" className="badge badge-secondary"><i className="icofont icofont-headphone-alt"></i></a>
                                    <a href="#" className="badge badge-success"><i className="icofont icofont-link"></i></a>
                                    <a href="#" className="badge badge-info"><i className="icofont icofont-brainstorming"></i></a>
                                    <a href="#" className="badge badge-warning"><i className="icofont icofont-safety-pin"></i></a>
                                    <a href="#" className="badge badge-danger"><i className="icofont icofont-ui-laoding"></i></a>
                                    <a href="#" className="badge badge-light"><i className="icofont icofont-heart"></i></a>
                                    <a href="#" className="badge badge-dark mr-0"><i className="icofont icofont-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Pills with number</h5>
                                </div>
                                <div className="card-body">
                                    <a href="#" className="badge badge-pill badge-primary"><i className="icofont icofont-cur-dollar"></i></a>
                                    <a href="#" className="badge badge-pill badge-secondary"><i className="icofont icofont-headphone-alt"></i></a>
                                    <a href="#" className="badge badge-pill badge-success"><i className="icofont icofont-link"></i></a>
                                    <a href="#" className="badge badge-pill badge-info"><i className="icofont icofont-brainstorming"></i></a>
                                    <a href="#" className="badge badge-pill badge-warning"><i className="icofont icofont-safety-pin"></i></a>
                                    <a href="#" className="badge badge-pill badge-danger"><i className="icofont icofont-ui-laoding"></i></a>
                                    <a href="#" className="badge badge-pill badge-light"><i className="icofont icofont-heart"></i></a>
                                    <a href="#" className="badge badge-pill badge-dark mr-0"><i className="icofont icofont-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Badges Example</h5>
                                </div>
                                <div className="card-body">
                                    <h1>heading <span className="badge badge-primary">New</span></h1>
                                    <h2>heading <span className="badge badge-primary">New</span></h2>
                                    <h3>heading <span className="badge badge-primary">New</span></h3>
                                    <h4>heading <span className="badge badge-primary">New</span></h4>
                                    <h5>heading <span className="badge badge-primary">New</span></h5>
                                    <h6>heading <span className="badge badge-primary mr-0">New</span></h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Badges as part buttons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <button type="button" className="btn btn-primary">
                                            Messages <span className="badge badge-pill badge-light mr-0"><i className="icofont icofont-envelope"></i></span>
                                        </button>
                                    </div>
                                    <div className="mb-3">
                                        <button type="button" className="btn btn-secondary">
                                            Notifications <span className="badge badge-pill badge-light mr-0"><i className="icofont icofont-notification"></i></span>
                                        </button>
                                    </div>
                                    <div className="mb-3">
                                        <button type="button" className="btn badge-success">
                                            Update available <span className="badge badge-pill badge-light mr-0"><i className="icofont icofont-settings"></i></span>
                                        </button>
                                    </div>
                                    <div className="mb-3">
                                        <button type="button" className="btn badge-info">
                                            Playing Now <span className="badge badge-pill badge-light mr-0"><i className="icofont icofont-ui-music"></i></span>
                                        </button>
                                    </div>
                                    <div className="mb-3">
                                        <button type="button" className="btn badge-warning">
                                            1.2 GB Used <span className="badge badge-pill badge-light mr-0"><i className="icofont icofont-exclamation-tringle"></i></span>
                                        </button>
                                    </div>
                                    <div className="">
                                        <button type="button" className="btn badge-danger">
                                            Alert <span className="badge badge-pill badge-light"><i className="icofont icofont-danger-zone"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TagPills;