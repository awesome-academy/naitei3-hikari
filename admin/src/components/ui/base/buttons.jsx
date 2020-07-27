import React, {Component} from 'react';
import { Button,ButtonGroup,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

class Buttons extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggledropdown = this.toggledropdown.bind(this);
        this.toggledropdown2 = this.toggledropdown2.bind(this);
        this.state = {
            dropdownOpen: false,
            dropdown: false,
            dropdown2: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggledropdown() {
        this.setState({
            dropdown: !this.state.dropdown
        });
    }
    toggledropdown2() {
        this.setState({
            dropdown2: !this.state.dropdown2
        });
    }
    render() {
        return (
            <div>
                <Breadcrumb title="Buttons" parent="Base" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Default buttons</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button className="btn-square" color="primary">Primary Button</Button>
                                    <Button className="btn-square" color="secondary">Secondary Button </Button>
                                    <Button className="btn-square" color="success">Success Button</Button>
                                    <Button className="btn-square" color="info">Info Button</Button>
                                    <Button className="btn-square" color="warning">Warning Button</Button>
                                    <Button className="btn-square" color="danger">Danger Button</Button>
                                    <Button className="btn-square txt-dark" color="light">Light Button</Button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Large buttons</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button  size="lg" color="primary" className="btn-square">Primary Button</Button>
                                    <Button  size="lg" color="secondary" className="btn-square">Secondary Button</Button>
                                    <Button  size="lg" color="success" className="btn-square">Success Button</Button>
                                    <Button  size="lg" color="info" className="btn-square">Info Button</Button>
                                    <Button  size="lg" color="warning" className="btn-square">Warning Button</Button>
                                    <Button  size="lg" color="danger" className="btn-square">Danger Button</Button>
                                    <Button  size="lg" color="light" className="btn-square txt-dark">Light Button</Button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Small buttons</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button  size="sm" color="primary" className="btn-square">Primary Button</Button>
                                    <Button  size="sm" color="secondary" className="btn-square">Secondary Button</Button>
                                    <Button  size="sm" color="success" className="btn-square">Success Button</Button>
                                    <Button  size="sm" color="info" className="btn-square">Info Button</Button>
                                    <Button  size="sm" color="warning" className="btn-square">Warning Button</Button>
                                    <Button  size="sm" color="danger" className="btn-square">Danger Button</Button>
                                    <Button  size="sm" color="light" className="btn-square txt-dark">Light Button</Button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Extra Small buttons</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button  size="xs" color="primary" className="btn-square">Primary Button</Button>
                                    <Button  size="xs" color="secondary" className="btn-square">Secondary Button</Button>
                                    <Button  size="xs" color="success" className="btn-square">Success Button</Button>
                                    <Button  size="xs" color="info" className="btn-square">Info Button</Button>
                                    <Button  size="xs" color="warning" className="btn-square">Warning Button</Button>
                                    <Button  size="xs" color="danger" className="btn-square">Danger Button</Button>
                                    <Button  size="xs" color="light" className="btn-square txt-dark">Light Button</Button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Active Buttons</h5>
                                    <span>Add <code>.active</code> for active state and <code>.disabled</code> class or <code>disabled="disabled"</code> attribute</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button color="primary" className="btn-square active">Active</Button>
                                    <Button color="secondary" className="btn-square active">Active</Button>
                                    <Button color="success" className="btn-square active">Active</Button>
                                    <Button color="info" className="btn-square active">Active</Button>
                                    <Button color="warning" className="btn-square active">Active</Button>
                                    <Button color="danger" className="btn-square active">Active</Button>
                                    <Button color="light" className="btn-square active txt-dark">Active</Button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Disabled buttons</h5>
                                    <span>Add <code>.active</code> for active state and <code>.disabled</code> class or <code>disabled="disabled"</code> attribute</span>
                                </div>

                                <div className="card-body btn-showcase">
                                    <Button color="primary" className="btn-square" disabled>Disabled</Button>
                                    <Button color="secondary" className="btn-square" disabled>Disabled</Button>
                                    <Button color="success" className="btn-square" disabled>Disabled</Button>
                                    <Button color="info" className="btn-square" disabled>Disabled</Button>
                                    <Button color="warning" className="btn-square" disabled>Disabled</Button>
                                    <Button color="danger" className="btn-square" disabled>Disabled</Button>
                                    <Button color="light" className="btn-square txt-dark" disabled>Disabled</Button>

                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Custom state buttons</h5>
                                    <span>The <code>.btn</code> class used with <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and <code>&lt;input&gt;</code> elements.</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <a className="btn btn-square btn-primary" href="#" data-toggle="tooltip" title="Hooray!" role="button">Link</a>
                                    <input className="btn btn-square btn-success" type="button" value="Input"/>
                                    <input className="btn btn-square btn-info" type="submit" value="Submit"/>
                                    <Button  color='danger' className="btn-square" type="submit">Button</Button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>outline buttons</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button color="primary" className="btn-square" outline>Primary Button</Button>
                                    <Button color="secondary" className="btn-square" outline>Secondary Button</Button>
                                    <Button color="success" className="btn-square" outline>Success Button</Button>
                                    <Button color="info" className="btn-square" outline>Info Button</Button>
                                    <Button color="warning" className="btn-square" outline>Warning Button</Button>
                                    <Button color="danger" className="btn-square" outline>Danger Button</Button>
                                    <Button color="light" className="btn-square txt-dark" outline>Light Button</Button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>bold Border outline buttons</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">

                                    <button type="button" className="btn btn-square btn-outline-primary-2x">Primary
                                        Button
                                    </button>
                                    <button type="button" className="btn btn-square btn-outline-secondary-2x">Secondary
                                        Button
                                    </button>
                                    <button type="button" className="btn btn-square btn-outline-success-2x">Success
                                        Button
                                    </button>
                                    <button type="button" className="btn btn-square btn-outline-info-2x">Info Button
                                    </button>
                                    <button type="button" className="btn btn-square btn-outline-warning-2x">Warning
                                        Button
                                    </button>
                                    <button type="button" className="btn btn-square btn-outline-danger-2x">Danger
                                        Button
                                    </button>
                                    <button type="button" className="btn btn-square btn-outline-light-2x txt-dark">Light
                                        Button
                                    </button>

                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Edge buttons</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button color="primary" className="btn-pill btn-primary">Primary Button</Button>
                                    <Button color="secondary" className="btn-pill btn-secondary">Secondary Button </Button>
                                    <Button color="success" className="btn-pill btn-success">Success Button</Button>
                                    <Button color="info" className="btn-pill btn-info">Info Button</Button>
                                    <Button color="warning" className="btn-pill btn-warning">Warning Button</Button>
                                    <Button color="danger" className="btn-pill btn-danger">Danger Button</Button>
                                    <Button color="light" className="btn-pill btn-light txt-dark">Light Button</Button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Raised buttons</h5>
                                    <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                                </div>
                                <div className="card-body btn-showcase">
                                    <Button color="primary" className="btn-pill btn-primary  btn-air-primary">Primary Button</Button>
                                    <Button color="secondary" className="btn-pill btn-secondary btn-air-secondary">Secondary Button </Button>
                                    <Button color="success" className="btn-pill btn-success btn-air-success">Success Button</Button>
                                    <Button color="info" className="btn-pill btn-info btn-air-info">Info Button</Button>
                                    <Button color="warning" className="btn-pill btn-warning btn-air-warning">Warning Button</Button>
                                    <Button color="danger" className="btn-pill btn-danger btn-air-danger">Danger Button</Button>
                                    <Button color="light" className="btn-pill btn-light btn-air-light txt-dark">Light Button</Button>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic button group</h5>
                                </div>
                                <div className="card-body btn-group-showcase">
                                    <div className="row">
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <ButtonGroup>
                                                <Button color='primary'>Left</Button>
                                                <Button color='primary'>Middle</Button>
                                                <Button color='primary'>Right</Button>
                                            </ButtonGroup>

                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <ButtonGroup>
                                                <Button color='secondary'>Left</Button>
                                                <Button color='secondary'>Middle</Button>
                                                <Button color='secondary'>Right</Button>
                                            </ButtonGroup>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <ButtonGroup>
                                                <Button color='success'>Left</Button>
                                                <Button color='success'>Middle</Button>
                                                <Button color='success'>Right</Button>
                                            </ButtonGroup>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <ButtonGroup className='btn-group-pill'>
                                                <Button color='info'>Left</Button>
                                                <Button color='info'>Middle</Button>
                                                <Button color='info'>Right</Button>
                                            </ButtonGroup>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <ButtonGroup className='btn-group-pill'>
                                                <Button color='warning'>Left</Button>
                                                <Button color='warning'>Middle</Button>
                                                <Button color='warning'>Right</Button>
                                            </ButtonGroup>
                                        </div>

                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <ButtonGroup className='btn-group-pill'>
                                                <Button color='danger'>Left</Button>
                                                <Button color='danger'>Middle</Button>
                                                <Button color='danger'>Right</Button>
                                            </ButtonGroup>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <ButtonGroup className='btn-group-square'>
                                                <Button color='light'>Left</Button>
                                                <Button color='light'>Middle</Button>
                                                <Button color='light'>Right</Button>
                                            </ButtonGroup>
                                        </div>
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <ButtonGroup className='btn-group-square'>
                                                <Button color='dark'>Left</Button>
                                                <Button color='dark'>Middle</Button>
                                                <Button color='dark'>Right</Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Nesting</h5>
                                    <span>Make nesting buttons</span>
                                </div>
                                <div className="card-body btn-group-wrapper">
                                    <div className="m-b-30">
                                        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                            <Button color='primary'><i className="fa fa-bold"></i></Button>
                                            <Button color='secondary'><i className="fa fa fa-italic"></i></Button>
                                            <ButtonDropdown   isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle caret color='light '>
                                                    Button Dropdown
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem header>Header</DropdownItem>
                                                    <DropdownItem disabled>Action</DropdownItem>
                                                    <DropdownItem>Another Action</DropdownItem>
                                                    <DropdownItem divider />
                                                    <DropdownItem>Another Action</DropdownItem>
                                                </DropdownMenu>
                                            </ButtonDropdown>
                                        </div>
                                    </div>
                                    <div className="m-b-30">
                                        <div className="btn-group">
                                            <Button color='primary'><i className="fa fa-bold"></i></Button>
                                            <Button color='secondary'><i className="fa fa fa-italic"></i></Button>
                                            <Button color='success'><i className="fa fa-file-image-o"></i></Button>
                                            <Button color='info'><i className="fa fa-paperclip"></i></Button>
                                        </div>
                                    </div>
                                    <div className="m-b-30">
                                        <div className="btn-group">
                                            <Button size='lg' color='primary'><i className="fa fa-bold"></i></Button>
                                            <Button size='lg' color='secondary'><i className="fa fa fa-italic"></i></Button>
                                            <Button size='lg' color='success'><i className="fa fa-file-image-o"></i></Button>
                                            <Button size='lg' color='info'><i className="fa fa-paperclip"></i></Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Vertical</h5>
                                    <span>Make vertical buttons</span>
                                </div>
                                <div className="card-body btn-group-wrapper">
                                    <ButtonGroup vertical >
                                        <Button color='primary' type="button">Button</Button>
                                        <Button color='secondary' type="button">Button</Button>
                                        <ButtonDropdown color='info' isOpen={this.state.dropdown} toggle={this.toggledropdown}>
                                            <DropdownToggle color='info' caret>
                                                Button Dropdown
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                        <Button color='success' type="button">Button</Button>
                                        <Button color='warning' type="button">Button</Button>
                                        <ButtonDropdown color='danger' isOpen={this.state.dropdown2} toggle={this.toggledropdown2}>
                                            <DropdownToggle color='danger' caret>
                                                Button Dropdown
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Another Action</DropdownItem>
                                                <DropdownItem>Another Action</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Buttons;
