import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Slider from "react-slick";
import Rating from 'react-rating';


import Breadcrumb from '../../common/breadcrumb.component'


class ProductPage extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);

        this.state = {
            rating:2,
            nav1: null,
            nav2: null,
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }


    render () {

        var products = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true
        };
        var productsnav = {
            slidesToShow: 3,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Product Page" parent="E-commerce" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="row product-page-main">
                                    <div className="col-xl-4">
                                        <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}
                                                className="product-slider">
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/01.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/02.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/03.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/04.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/05.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/06.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/07.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/08.jpg')} alt="" />
                                            </div>
                                        </Slider>

                                        <Slider
                                            asNavFor={this.state.nav1}
                                            ref={slider => (this.slider2 = slider)}
                                            slidesToShow={4}
                                            swipeToSlide={true}
                                            focusOnSelect={true}
                                        >
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/01.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/02.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/03.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/04.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid"  src={require('../../../assets/images/ecommerce/product/05.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/06.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/07.jpg')} alt="" />
                                            </div>
                                            <div className="item">
                                                <img className="img-fluid" src={require('../../../assets/images/ecommerce/product/08.jpg')} alt="" />
                                            </div>
                                        </Slider>

                                    </div>
                                    <div className="col-xl-8">
                                        <div className="product-page-details">
                                            <h5>Fusion white & blue printed regular fit asymmetric</h5>
                                            <div className="d-flex">
                                                <Rating {...this.props} initialRating={this.state.rating} />
                                                <span className="center-review">(250 review)</span>
                                            </div>
                                        </div>
                                        <hr/>
                                        <p> It is a long established fact that a reader will be distracted by the readable
                                            content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                            it has a more-or-less normal distribution of letters,It is a long established fact
                                            that a reader will be distracted by the readable content of a page when looking at
                                            its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters </p>
                                        <div className="product-price digits">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                        <hr/>
                                        <div>
                                            <table width="80%">
                                                <tbody>

                                                <tr>
                                                    <td>Brand :</td>
                                                    <td>shopcart_fashion</td>
                                                </tr>
                                                <tr>
                                                    <td>Availability :</td>
                                                    <td className="in-stock">In stock</td>
                                                </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                        <hr/>
                                        <ul className="product-color m-t-15">
                                            <li className="bg-primary"></li>
                                            <li className="bg-secondary"></li>
                                            <li className="bg-success"></li>
                                            <li className="bg-info"></li>
                                            <li className="bg-warning"></li>
                                        </ul>
                                        <div className="m-t-15">
                                            <button type="button" className="btn btn-primary-gradien m-r-10"
                                                    data-original-title="btn btn-info-gradien" title="">Add To Cart
                                            </button>
                                            <button type="button" className="btn btn-secondary-gradien m-r-10"
                                                    data-original-title="btn btn-info-gradien" title="">Quick View
                                            </button>
                                            <button type="button" className="btn btn-success-gradien"
                                                    data-original-title="btn btn-info-gradien" title="">Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="row product-page-main">
                                    <div className="col-sm-12">
                                        <Nav tabs className="nav nav-tabs nav-material mb-0">
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '1'}) }
                                                    onClick={() => { this.toggle('1'); }}
                                                >
                                                    Febric
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '2' })}
                                                    onClick={() => { this.toggle('2'); }}
                                                >
                                                    Video
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '3' })}
                                                    onClick={() => { this.toggle('3'); }}
                                                >
                                                    Details
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '4' })}
                                                    onClick={() => { this.toggle('4'); }}
                                                >
                                                    Brand
                                                </NavLink>
                                            </NavItem>
                                        </Nav>

                                        <TabContent className="tab-content" activeTab={this.state.activeTab}>
                                            <TabPane tabId="1" className="tab-pane fade show">
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mb-0 m-t-20">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                            cillum dolore eu fugiat nulla pariatur."
                                                        </p>

                                                        <p className="mb-0 m-t-20">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum."
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="2" className="tab-pane fade show">
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mb-0 m-t-20">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                            consequat. Excepteur sint occaecat cupidatat
                                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                                            laborum."
                                                        </p>
                                                        <p className="mb-0 m-t-20">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum."
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="3" className="tab-pane fade show">
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mb-0 m-t-20">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua.  Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                                            laborum."
                                                        </p>

                                                        <p className="mb-0 m-t-20">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                            culpa qui officia deserunt mollit anim id est laborum."
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                            <TabPane tabId="4" className="tab-pane fade show">
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mb-0 m-t-20">
                                                            Ut enim ad minim veniam,
                                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                                                            laborum."
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </TabPane>
                                        </TabContent>

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


export default ProductPage