import React, {Component} from 'react';
import CountUp from 'react-countup';

import Breadcrumb from '../../common/breadcrumb.component'

class UserCards extends Component {

    render() {
        return(
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="User Cards" parent="Users" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <img src={require('../../../assets/images/user-card/1.jpg')} className="img-fluid" alt=""/>
                                </div>
                                <div className="card-profile">
                                    <img src={require('../../../assets/images/avtar/3.jpg')} className="rounded-circle" alt=""/>
                                </div>
                                <ul className="card-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                </ul>
                                <div className="text-center profile-details">
                                    <h4>Mark Jecno</h4>
                                    <h6>Manager</h6>
                                </div>
                                <div className="card-footer row">
                                    <div className="col-4 col-sm-4">
                                        <h6>Follower</h6>
                                        <h3 className="counter"><CountUp end={9564} duration={5} /></h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Following</h6>
                                        <h3><span className="counter"><CountUp end={49} duration={2} /></span>K</h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Total Post</h6>
                                        <h3><span className="counter"><CountUp end={96} duration={3} /></span>M</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <img src={require('../../../assets/images/user-card/2.jpg') } className="img-fluid" alt=""/>
                                </div>
                                <div className="card-profile">
                                    <img src={require('../../../assets/images/avtar/16.jpg')} className="rounded-circle" alt=""/>
                                </div>
                                <ul className="card-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                </ul>
                                <div className="text-center profile-details">
                                    <h4>Johan Deo</h4>
                                    <h6>Designer</h6>
                                </div>
                                <div className="card-footer row">
                                    <div className="col-4 col-sm-4">
                                        <h6>Follower</h6>
                                        <h3 className="counter"><CountUp end={2578} duration={5} /></h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Following</h6>
                                        <h3><span className="counter"><CountUp end={26} duration={2} /></span>K</h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Total Post</h6>
                                        <h3><span className="counter"><CountUp end={96} duration={3} /></span>M</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <img src={require('../../../assets/images/user-card/3.jpg')} className="img-fluid" alt=""/>
                                </div>
                                <div className="card-profile">
                                    <img src={require('../../../assets/images/avtar/11.jpg')} className="rounded-circle" alt=""/>
                                </div>
                                <ul className="card-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                </ul>
                                <div className="text-center profile-details">
                                    <h4>Dev John</h4>
                                    <h6>Devloper</h6>
                                </div>
                                <div className="card-footer row">
                                    <div className="col-4 col-sm-4">
                                        <h6>Follower</h6>
                                        <h3 className="counter"><CountUp end={6545} duration={5} /></h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Following</h6>
                                        <h3><span className="counter"><CountUp end={91} duration={3} /></span>K</h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Total Post</h6>
                                        <h3><span className="counter"><CountUp end={21} duration={2} /></span>M</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <img src={require('../../../assets/images/user-card/4.jpg')} className="img-fluid" alt=""/>
                                </div>
                                <div className="card-profile">
                                    <img src={require('../../../assets/images/avtar/16.jpg')} className="rounded-circle" alt=""/>
                                </div>
                                <ul className="card-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                </ul>
                                <div className="text-center profile-details">
                                    <h4>Johan Deo</h4>
                                    <h6>Designer</h6>
                                </div>
                                <div className="card-footer row">
                                    <div className="col-4 col-sm-4">
                                        <h6>Follower</h6>
                                        <h3 className="counter"><CountUp end={2578} duration={5} /></h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Following</h6>
                                        <h3><span className="counter"><CountUp end={26} duration={2} /></span>K</h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Total Post</h6>
                                        <h3><span className="counter"><CountUp end={96} duration={3} /></span>M</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <img src={require('../../../assets/images/user-card/2.jpg')} className="img-fluid" alt=""/>
                                </div>
                                <div className="card-profile">
                                    <img src={require('../../../assets/images/avtar/11.jpg')} className="rounded-circle" alt=""/>
                                </div>
                                <ul className="card-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                </ul>
                                <div className="text-center profile-details">
                                    <h4>Dev John</h4>
                                    <h6>Devloper</h6>
                                </div>
                                <div className="card-footer row">
                                    <div className="col-4 col-sm-4">
                                        <h6>Follower</h6>
                                        <h3 className="counter"><CountUp end={6545} duration={5} /></h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Following</h6>
                                        <h3><span className="counter"><CountUp end={96} duration={3} /></span>K</h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Total Post</h6>
                                        <h3><span className="counter"><CountUp end={25} duration={2} /></span>M</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <img src={require('../../../assets/images/user-card/1.jpg') } className="img-fluid" alt=""/>
                                </div>
                                <div className="card-profile">
                                    <img src={require('../../../assets/images/avtar/3.jpg')} className="rounded-circle" alt=""/>
                                </div>
                                <ul className="card-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                </ul>
                                <div className="text-center profile-details">
                                    <h4>Mark Jecno</h4>
                                    <h6>Manager</h6>
                                </div>
                                <div className="card-footer row">
                                    <div className="col-4 col-sm-4">
                                        <h6>Follower</h6>
                                        <h3 className="counter"><CountUp end={9564} duration={5} /></h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Following</h6>
                                        <h3><span className="counter"><CountUp end={49} duration={2} /></span>K</h3>
                                    </div>
                                    <div className="col-4 col-sm-4">
                                        <h6>Total Post</h6>
                                        <h3><span className="counter"><CountUp end={98} duration={4} /></span>M</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserCards