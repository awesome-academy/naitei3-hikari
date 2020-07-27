import React, {Component} from 'react';
import { Table, Button } from 'reactstrap';
import Breadcrumb from '../../common/breadcrumb.component'



class PaymentDetails extends Component {

    render () {
        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Payment Details" parent="E-commerce" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid credit-card">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Credit card </h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4 text-center">
                                            <img src={require('../../../assets/images/ecommerce/card.png')} className="img-fluid"
                                                 alt=""/>
                                        </div>
                                        <div className="col-md-8">
                                            <form className="theme-form mega-form">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Card number" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="First Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="date" className="form-control" />
                                                </div>
                                                <div className="form-group mb-0">
                                                    <input type="text" className="form-control"
                                                           placeholder="Full Name" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 debit-card">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Debit card </h5>
                                </div>
                                <div className="card-body">
                                    <form className="theme-form e-commerce-form row">
                                        <div className="form-group col-6 p-r-0">
                                            <input type="text" className="form-control"
                                                   placeholder="Full name here" />
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="text" className="form-control" placeholder="Card number" />
                                        </div>
                                        <div className="form-group col-6 p-r-0">
                                            <input type="text" className="form-control" placeholder="CVV number" />
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="text" className="form-control" placeholder="CVC" />
                                        </div>
                                        <div className="col-12">
                                            <label className="col-form-label p-t-0">Expiration Date</label>
                                        </div>
                                        <div className="form-group col-6 p-r-0">
                                            <select className="form-control" size="1">
                                                <option>Select Month</option>
                                                <option>Jan</option>
                                                <option>Fab</option>
                                                <option>March</option>
                                                <option>April</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-6">
                                            <select className="form-control" size="1">
                                                <option>Select Year</option>
                                                <option>2015</option>
                                                <option>2016</option>
                                                <option>2017</option>
                                                <option>2018</option>
                                                <option>2019</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <button type="button" className="btn btn-info-gradien btn-block"
                                                    data-original-title="btn btn-info-gradien" title="">Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>COD</h5>
                                </div>
                                <div className="card-body">
                                    <form className="theme-form row">
                                        <div className="form-group col-6 p-r-0">
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                        <div className="form-group col-6 p-r-0">
                                            <input type="text" className="form-control" placeholder="Pincode" />
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="number" className="form-control"
                                                   placeholder="Enter mobile number" />
                                        </div>
                                        <div className="form-group col-6 p-r-0">
                                            <input type="text" className="form-control" placeholder="State" />
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="text" className="form-control" placeholder="City" />
                                        </div>
                                        <div className="form-group col-12">
                                            <textarea className="form-control" rows="3"
                                                      placeholder="Address"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="button" className="btn btn-info-gradien btn-block"
                                                    data-original-title="btn btn-info-gradien" title="">Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>EMI</h5>
                                </div>
                                <div className="card-body">
                                    <form className="theme-form row">
                                        <div className="form-group col-6 p-r-0">
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                        <div className="form-group col-6 p-r-0">
                                            <input type="text" className="form-control" placeholder="Pincode" />
                                        </div>
                                        <div className="form-group col-6">
                                            <select className="form-control" size="1">
                                                <option>Bank Name</option>
                                                <option>SBI</option>
                                                <option>ICICI</option>
                                                <option>KOTAK</option>
                                                <option>BOB</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-12">
                                            <select className="form-control" size="1">
                                                <option>Select Card</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-12">
                                            <select className="form-control" size="1">
                                                <option>Select Duration</option>
                                                <option>2015-2016</option>
                                                <option>2016-2017</option>
                                                <option>2017-2018</option>
                                                <option>2018-2019</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-12">
                                            <ul className="payment-opt">
                                                <li><img
                                                    src={require('../../../assets/images/ecommerce/payment-option/mastercard.png')}
                                                    alt=""/></li>
                                                <li><img src={require('../../../assets/images/ecommerce/payment-option/visa.png')}
                                                         alt=""/></li>
                                                <li><img src={require('../../../assets/images/ecommerce/payment-option/paypal.png')}
                                                         alt=""/></li>
                                            </ul>
                                        </div>
                                        <div className="col-12">
                                            <button type="button" className="btn btn-info-gradien btn-block"
                                                    data-original-title="btn btn-info-gradien" title="">Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Net Banking</h5>
                                </div>
                                <div className="card-body">
                                    <form className="theme-form row">
                                        <div className="form-group col-12">
                                            <input type="text" className="form-control"
                                                   placeholder="AC Holder name" />
                                        </div>
                                        <div className="form-group col-12">
                                            <input type="text" className="form-control"
                                                   placeholder="Account number" />
                                        </div>
                                        <div className="form-group col-6 p-r-0">
                                            <select className="form-control" size="1">
                                                <option>Select Bank</option>
                                                <option>SBI</option>
                                                <option>ICICI</option>
                                                <option>KOTAK</option>
                                                <option>BOB</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="text" className="form-control" placeholder="ICFC code" />
                                        </div>
                                        <div className="form-group col-12">
                                            <input type="number" className="form-control"
                                                   placeholder="Enter mobile number" />
                                        </div>
                                        <div className="form-group col-12">
                                            <input type="text" className="form-control" placeholder="Other Details" />
                                        </div>
                                        <div className="col-12">
                                            <button type="button" className="btn btn-info-gradien btn-block"
                                                    data-original-title="btn btn-info-gradien" title="">Submit
                                            </button>
                                        </div>
                                    </form>
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


export default PaymentDetails;
