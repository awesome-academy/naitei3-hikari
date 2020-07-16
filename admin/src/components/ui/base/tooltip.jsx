import React, {Component} from 'react';
import { Button, Tooltip } from 'reactstrap';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';
class TooltipItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <span>
                <Button className="mr-1" color={this.props.item.color} id={'Tooltip-' + this.props.id}>
                  {this.props.item.text}
                </Button>
                <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
                  Tooltip <b>with</b> <code>HTML</code>
                </Tooltip>
            </span>
        );
    }
}

class ToolTip extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false,
            tooltips: [
                {
                    placement: 'top',
                    text: 'Tooltip on top',
                    color: 'primary'
                },
                {
                    placement: 'bottom',
                    text: 'Tooltip on bottom',
                    color: 'secondary'
                },
                {
                    placement: 'left',
                    text: 'Tooltip on left',
                    color: 'info'
                },
                {
                    placement: 'right',
                    text: 'Tooltip on right',
                    color: 'success'
                }
            ],

            tooltips_Offset: [
                {
                    id:11,
                    placement: 'top',
                    text: '20px 20px',
                    color: 'primary'
                },
                {
                    id:12,
                    placement: 'bottom',
                    text: '0px 20px',
                    color: 'secondary'
                },
                {
                    id:13,
                    placement: 'left',
                    text: '20px 0px',
                    color: 'info'
                },
                {
                    id:14,
                    placement: 'right',
                    text: '-30px -30px',
                    color: 'success'
                }
            ]
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <div>
                <Breadcrumb title="Tooltip" parent="Base" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Tooltip</h5>
                                </div>
                                <div className="card-body btn-showcase">
                                    <span className="example-popover btn btn-primary" href="#" id="TooltipExample">Hover Me</span>
                                    <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                                        Tooltip Title!
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>ToolTip Directions with Html Content</h5>
                                </div>
                                <div className="card-body btn-showcase">
                                    { this.state.tooltips.map((tooltip, i) => {
                                        return <TooltipItem key={i} item={tooltip} id={i} />;
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Offset</h5>
                                </div>
                                <div className="card-body btn-showcase">
                                    {this.state.tooltips_Offset.map((tooltip, i) => {
                                        return <TooltipItem key={i} item={tooltip} id={tooltip.id}/>;
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


export default ToolTip;