import React, {Component} from 'react';
import { Button, Popover, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';
class PopoverItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        return (
            <span>
        <Button color={this.props.item.class}  id={'Popover-' + this.props.id} type="button">
          {this.props.item.text}
        </Button>
        <Popover className={this.props.item.offsetClass} placement={this.props.item.placement} isOpen={this.state.popoverOpen} target={'Popover-' + this.props.id} toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. </PopoverBody>
        </Popover>
      </span>
        );
    }
}


class PopOver extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
            popovers: [
                {
                    placement: 'top',
                    text: 'Popover Top',
                    class: 'primary'
                },
                {
                    placement: 'bottom',
                    text: 'Popover Bottom',
                    class: 'secondary'
                },
                {
                    placement: 'left',
                    text: 'Popover Left',
                    class: 'success'
                },
                {
                    placement: 'right',
                    text: 'Popover Right',
                    class: 'info'
                }
            ],
                popovers_offset : [
                {
                    id:11,
                    placement: 'top',
                    text: '20px 20px',
                    class: 'primary',
                    offsetClass: 'popover-offset'

                },
                {
                    id:12,
                    placement: 'bottom',
                    text: '0px',
                    class: 'secondary'
                }
            ]
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }


    render() {

        return (
            <div>
                <Breadcrumb title="Popover" parent="Base" />
                <div className="container-fluid">
                    <div className="row popover-main">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Examples</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button id="PopoverFocus" color="primary" type="button">
                                        On Focus Tooltip
                                    </Button>
                                    {' '}
                                    <Button id="PopoverClick" type="button">
                                        Click to toggle popover
                                    </Button>
                                    {' '}
                                    <Button id="PopoverLegacy" color="success" type="button">
                                        Dismissible popover
                                    </Button>
                                    <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                                        <PopoverHeader>Focus Trigger</PopoverHeader>
                                        <PopoverBody>Focusing on the <code>data-html='true'</code> trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try.</PopoverBody>
                                    </UncontrolledPopover>
                                    <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
                                        <PopoverHeader>Click Trigger</PopoverHeader>
                                        <PopoverBody>Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover.</PopoverBody>
                                    </UncontrolledPopover>
                                    <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                                        <PopoverHeader>Legacy Trigger</PopoverHeader>
                                        <PopoverBody>Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.</PopoverBody>
                                    </UncontrolledPopover>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Direction</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    {this.state.popovers.map((popover, i) => {
                                        return <PopoverItem  key={i} item={popover} id={i}/>;
                                    })}
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>OFFSET TO TOOLTIP</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    {this.state.popovers_offset.map((popover, i) => {
                                        return <PopoverItem key={i} item={popover} id={popover.id}/>;
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


export default PopOver;