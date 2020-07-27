import React, {Component} from 'react';
import CountUp from 'react-countup';

// import Custom Componenets
import Breadcrumb from '../common/breadcrumb.component';

class Samplepage extends Component {

    render() {
        return (
            <div>
                <Breadcrumb title="Pricing" parent="Pricing"/>
                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Pricing</h5>
                                </div>
                                <div className="card-body m-auto">
                                    <div className="pricing-wrapper-card">
                                        <div className="row">
                                            <div className="pricing-card col-xl-4">
                                                <div className="card-title">
                                                    <h3>Basic</h3>
                                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                                </div>
                                                <div className="card-price">
                                                    <h1>
                                                        <sup>$</sup>
                                                        <span className="counter" ><CountUp end={12}/></span>
                                                        <small>month</small>
                                                    </h1>
                                                </div>
                                                <div className="card-description">
                                                    <ul>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Pellentesque hendrerit</li>
                                                        <li>Aliquam at orci aliquam</li>
                                                        <li>Praesent non sapien laoreet</li>
                                                    </ul>
                                                </div>
                                                <div className="card-action">
                                                    <button type="button">Get Basic</button>
                                                </div>
                                            </div>
                                            <div className="pricing-card popular col-xl-4">
                                                <div className="card-ribbon">
                                                    <span>most popular</span>
                                                </div>
                                                <div className="card-title">
                                                    <h3>Pro</h3>
                                                    <h5>Maecenas ut justo molestie, pharetra arcu ac, mollis est.</h5>
                                                </div>
                                                <div className="card-price">
                                                    <h1>
                                                        <sup>$</sup>
                                                        <span className="counter"><CountUp end={15}/></span>
                                                        <small>month</small>
                                                    </h1>
                                                </div>
                                                <div className="card-description">
                                                    <ul>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Pellentesque hendrerit</li>
                                                        <li>Aliquam at orci aliquam</li>
                                                        <li>Praesent non sapien laoreet</li>
                                                    </ul>
                                                </div>
                                                <div className="card-action">
                                                    <button type="button">Get Pro</button>
                                                </div>
                                            </div>
                                            <div className="pricing-card col-xl-4">
                                                <div className="card-title">
                                                    <h3>Premium</h3>
                                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                                </div>
                                                <div className="card-price">
                                                    <h1>
                                                        <sup>$</sup>
                                                        <span className="counter"><CountUp end={20}/></span>
                                                        <small>month</small>
                                                    </h1>
                                                </div>
                                                <div className="card-description">
                                                    <ul>
                                                        <li>Lorem ipsum dolor sit amet</li>
                                                        <li>Pellentesque hendrerit</li>
                                                        <li>Aliquam at orci aliquam</li>
                                                        <li>Praesent non sapien laoreet</li>
                                                    </ul>
                                                </div>
                                                <div className="card-action">
                                                    <button type="button">Get Premium</button>
                                                </div>
                                            </div>
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


export default Samplepage;