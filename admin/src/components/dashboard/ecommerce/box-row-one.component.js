import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import CountUp from 'react-countup';

class BoxRowOne extends Component {

    render(){
        return (
            <div>
            <div className="row">
                <div className="col-xl-3 col-sm-6 col-12 xl-50">
                    <div className="card">
                        <div className="ecommerce-widget card-body">
                            <div className="row">
                                <div className="col-8">
                                    <h4 className="total-num counter"><CountUp end={4599} /></h4>
                                    <span>Total Products</span>
                                </div>
                                <div className="col-4">
                                    <div className="icon text-md-right">
                                        <i className="icon-package"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flot-chart-container">
                                <Sparklines data={[25, 50, 30, 40, 60, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20]} margin={6}>
                                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
                                    <SparklinesSpots size={3} style={{ stroke: "#336aff", strokeWidth: 2, fill: "white" }} />
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12 xl-50">
                    <div className="card">
                        <div className="ecommerce-widget card-body">
                            <div className="row">
                                <div className="col-8">
                                    <h4 className="total-num"><span className="counter"><CountUp end={32} /></span>K</h4>
                                    <span>Sale Products</span>
                                </div>
                                <div className="col-4">
                                    <div className="icon text-md-right">
                                        <i className="icon-bar-chart"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flot-chart-container">
                                <Sparklines data={[21, 51, 31, 41, 61, 21, 21, 11, 41, 31,10, 11, 31, 41, 11, 11, 21]} margin={6}>
                                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#FF5370", fill: "none" }} />
                                    <SparklinesSpots size={3} style={{ stroke: "#FF5370", strokeWidth: 2, fill: "white" }} />
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12 xl-50">
                    <div className="card">
                        <div className="ecommerce-widget card-body">
                            <div className="row">
                                <div className="col-8">
                                    <h4 className="total-num"><span className="counter"><CountUp end={96} /></span>K</h4>
                                    <span>Total Visiters</span>
                                </div>
                                <div className="col-4">
                                    <div className="icon text-md-right">
                                        <i className="icon-user"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flot-chart-container">
                                <Sparklines data={[23, 21, 32, 25,52, 26,36, 51, 21, 51,60, 21, 51, 31, 61, 61, 81]} margin={6}>
                                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#ab8ce4", fill: "none" }} />
                                    <SparklinesSpots size={3} style={{ stroke: "#ab8ce4", strokeWidth: 2, fill: "white" }} />
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12 xl-50">
                    <div className="card">
                        <div className="ecommerce-widget card-body">
                            <div className="row">
                                <div className="col-8">
                                    <h4 className="total-num"><span className="counter"><CountUp end={85} /></span>K</h4>
                                    <span>Total Income</span>
                                </div>
                                <div className="col-4">
                                    <div className="icon text-md-right">
                                        <i className="icon-server"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flot-chart-container">
                                <Sparklines data={[53, 41, 23, 55,32, 46,56, 21, 51, 21,40, 21, 61, 41, 21,41, 81]} margin={6}>
                                    <SparklinesLine style={{ strokeWidth: 3, stroke: "#26c6da", fill: "none" }} />
                                    <SparklinesSpots size={3} style={{ stroke: "#26c6da", strokeWidth: 2, fill: "white" }} />
                                </Sparklines>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            </div>



        );
    }
}

export default BoxRowOne
