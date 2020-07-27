import React, {Component} from 'react';
import {
    Line,
    Doughnut,
    Bar,
    Scatter,
    Pie,
    Radar
} from 'react-chartjs-2';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';
import {
    doughnutChart,
    lineChart,
    AreaChart,
    barChartData,
    ScatterChartData,
    PieChartData,
    RadarChartData
} from '../../../constants/chartData';



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: [
        'Purple',
        'Blue',
        'Green'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        borderColor: ["#854fe6", "#2ea0ad", "#00c292" ],
        backgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
        hoverBackgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
    }]
});

class ReactChartJS extends Component {

    constructor(props) {
        super(props);

        this.state = {
            labels: [
                'purple',
                'Blue',
                'green'
            ],
            datasets: [{
                data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
                borderColor: ["#854fe6", "#2ea0ad", "#00c292" ],
                backgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
                hoverBackgroundColor: ["rgb(198, 180, 234, 0.5)", "rgb(100, 221, 234, 0.5)", "rgb(105, 224, 194, 0.5)" ],
            }]
        };
    }


    componentDidMount() {
        setInterval(() => {
            this.setState(getState());
        }, 5000);
    }

    render() {
        return (
            <div>
                <Breadcrumb title="React-ChartJs" parent="Charts" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card" >
                                <div className="card-header">
                                    <h5>Line Chart</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <Line data={lineChart} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card" >
                                <div className="card-header">
                                    <h5>Area Chart</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <Line data={AreaChart} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card" >
                                <div className="card-header">
                                    <h5>Doughnut Chart</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <Doughnut data={doughnutChart} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card" >
                                <div className="card-header">
                                    <h5>Dynamicly refreshed Doughnut</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <Doughnut data={this.state} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card" >
                                <div className="card-header">
                                    <h5>Bar Chart</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <Bar data={barChartData} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card" >
                                <div className="card-header">
                                    <h5>Scatter Chart</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <Scatter data={ScatterChartData} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card" >
                                <div className="card-header">
                                    <h5>Pie Chart</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <Pie data={PieChartData} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card" >
                                <div className="card-header">
                                    <h5>Scatter Chart</h5>
                                </div>
                                <div className="card-body chart-block">
                                    <Radar data={RadarChartData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ReactChartJS;