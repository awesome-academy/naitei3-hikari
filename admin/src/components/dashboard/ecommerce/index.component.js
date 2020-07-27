import React, { Component } from 'react';
import Breadcrumb from '../../common/breadcrumb.component'
import BoxRowOne from './box-row-one.component';
import CountUp from 'react-countup';
import ChartistGraph from 'react-chartist';
import DonutChart from 'react-donut-chart';
import { Table } from 'reactstrap';

class Ecommecrce extends Component {
    render(){

        const datalist = [
            {
                label: "Series 1",
                data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
            },
            {
                label: "Series 2",
                data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
            },
            {
                label: "Series 3",
                data: [{ x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }]
            }
        ];

        var data = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
                [10, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
        };

        var options = {
            fullWidth: true,
            height:'480px',
            low: 0,
            axisX: {
                offset: 20,
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : null;
                }
            },
            axisY: {
                onlyInteger: true,
                offset: 20
            }
        }
        var type = 'Line'

        var pregrees = {width:'70%'}

        return (
            <div>
                <Breadcrumb title="E-commerce " parent="Dashboard" />
            <div className="container-fluid">
                <BoxRowOne/>
            </div>
                {/*Yearly Income chart Start*/}
              <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-8 col-md-12 xl-60">
                        <div className="card">
                            <div className="card-header">
                                <h5>Yearly Report</h5>
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                            </div>
                            <div className="card-body">
                                <div className="yearly-chart">
                                    <div className="ct-6 flot-chart-container">
                                        <ChartistGraph Line data={data} options={options} type={'Line'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-4 col-md-12 xl-40">
                        <div className="card">
                            <div className="card-header">
                                <h5>Over All</h5>
                            </div>
                            <div className="card-body">
                                <div className="crm-numbers">
                                    <div className="row">
                                        <div className="col">
                                            <span>Yearly</span>
                                            <h4 className="txt-info"><span className="counter"><CountUp end={25.6}/></span>%</h4>
                                        </div>
                                        <div className="col">
                                            <span>Monthly</span>
                                            <h4 className="txt-danger"><span className="counter"><CountUp end={36.4}/></span>%</h4>
                                        </div>
                                        <div className="col">
                                            <span>weekly</span>
                                            <h4 className="txt-info"><span className="counter"><CountUp end={22.8}/></span>%</h4>
                                        </div>
                                        <div className="col">
                                            <span>Daily</span>
                                            <h4 className="txt-danger"><span className="counter"><CountUp end={24.9}/></span>%</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="crm-overall">

                                    <div className="flot-chart-container-small donut-chart">
                                        <DonutChart className="flot-chart-placeholder"
                                                    height = {483}
                                                    data={[{
                                                        value: 30,
                                                        label: "USA"
                                                    },
                                                        {
                                                            value: 50,
                                                            label: "India"
                                                        },
                                                        {
                                                            value: 10,
                                                            label: "Canada"
                                                        },
                                                        {
                                                            value: 10,
                                                            label: "UK"
                                                        }]}
                                                    colors={["#26C6DA", "#AB8DE4" ,"#FF5370" ,"#4099FF" ]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card browser-widget p-0">
                            <div className="card-body">
                                <div className="media">
                                    <i className="icofont icofont-presentation-alt font-info align-self-center f-70"></i>
                                    <i className="align-self-center mr-3"></i>
                                    <div className="media-body align-self-center">
                                        <div>
                                            <span>Product</span>
                                            <h4><span className="counter"><CountUp end={90}/></span>%</h4>
                                        </div>
                                        <div className="inline-block-sm">
                                            <span>Projects</span>
                                            <h4><span className="counter"><CountUp end={80}/></span>%</h4>
                                        </div>
                                        <div>
                                            <span>Income</span>
                                            <h4><span className="counter"><CountUp end={85}/></span>%</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Yearly Income chart Ends*/}

                    {/*E-commerce widget Start*/}
                    <div className="col-xl-4 col-lg-12">
                        <div className="card">
                            <div className="ecommerce-widget card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <span>New Order</span>
                                        <h3 className="total-num counter"><CountUp end={25639}/></h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-md-right">
                                            <ul>
                                                <li>Profit<span className="product-stts txt-success ml-2">8989<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                <li>Loss<span className="product-stts txt-danger ml-2">2560<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-showcase">
                                    <div className="progress lg-progress-bar">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width:'70%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="card">
                            <div className="ecommerce-widget card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <span>Pending</span>
                                        <h3 className="total-num counter"><CountUp end={89432}/></h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-md-right">
                                            <ul>
                                                <li>Profit<span className="product-stts txt-success ml-2">8989<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                <li>Loss<span className="product-stts txt-danger ml-2">2560<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-showcase">
                                    <div className="progress lg-progress-bar">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width:'60%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12">
                        <div className="card">
                            <div className="ecommerce-widget card-body">
                                <div className="row">
                                    <div className="col-6">
                                        <span>Cancle</span>
                                        <h3 className="total-num counter"><CountUp end={25600}/></h3>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-md-right">
                                            <ul>
                                                <li>Profit<span className="product-stts txt-success ml-2">8989<i className="icon-angle-up f-12 ml-1"></i></span></li>
                                                <li>Loss<span className="product-stts txt-danger ml-2">2560<i className="icon-angle-down f-12 ml-1"></i></span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress-showcase">
                                    <div className="progress lg-progress-bar">
                                        <div className="progress-bar bg-secondary" role="progressbar" style={{width:'80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*E-commerce widget Ends*/}

                {/*Customer Product & Review Table Start*/}

                <div className="row">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>Latest Products</h5>
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive text-center user-status">
                                    <Table className="table table-bordernone">
                                        <thead>
                                        <tr>
                                            <th scope="col">Images</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th className="bd-t-none" scope="row"><img src={require('../../../assets/images/product/1.png')} alt="product-1"/></th>
                                            <td>New USA Home Appliances
                                                Whaer
                                            </td>
                                            <td className="digits">01</td>
                                            <td>Mark Jecno</td>
                                            <td>Padding</td>
                                        </tr>
                                        <tr>
                                            <th className="bd-t-none" scope="row"><img src={require('../../../assets/images/product/2.png')} alt="product-1"/></th>
                                            <td>New Smart Samsung Touch
                                                Mobile
                                            </td>
                                            <td className="digits">01</td>
                                            <td>Dolbi Volo</td>
                                            <td>Return</td>
                                        </tr>
                                        <tr>
                                            <th className="bd-t-none" scope="row"><img src={require('../../../assets/images/product/3.png')} alt="product-1"/></th>
                                            <td>Men Fashion 30% Fashion
                                                Men-TSHIRT
                                            </td>
                                            <td className="digits">06</td>
                                            <td>Donalt Hili</td>
                                            <td>Delievered</td>
                                        </tr>
                                        <tr>
                                            <th className="bd-t-none pb-0" scope="row"><img src={require('../../../assets/images/product/4.png')} alt="product-1"/></th>
                                            <td>Sport Wear Rebiz Sport
                                                Shoes  for men
                                            </td>
                                            <td className="digits">03</td>
                                            <td>Animkl solo</td>
                                            <td>cancle</td>
                                        </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Customer Product & Review Table Ends*/}

                <div className="row">
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="product-box">
                                <div className="product-img">
                                    <img src={require('../../../assets/images/ecommerce/product/01.jpg')} className="img-fluid" alt=""/>
                                    <div className="product-hover">
                                        <ul>
                                            <li><i className="icon-shopping-cart"></i></li>
                                            <li><i className="icon-eye"></i></li>
                                            <li><i className="icofont icofont-law-alt-2"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h6>Woman</h6>
                                    <span>Simply dummy text of the printing.</span>
                                    <div className="product-price">
                                        <del>$350.00    </del>$26.00
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
                                    <img src={require('../../../assets/images/ecommerce/product/02.jpg')} className="img-fluid" alt=""/>
                                    <div className="product-hover">
                                        <ul>
                                            <li><i className="icon-shopping-cart"></i></li>
                                            <li><i className="icon-eye"></i></li>
                                            <li><i className="icofont icofont-law-alt-2"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h6>Woman</h6>
                                    <span>Simply dummy text of the printing.</span>
                                    <div className="product-price">
                                        <del>$350.00    </del>$26.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="card">
                            <div className="product-box">
                                <div className="product-img">
                                    <img src={require('../../../assets/images/ecommerce/product/03.jpg')} className="img-fluid" alt=""/>
                                    <div className="product-hover">
                                        <ul>
                                            <li><i className="icon-shopping-cart"></i></li>
                                            <li><i className="icon-eye"></i></li>
                                            <li><i className="icofont icofont-law-alt-2"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h6>Woman</h6>
                                    <span>Simply dummy text of the printing.</span>
                                    <div className="product-price">
                                        <del>$350.00    </del>$26.00
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
                                    <img src={require('../../../assets/images/ecommerce/product/04.jpg')} className="img-fluid" alt=""/>
                                    <div className="product-hover">
                                        <ul>
                                            <li><i className="icon-shopping-cart"></i></li>
                                            <li><i className="icon-eye"></i></li>
                                            <li><i className="icofont icofont-law-alt-2"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h6>Woman</h6>
                                    <span>Simply dummy text of the printing.</span>
                                    <div className="product-price">
                                        <del>$350.00    </del>$26.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>User Status</h5>
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                            </div>
                            <div className="card-body">
                                <div className="user-status table-responsive">
                                    <table className="table table-bordernone">
                                        <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Popular</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/4.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>John Deo <span className="text-muted digits">(14+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>USA</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={pregrees} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/1.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>Holio Mako <span className="text-muted digits">(250+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Angola</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={pregrees} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/5.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>Mohsib lara<span className="text-muted digits">(99+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Cuba</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-info" role="progressbar" style={pregrees} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/6.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>Hileri Soli <span className="text-muted digits">(150+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Italy</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-secondary" role="progressbar" style={pregrees} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="bd-t-none">
                                                <div className="d-inline-block align-middle">
                                                    <img src={require('../../../assets/images/user/7.jpg')} alt="blog" className="img-radius img-40 align-top m-r-15 rounded-circle"/>
                                                    <div className="d-inline-block">
                                                        <h6>Pusiz bianb <span className="text-muted digits">(14+ Online)</span></h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Kenya</td>
                                            <td>
                                                <div className="progress-showcase">
                                                    <div className="progress sm-progress-bar">
                                                        <div className="progress-bar bg-info" role="progressbar" style={pregrees} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="action">
                                                    <ul className="list-inline text-muted">
                                                        <li className="list-inline-item"><i className="icon-close"></i></li>
                                                        <li className="list-inline-item"><i className="icon-na"></i></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Blog And User Status Start*/}

                <div className="row">
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <div className="card height-equal">
                            <div className="card-header">
                                <h5>Customer Review</h5>
                                <span>Contrary to popular belief, Lorem Ipsum is not simply random text.</span>
                            </div>
                            <div className="card-body">
                                <div className="customer-review">
                                    <div className="media">
                                        <img className="align-self-start rounded-circle img-90"  alt="Universal-review" src={require('../../../assets/images/user/12.png')}/>
                                        <div className="media-body">
                                            <label className="cust-name">Mark Jenco</label><label className="cust-des">Designer</label>
                                            <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin </p>
                                        </div>
                                    </div>
                                    <div className="media mb-0">
                                        <img className="align-self-start rounded-circle img-90"  alt="Universal-review" src={require('../../../assets/images/user/13.png')}/>
                                        <div className="media-body">
                                            <label className="cust-name">Heloi Jobuc</label><label className="cust-des">Student</label>
                                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Lorem Ipsum as their default model</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card height-equal equal-height-lg">
                                    <div className="blog-box blog-grid text-center">
                                        <img src={require('../../../assets/images/blog/blog-5.png')} className="img-fluid top-radius-blog" alt=""/>
                                        <div className="blog-details-main">
                                            <ul className="blog-social">
                                                <li className="digits">9 April</li>
                                                <li className="digits">by: Admin</li>
                                                <li className="digits">0 Hits</li>
                                            </ul>
                                            <hr/>
                                            <h6 className="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card height-equal equal-height-lg">
                                    <div className="blog-box blog-grid text-center">
                                        <img src={require('../../../assets/images/blog/blog-6.png')} className="img-fluid top-radius-blog" alt=""/>
                                        <div className="blog-details-main">
                                            <ul className="blog-social">
                                                <li className="digits">9 April</li>
                                                <li className="digits">by: Admin</li>
                                                <li className="digits">0 Hits</li>
                                            </ul>
                                            <hr/>
                                            <h6 className="blog-bottom-details">Perspiciatis unde omnis iste natus error sit.Dummy text</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Blog And User Status Ends*/}


            </div>
        </div>
        )
    }
}

export default Ecommecrce;