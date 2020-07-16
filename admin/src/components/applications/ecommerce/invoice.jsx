import React, {Component} from 'react';
import { Table, Button } from 'reactstrap';
import Breadcrumb from '../../common/breadcrumb.component'
import ReactToPrint from 'react-to-print';
import "../../../assets/scss/print.scss";


class Invoice extends Component {

    render () {
        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Invoice" parent="E-commerce" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body" ref={el => (this.componentRef = el)}>
                                    <div className="invoice">
                                        <div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <img src={require('../../../assets/images/logo-login.png')}
                                                                     className="media-object img-60" alt="" />
                                                            </div>
                                                            <div className="media-body m-l-20">
                                                                <h4 className="media-heading">Universal</h4>
                                                                <p> hello@universal.in<br />
                                                                    <span className="digits">289-335-6503</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="text-md-right">
                                                            <h3>Invoice #<span className="digits counter">1069</span>
                                                            </h3>
                                                            <p>Issued: May<span className="digits"> 27, 2015</span><br />
                                                                Payment Due: June <span
                                                                className="digits">27, 2015</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <img src={require('../../../assets/images/user/1.jpg')}
                                                                 className="media-object rounded-circle img-60" alt="" />
                                                        </div>
                                                        <div className="media-body m-l-20">
                                                            <h4 className="media-heading">Johan Deo</h4>
                                                            <p>JohanDeo@gmail.com<br />
                                                                <span className="digits">555-555-5555</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div id="project" className="text-md-right">
                                                        <h6>Project Description</h6>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and
                                                            typesetting industry.It is a long established fact that a
                                                            reader will be distracted by the readable content of a page
                                                            when looking at its layout.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div id="table" className="table-responsive invoice-table">
                                                    <table className="table table-bordered table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td className="item"><h6 className="p-2 mb-0">Item
                                                                Description</h6></td>
                                                            <td className="Hours"><h6 className="p-2 mb-0">Hours</h6>
                                                            </td>
                                                            <td className="Rate"><h6 className="p-2 mb-0">Rate</h6></td>
                                                            <td className="subtotal"><h6
                                                                className="p-2 mb-0">Sub-total</h6></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label>Lorem Ipsum</label>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of
                                                                    the printing and typesetting industry.</p>
                                                            </td>
                                                            <td><p className="itemtext digits">5</p></td>
                                                            <td><p className="itemtext digits">$75</p></td>
                                                            <td><p className="itemtext digits">$375.00</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label>Lorem Ipsum</label>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of
                                                                    the printing and typesetting industry.</p>
                                                            </td>
                                                            <td><p className="itemtext digits">3</p></td>
                                                            <td><p className="itemtext digits">$75</p></td>
                                                            <td><p className="itemtext digits">$225.00</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label>Lorem Ipsum</label>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of
                                                                    the printing and typesetting industry.</p>
                                                            </td>
                                                            <td><p className="itemtext digits">10</p></td>
                                                            <td><p className="itemtext digits">$75</p></td>
                                                            <td><p className="itemtext digits">$750.00</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label>Lorem Ipsum</label>
                                                                <p className="m-0">Lorem Ipsum is simply dummy text of
                                                                    the printing and typesetting industry.</p>
                                                            </td>
                                                            <td><p className="itemtext digits">10</p></td>
                                                            <td><p className="itemtext digits">$75</p></td>
                                                            <td><p className="itemtext digits">$750.00</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td><p className="itemtext"></p></td>
                                                            <td><p className="m-0">HST</p></td>
                                                            <td><p className="m-0 digits">13%</p></td>
                                                            <td><p className="m-0 digits">$419.25</p></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td className="Rate"><h6 className="mb-0 p-2">Total</h6>
                                                            </td>
                                                            <td className="payment digits"><h6
                                                                className="mb-0 p-2">$3,644.25</h6></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div>
                                                            <p className="legal"><strong>Thank you for your
                                                                business!</strong> Payment is expected within 31 days;
                                                                please process this invoice within that time. There will
                                                                be a 5% interest charge per month on late invoices.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <form className="text-right">
                                                            <input type="image" src={require('../../../assets/images/paypal.png')}
                                                                   name="submit"
                                                                   alt="PayPal - The safer, easier way to pay online!" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 text-center mt-3">
                                            <ReactToPrint
                                              trigger={() => <button type="button"
                                                        className="btn btn btn-primary mr-2">Print
                                                        </button>}
                                              content={() => this.componentRef}
                                            />
                                            <button type="button" className="btn btn-secondary">Cancel</button>
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


export default Invoice;
