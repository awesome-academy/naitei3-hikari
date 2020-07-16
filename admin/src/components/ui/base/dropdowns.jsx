import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

class Dropdowns extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }


    render() {
        return (
            <div>
                <Breadcrumb title="Dropdown" parent="Base" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Dropdown</h5>
                                </div>
                                <div className="card-body dropdown-basic">
                                    <Dropdown className="btn-primary" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle className="dropbtn" color="primary" caret>
                                            Dropdown Button
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem>Action</DropdownItem>
                                            <DropdownItem disabled>Another Action (disabled)</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Something Else Here</DropdownItem>
                                            <DropdownItem>Bar Action</DropdownItem>
                                            <DropdownItem>Quo Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Color Dropdown</h5>
                                </div>
                                <div className="card-body dropdown-basic">
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-primary">Action <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-secondary">Action <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-success">Action <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-info">Action <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-warning txt-dark">Action <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-danger">Action <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Dropdown Split Button</h5>
                                </div>
                                <div className="card-body dropdown-basic">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-primary">Primary Button</button>
                                        <div className="dropdown separated-btn">
                                            <button type="button" className="btn btn-primary">
                                                <i className="icofont icofont-arrow-down"></i>
                                            </button>
                                            <div className="dropdown-content digits">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-secondary">Secondary Button</button>
                                        <div className="dropdown separated-btn">
                                            <button type="button" className="btn btn-secondary">
                                                <i className="icofont icofont-arrow-down"></i>
                                            </button>
                                            <div className="dropdown-content digits">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-success">Success Button</button>
                                        <div className="dropdown separated-btn">
                                            <button type="button" className="btn btn-success">
                                                <i className="icofont icofont-arrow-down"></i>
                                            </button>
                                            <div className="dropdown-content digits">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-info">Info Button</button>
                                        <div className="dropdown separated-btn">
                                            <button type="button" className="btn btn-info">
                                                <i className="icofont icofont-arrow-down"></i>
                                            </button>
                                            <div className="dropdown-content digits">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-warning">Warning Button</button>
                                        <div className="dropdown separated-btn">
                                            <button type="button" className="btn btn-warning">
                                                <i className="icofont icofont-arrow-down"></i>
                                            </button>
                                            <div className="dropdown-content digits">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-danger">Danger Button</button>
                                        <div className="dropdown separated-btn">
                                            <button type="button" className="btn btn-danger">
                                                <i className="icofont icofont-arrow-down"></i>
                                            </button>
                                            <div className="dropdown-content digits">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Rounded Dropdown</h5>
                                </div>
                                <div className="card-body dropdown-basic">
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-primary btn-round">Primary Button <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-secondary btn-round">Secondary Button <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-success btn-round">Success Button <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-info btn-round">Info Button <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-warning txt-dark btn-round">Warning Button <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <div className="btn-group mb-0">
                                            <button type="button" className="dropbtn btn-danger btn-round">Danger Button <span><i className="icofont icofont-arrow-down"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Action</a>
                                                <a href="#">Another Action</a>
                                                <a href="#">Something Else Here</a>
                                                <div className="dropdown-divider"></div>
                                                <a href="#">Separated Link </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Dropdown With Divider</h5>
                                    <span>Use a class <code>.dropdown-divider</code></span>
                                </div>
                                <div className="card-body dropdown-basic">
                                    <div className="dropdown">
                                        <button type="button" className="dropbtn btn-primary">Dropdown Button <span><i className="icofont icofont-arrow-down"></i></span></button>
                                        <div className="dropdown-content">
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <a href="#">Link 3</a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#">Another Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Dropdown With Header</h5>
                                    <span>Use a class <code>.dropdown-header</code></span>
                                </div>
                                <div className="card-body dropdown-basic">
                                    <div className="dropdown">
                                        <button type="button" className="dropbtn btn-primary">Dropdown Button <span><i className="icofont icofont-arrow-down"></i></span></button>
                                        <div className="dropdown-content">
                                            <h5 className="dropdown-header">Dropdown header</h5>
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                            <h5 className="dropdown-header">Dropdown header</h5>
                                            <a href="#">Another Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Dropdown With Disable</h5>
                                    <span>Use a class <code>.dropdown-disabled</code></span>
                                </div>
                                <div className="card-body dropup-basic">
                                    <div className="dropup">
                                        <button type="button" className="dropbtn btn-primary">Dropdown Button <span><i className="icofont icofont-arrow-up"></i></span></button>
                                        <div className="dropup-content">
                                            <a href="#">Normal</a>
                                            <a href="#" className="active">Active</a>
                                            <a href="#" className="disabled">Disabled</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Dropdown With DropUp</h5>
                                    <span>Use a class <code>.drop-up</code></span>
                                </div>
                                <div className="card-body dropup-basic">
                                    <div className="dropup">
                                        <button type="button" className="dropbtn btn-primary">Dropdown Button <span><i className="icofont icofont-arrow-up"></i></span></button>
                                        <div className="dropup-content">
                                            <a href="#">Link 1</a>
                                            <a href="#">Link 2</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Dropdowns;