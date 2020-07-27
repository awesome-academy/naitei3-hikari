import React, {Component} from 'react';
import {Alert, Button, Tooltip, UncontrolledAlert} from 'reactstrap';
import { Spinner } from 'reactstrap';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';



class Spinnersclass extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="col-md-3">
                <h6 className="sub-title mb-0">{this.props.item.name}</h6>
                <div className="loader-box">
                    <div className="loader-box">
                        <div className={this.props.item.class}></div>
                    </div>
                </div>
            </div>
        );
    }
}


class Spinnersdiv extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="col-md-3">
                <h6 className="sub-title mb-0">{this.props.item.name}</h6>
                <div className="loader-box">
                    <div className="loader-box">
                        <div className="loader">
                            <div className={this.props.item.class}></div>
                            <div className={this.props.item.class}></div>
                            <div className={this.props.item.class}></div>
                            <div className={this.props.item.class}></div>
                            <div className={this.props.item.class}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Spinners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: [
                {
                    type: 'line',
                    name: 'Default Loader',
                    class: 'line bg-primary',
                    color: 'primary'
                },
                {
                    name:"Dotted style",
                    type: 'dotted',
                    class: 'rotate dotted',
                    color: 'primary'
                },
                {
                    name:"Dashed style",
                    type: 'dashed',
                    class: 'rotate dashed',
                    color: 'primary'
                },
                {
                    name:"Double style",
                    type: 'double',
                    class: 'rotate double',
                    color: 'primary'
                },
                {
                    name:"Groove style",
                    type: 'groove',
                    class: 'rotate groove',
                    color: 'primary'
                },
                {
                    name:"Ridge  style",
                    type: 'ridge',
                    class: 'rotate ridge',
                    color: 'primary'
                },
                {
                    name:"Inset style",
                    type: 'inset',
                    class: 'rotate inset',
                    color: 'primary'
                },
                {
                    name:"Outset style",
                    type: 'outset',
                    class: 'rotate outset',
                    color: 'primary'
                },

            ],

            loader_color: [
                {
                    type: 'line',
                    name: 'Default',
                    class: 'line',
                },
                {
                    type: 'line',
                    name: 'Primary',
                    class: 'line bg-primary',
                },
                {
                    type: 'line',
                    name: 'Secondary',
                    class: 'line bg-secondary',
                },
                {
                    type: 'line',
                    name: 'Success',
                    class: 'line bg-success',
                },
                {
                    type: 'line',
                    name: 'Info',
                    class: 'line bg-info',
                },
                {
                    type: 'line',
                    name: 'Warning',
                    class: 'line bg-warning',
                },
                {
                    type: 'line',
                    name: 'Danger',
                    class: 'line bg-danger',
                },
                {
                    type: 'line',
                    name: 'Dark',
                    class: 'line bg-dark',
                }
            ],
            loader_multi_color: [
                {
                    type: 'solid',
                    name: 'Solid style',
                    class: 'rotate solid colored',
                },
                {
                    type: 'dotted',
                    name: 'Dotted style',
                    class: 'rotate dotted colored',
                },
                {
                    type: 'dashed',
                    name: 'Dashed style',
                    class: 'rotate dashed colored',
                },
                {
                    type: 'double',
                    name: 'Double style',
                    class: 'rotate double colored',
                },
                {
                    type: 'groove',
                    name: 'Groove style',
                    class: 'rotate groove colored',
                },
                {
                    type: 'ridge',
                    name: 'Ridge style',
                    class: 'rotate ridge colored',
                },
                {
                    type: 'inset',
                    name: 'Inset  style',
                    class: 'rotate inset colored',
                },
                {
                    type: 'Outset',
                    name: 'Outset style',
                    class: 'rotate outset colored',
                }
            ]
        };
    }

    render() {
        return (
            <div>
                <Breadcrumb title="spinners" parent="Base" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Loader Style</h5>
                                </div>
                                <div className="card-body row">
                                    {this.state.loader.map((loader, index) => {
                                        if (loader.type == 'line')
                                            return <Spinnersdiv key={index} item={loader}/>
                                        else
                                            return <Spinnersclass key={index} item={loader}/>
                                    })}
                                </div>
                            </div>


                            <div className="card">
                                <div className="card-header">
                                    <h5>Loader Color</h5>
                                </div>
                                <div className="card-body row">
                                    {this.state.loader_color.map((loader, index) => {
                                        if (loader.type == 'line')
                                            return <Spinnersdiv key={index} item={loader}/>
                                        else
                                            return <Spinnersclass key={index} item={loader}/>
                                    })}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Loader Multi Color</h5>
                                </div>
                                <div className="card-body row">
                                    {this.state.loader_multi_color.map((loader, index) => {
                                       return <Spinnersclass key={index} item={loader}/>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Spinners;