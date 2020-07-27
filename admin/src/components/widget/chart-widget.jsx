import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';


// import Custom Componenets
import Breadcrumb from '../common/breadcrumb.component';
import "react-datepicker/dist/react-datepicker.css";

class ChartWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    componentDidMount() {
        setInterval(
            () => this.setState({ startDate: new Date() }),
            1000
        );
    }
    render() {

        const month =["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

        var d = new Date();
        let dateshow =  month[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();

        const settings = {
            className: "center",
            centerMode: true,
            speed: 500,
            centerPadding: "5px",
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const background = require('../../assets/images/calender-bg.png');
        const background_clock = require('../../assets/images/mobile-clock-wallpaper.jpg');
        const background_weather = require('../../assets/images/whether-widgetbg.jpg');

        return (
            <div>
                <Breadcrumb title="General Widget" parent="Home"/>
                {/* Container-fluid starts */}
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-xl-4 col-md-12">
                            <div className="card">

                                <div className="chart-widget-top bg-primary">
                                    <div className="row card-body">
                                        <div className="col-5">
                                            <h5>SALE</h5>
                                            <span className="num"><span className="counter">90</span>%<i
                                                className="icon-angle-up f-12 ml-1"></i></span>
                                        </div>
                                        <div className="col-7 text-right">
                                            <h4 className="num total-value">$ <span className="counter">3654</span>.00
                                            </h4>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dashboard-chart-container ">
                                        <Sparklines data={[25, 50, 30, 40, 60, 80, 50, 10, 50, 13, 0, 10, 30, 40, 10, 15, 20]} className="flot-chart-placeholder">
                                            <SparklinesLine color="#8B72BD" />
                                        </Sparklines>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12">
                            <div className="card">
                                <div className="chart-widget-top bg-secondary">
                                    <div className="row card-body">
                                        <div className="col-7">
                                            <h5>PROJECTS</h5>
                                            <span className="num"><span className="counter">30</span>%<i
                                                className="icon-angle-up f-12 ml-1"></i></span>
                                        </div>
                                        <div className="col-5 text-right">
                                            <h4 className="num total-value counter">12569</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <Sparklines data={[25, 35, 70, 100, 90, 50, 60, 80, 40, 50, 60, 40, 80, 70, 60, 50, 100]} className="flot-chart-placeholder">
                                            <SparklinesLine color="#0993a5" />
                                        </Sparklines>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-12">
                            <div className="card">
                                <div className="chart-widget-top bg-success">
                                    <div className="row card-body">
                                        <div className="col-7">
                                            <h5>PRODUCTS</h5>
                                            <span className="num"><span className="counter">68</span>%<i
                                                className="icon-angle-up f-12 ml-1"></i></span>
                                        </div>
                                        <div className="col-5 text-right">
                                            <h4 className="num total-value"><span className="counter">963</span>M</h4>
                                        </div>
                                    </div>
                                    <div>
                                        <Sparklines data={[25, 50, 30, 40, 60, 80, 50, 10, 50, 13, 0, 10, 30, 40, 10, 15, 20]} className="flot-chart-placeholder">
                                            <SparklinesLine color="#1c954d" />
                                        </Sparklines>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="card o-hidden">
                                <div className="bar-chart-widget">
                                    <div className="top-content bg-primary">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="bar-chart card-body pb-0">
                                                    <Sparklines data={[100.00,100.00,90.00,80.00,95.00,75,100.00,90.00,110.00,80.00,90.00,105,95,85]}>
                                                        <SparklinesBars color="#8B72BD" />
                                                    </Sparklines>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="earning-details">
                                                    <div className="text-left">
                                                        <span>Marketing Expenses</span>
                                                        <h4 className="mt-1 num mb-0">$ <span
                                                            className="counter">3654</span></h4>
                                                    </div>
                                                    <i className="icon-announcement"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-content card-body">
                                        <div className="row">
                                            <div className="col-4 b-r-light">
                                                <div>
                                                    <span className="num font-primary">12%<i
                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                    <span className="text-muted mt-2 mb-2 block-bottom">Marketing</span>
                                                    <h4 className="num m-0">$<span
                                                        className="counter color-bottom">9313</span></h4>
                                                </div>
                                            </div>
                                            <div className="col-4 b-r-light">
                                                <div>
                                                    <span className="num font-secondary">15%<i
                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                    <span className="text-muted mt-2 mb-2 block-bottom">Affiliate</span>
                                                    <h4 className="num m-0">$<span
                                                        className="counter color-bottom">2314</span></h4>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div>
                                                    <span className="num font-success">34%<i
                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                    <span
                                                        className="text-muted  mt-2 mb-2 block-bottom">Advertise</span>
                                                    <h4 className="num m-0">$<span
                                                        className="counter color-bottom"> 4219</span></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-12">
                            <div className="card o-hidden">
                                <div className="bar-chart-widget">
                                    <div className="top-content bg-secondary">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="bar-chart card-body pb-0">
                                                    <Sparklines data={[100.00,100.00,90.00,80.00,95.00,75,100.00,90.00,110.00,80.00,90.00,105,95,85]}>
                                                        <SparklinesBars barColor="#8B72BD" />
                                                    </Sparklines>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="earning-details">
                                                    <div className="text-left">
                                                        <span>Total Earning</span>
                                                        <h4 className="mt-1 num mb-0"><span
                                                            className="counter">3653</span> M</h4>
                                                    </div>
                                                    <i className="icofont icofont-coins"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-content card-body">
                                        <div className="row">
                                            <div className="col-4 b-r-light">
                                                <div>
                                                    <span className="num font-primary">12%<i
                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                    <span className="text-muted mt-2 mb-2 block-bottom">Year</span>
                                                    <h4 className="num m-0"><span
                                                        className="counter color-bottom">3659</span>M</h4>
                                                </div>
                                            </div>
                                            <div className="col-4 b-r-light">
                                                <div>
                                                    <span className="num font-secondary">15%<i
                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                    <span className="text-muted mt-2 mb-2 block-bottom">Month</span>
                                                    <h4 className="num m-0"><span
                                                        className="counter color-bottom">698</span>M</h4>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div>
                                                    <span className="num font-success">34%<i
                                                        className="icon-angle-up f-12 ml-1"></i></span>
                                                    <span className="text-muted mt-2 mb-2 block-bottom">Today</span>
                                                    <h4 className="num m-0"><span
                                                        className="counter color-bottom">9361</span>M</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*small widgets Start*/}
                    <div className="row">

                        <div className="xl-50 col-md-6">
                            <div className="small-chart-widget chart-widgets-small">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Live Products</h5>
                                        <div className="card-header-right">
                                            <ul className="list-unstyled card-option">
                                                <li><i className="icofont icofont-simple-left "></i></li>
                                                <li><i className="view-html fa fa-code"></i></li>
                                                <li><i className="icofont icofont-maximize full-card"></i></li>
                                                <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                <li><i className="icofont icofont-error close-card"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body bg-info">
                                        <div className="chart-container">
                                            <div className="live-products"></div>
                                        </div>
                                        <div className="code-box-copy">
                                            <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head" title="Copy"><i
                                                className="icofont icofont-copy-alt"></i></button>
                                            <pre><code className="language-html" id="example-head">&lt;!-- Cod Box Copy begin --&gt;
                                                &lt;div class=&quot;card-body bg-info&quot;&gt;
                                                &lt;div class=&quot;chart-container&quot;&gt;
                                                &lt;div class=&quot;live-products&quot;&gt;&lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;!-- Cod Box Copy end --&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xl-50 col-md-6">
                            <div className="small-chart-widget chart-widgets-small">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Turnover</h5>
                                        <div className="card-header-right">
                                            <ul className="list-unstyled card-option">
                                                <li><i className="icofont icofont-simple-left "></i></li>
                                                <li><i className="view-html fa fa-code"></i></li>
                                                <li><i className="icofont icofont-maximize full-card"></i></li>
                                                <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                <li><i className="icofont icofont-error close-card"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body bg-success">
                                        <div className="chart-container">
                                            <div className="turnover"></div>
                                        </div>
                                        <div className="code-box-copy">
                                            <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head1" title="Copy"><i
                                                className="icofont icofont-copy-alt"></i></button>
                                            <pre><code className="language-html" id="example-head1">&lt;!-- Cod Box Copy begin --&gt;
                                                &lt;div class=&quot;card-body bg-success&quot;&gt;
                                                &lt;div class=&quot;chart-container&quot;&gt;
                                                &lt;div class=&quot;turnover&quot;&gt;&lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;!-- Cod Box Copy end --&gt;</code></pre>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="xl-50 col-md-6">
                            <div className="small-chart-widget chart-widgets-small">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Monthly Sales</h5>
                                        <div className="card-header-right">
                                            <ul className="list-unstyled card-option">
                                                <li><i className="icofont icofont-simple-left "></i></li>
                                                <li><i className="view-html fa fa-code"></i></li>
                                                <li><i className="icofont icofont-maximize full-card"></i></li>
                                                <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                <li><i className="icofont icofont-error close-card"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body bg-danger">
                                        <div className="chart-container">
                                            <div className="monthly"></div>
                                        </div>
                                        <div className="code-box-copy">
                                            <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head2" title="Copy"><i
                                                className="icofont icofont-copy-alt"></i></button>
                                            <pre><code className="language-html" id="example-head2">&lt;!-- Cod Box Copy begin --&gt;
                                                &lt;div class=&quot;card-body bg-danger&quot;&gt;
                                                &lt;div class=&quot;chart-container&quot;&gt;
                                                &lt;div class=&quot;monthly&quot;&gt;&lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;!-- Cod Box Copy end --&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xl-50 col-md-6">
                            <div className="small-chart-widget chart-widgets-small">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Uses</h5>
                                        <div className="card-header-right">
                                            <ul className="list-unstyled card-option">
                                                <li><i className="icofont icofont-simple-left "></i></li>
                                                <li><i className="view-html fa fa-code"></i></li>
                                                <li><i className="icofont icofont-maximize full-card"></i></li>
                                                <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                <li><i className="icofont icofont-error close-card"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body bg-primary">
                                        <div className="chart-container">
                                            <div className="uses"></div>
                                        </div>
                                        <div className="code-box-copy">
                                            <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head3" title="Copy"><i
                                                className="icofont icofont-copy-alt"></i></button>
                                            <pre><code className="language-html" id="example-head3">&lt;!-- Cod Box Copy begin --&gt;
                                                &lt;div class=&quot;card-body bg-primary&quot;&gt;
                                                &lt;div class=&quot;chart-container&quot;&gt;
                                                &lt;div class=&quot;uses&quot;&gt;&lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;!-- Cod Box Copy end --&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/*small widgets Ends*/}

                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="status-widget">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-9">
                                                <h5>Finance Status</h5>
                                            </div>
                                            <div className="col-3 text-sm-right">
                                                <i className="icofont icofont-growth f-20 text-muted"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="status-details">
                                            <div className="row">
                                                <div className="col-4 text-center">
                                                    <span>Investor</span>
                                                    <h4 className="counter mb-0">3659</h4>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <span>Money</span>
                                                    <h4 className="mb-0">$<span className="counter">362</span></h4>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <span>Earning</span>
                                                    <h4 className="mb-0"><span className="counter">86</span>%</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="status-chart bg-primary">
                                        <div className="chart-container">
                                            <div id="finance-graph" className="flot-chart-placeholder"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="status-widget">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-9">
                                                <h5>Order Status</h5>
                                            </div>
                                            <div className="col-3 text-sm-right">
                                                <i className="icofont icofont-bag f-20 text-muted"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="status-details">
                                            <div className="row">
                                                <div className="col-4 text-center">
                                                    <span>Complete</span>
                                                    <h4 className="mb-0"><span className="counter">62</span>%</h4>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <span>Pending</span>
                                                    <h4 className="mb-0"><span className="counter">36</span>%</h4>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <span>Cancle</span>
                                                    <h4 className="mb-0"><span className="counter">20</span>%</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="status-chart bg-secondary">
                                        <div className="chart-container">
                                            <div id="order-graph" className="flot-chart-placeholder"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-12">
                            <div className="status-widget">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-9">
                                                <h5>Skill Status</h5>
                                            </div>
                                            <div className="col-3 text-sm-right">
                                                <i className="icofont icofont-architecture-alt f-20 text-muted"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="status-details">
                                            <div className="row">
                                                <div className="col-4 text-center">
                                                    <span>Design</span>
                                                    <h4 className="mb-0"><span className="counter">25</span>%</h4>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <span>Market</span>
                                                    <h4 className="mb-0"><span className="counter">40</span>%</h4>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <span>Converse</span>
                                                    <h4 className="mb-0"><span className="counter">35</span>%</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="status-chart bg-success">
                                        <div className="chart-container">
                                            <div id="skill-graph" className="flot-chart-placeholder"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="donut-chart-widget">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Browser Uses</h5>
                                        <div className="card-header-right">
                                            <ul className="list-unstyled card-option">
                                                <li><i className="icofont icofont-simple-left "></i></li>
                                                <li><i className="view-html fa fa-code"></i></li>
                                                <li><i className="icofont icofont-maximize full-card"></i></li>
                                                <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                <li><i className="icofont icofont-error close-card"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-container">
                                            <div id="browser-uses-chart" className="flot-chart-placeholder"></div>
                                        </div>
                                        <div className="code-box-copy">
                                            <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head4" title="Copy"><i
                                                className="icofont icofont-copy-alt"></i></button>
                                            <pre><code className="language-html" id="example-head4">&lt;!-- Cod Box Copy begin --&gt;
                                                &lt;div class=&quot;chart-container&quot;&gt;
                                                &lt;div id=&quot;browser-uses-chart&quot; class=&quot;flot-chart-placeholder&quot;&gt;&lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;!-- Cod Box Copy end --&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="donut-chart-widget">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>Website Visiter</h5>
                                        <div className="card-header-right">
                                            <ul className="list-unstyled card-option">
                                                <li><i className="icofont icofont-simple-left "></i></li>
                                                <li><i className="view-html fa fa-code"></i></li>
                                                <li><i className="icofont icofont-maximize full-card"></i></li>
                                                <li><i className="icofont icofont-minus minimize-card"></i></li>
                                                <li><i className="icofont icofont-refresh reload-card"></i></li>
                                                <li><i className="icofont icofont-error close-card"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="chart-container">
                                            <div id="website-visiter-chart" className="flot-chart-placeholder"></div>
                                        </div>
                                        <div className="code-box-copy">
                                            <button className="code-box-copy__btn btn-clipboard"
                                                    data-clipboard-target="#example-head5" title="Copy"><i
                                                className="icofont icofont-copy-alt"></i></button>
                                            <pre><code className="language-html" id="example-head5">&lt;!-- Cod Box Copy begin --&gt;
                                                &lt;div class=&quot;chart-container&quot;&gt;
                                                &lt;div id=&quot;website-visiter-chart&quot; class=&quot;flot-chart-placeholder&quot;&gt;&lt;/div&gt;
                                                &lt;/div&gt;
                                                &lt;!-- Cod Box Copy end --&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Container-fluid Ends */}
            </div>
        )
    }
}


export default ChartWidget;