import React, {Component} from 'react';

import Breadcrumb from '../../common/breadcrumb.component'


class Product extends Component {

    render () {

        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Product" parent="E-commerce" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/01.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <div className="ribbon ribbon-danger">Sale</div>
                                        <img src={require('../../../assets/images/ecommerce/product/02.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <div className="ribbon ribbon-success ribbon-right">50%</div>
                                        <img src={require('../../../assets/images/ecommerce/product/04.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/02.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="ribbon ribbon-secondary ribbon-vertical-left"><i
                                        className="icon-gift"></i></div>
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/01.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <div className="ribbon ribbon-bookmark  ribbon-secondary">Hot</div>
                                        <img src={require('../../../assets/images/ecommerce/product/04.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/02.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <div className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info"><i
                                            className="icofont icofont-love"></i></div>
                                        <img src={require('../../../assets/images/ecommerce/product/02.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <div className="ribbon ribbon-clip  ribbon-warning">Hot</div>
                                        <img src={require('../../../assets/images/ecommerce/product/04.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/02.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/01.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/04.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/02.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="product-box">
                                    <div className="product-img">
                                        <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid"
                                             alt=""/>
                                        <div className="product-hover">
                                            <ul>
                                                <li><i className="icon-shopping-cart"></i></li>
                                                <li><i className="icon-eye"></i></li>
                                                <li><i className="icofont icofont-law-alt-2"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <h4>Woman</h4>
                                        <p>Simply dummy text of the printing.</p>
                                        <div className="product-price">
                                            <del>$350.00</del>
                                            $26.00
                                        </div>
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


export default Product