import React, {Component} from 'react';
import {Nav, NavItem, NavLink, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

class Navs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);


        this.toggleBullets = this.toggleBullets.bind(this);
        this.onMouseenterBullets = this.onMouseenterBullets.bind(this);
        this.onMouseleaveBullets = this.onMouseleaveBullets.bind(this);


        this.state = {
            dropdownOpen: false,
            dropdownOpenbullets: false,
            toggleAdvance:true,
            toggleTables:false,
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }

    toggleBullets() {
        this.setState(prevState => ({
            dropdownOpenbullets: !prevState.dropdownOpenbullets
        }));
    }

    onMouseenterBullets() {
        this.setState({dropdownOpenbullets: true});
    }

    onMouseleaveBullets() {
        this.setState({dropdownOpenbullets: false});
    }

    render() {
        return (
            <div>
                <Breadcrumb title="navs" parent="Base" />
                {/*Container-fluid starts */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Default Nav</h5>
                                </div>
                                <div className="card-body">
                                    <div className="icon-lists border">
                                        <Nav vertical className="icon-lists navs-icon">
                                            <NavItem>
                                                <a href="#"><i className="icon-desktop"></i><span>Dashboard</span>
                                                </a>
                                            </NavItem>
                                            <NavItem>
                                                <a href="#"><i className="icon-blackboard"></i> <span> Widgets</span>
                                                </a>
                                            </NavItem>
                                            <NavItem>
                                                <a href="#"><i className="icon-package"></i> <span> Base</span>
                                                </a>
                                            </NavItem>
                                            <NavItem>
                                                <a href="#"><i className="icon-notepad"></i> <span> Forms</span>
                                                </a>
                                            </NavItem>
                                            <NavItem>
                                                <a href="#"><i className="icon-harddrives"></i> <span> Tables</span>
                                                </a>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <div className="onhover-dropdown navs-dropdown">
                                        <button className="btn btn-primary onhover-dropdown">Dropdown example <i
                                            className="icon-arrow-down"></i></button>
                                        <div className="onhover-show-div">
                                            <Nav vertical className="icon-lists navs-icon">
                                                <NavItem>
                                                    <a href="#"><i className="icon-desktop"></i><span>Dashboard</span>
                                                    </a>
                                                </NavItem>
                                                <NavItem>
                                                    <a href="#"><i className="icon-blackboard"></i> <span> Widgets</span>
                                                    </a>
                                                </NavItem>
                                                <NavItem>
                                                    <a href="#"><i className="icon-package"></i> <span> Base</span>
                                                    </a>
                                                </NavItem>
                                                <NavItem>
                                                    <a href="#"><i className="icon-notepad"></i> <span> Forms</span>
                                                    </a>
                                                </NavItem>
                                                <NavItem>
                                                    <a href="#"><i className="icon-harddrives"></i> <span> Tables</span>
                                                    </a>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Item Bullets</h5>
                                </div>
                                <div className="card-body">
                                    <div className=" border">

                                        <Nav vertical className="icon-lists  navs-icon">
                                            <NavItem>
                                                <a  href="#"><i className="fa fa-angle-right"></i><span >Dashboard</span>
                                                </a>
                                            </NavItem>
                                            <NavItem>
                                                <a  href="#"><i className="fa fa-angle-right"></i> <span  > Widgets</span>
                                                </a>
                                            </NavItem>
                                            <NavItem>
                                                <a  href="#"><i className="fa fa-angle-right"></i> <span > Base</span>
                                                </a>
                                            </NavItem>
                                            <NavItem>
                                                <a  href="#"><i className="fa fa-angle-right"></i> <span > Forms</span>
                                                </a>
                                            </NavItem>
                                            <NavItem>
                                                <a  href="#"><i className="fa fa-angle-right"></i> <span > Tables</span>
                                                </a>
                                            </NavItem>
                                        </Nav>



                                    </div>
                                    <div className="onhover-dropdown navs-dropdown">
                                        <button className="btn btn-secondary onhover-dropdown">Dropdown example <i
                                            className="icon-arrow-down"></i></button>
                                        <div className="onhover-show-div">
                                            <Nav vertical className="icon-lists  navs-icon">
                                                <NavItem>
                                                    <a  href="#"><i className="fa fa-angle-right"></i><span >Dashboard</span>
                                                    </a>
                                                </NavItem>
                                                <NavItem>
                                                    <a  href="#"><i className="fa fa-angle-right"></i> <span  > Widgets</span>
                                                    </a>
                                                </NavItem>
                                                <NavItem>
                                                    <a  href="#"><i className="fa fa-angle-right"></i> <span > Base</span>
                                                    </a>
                                                </NavItem>
                                                <NavItem>
                                                    <a  href="#"><i className="fa fa-angle-right"></i> <span > Forms</span>
                                                    </a>
                                                </NavItem>
                                                <NavItem>
                                                    <a  href="#"><i className="fa fa-angle-right"></i> <span > Tables</span>
                                                    </a>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Section and Separator</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="icon-lists border navs-icon">
                                        <li>
                                            <h5 className="mb-0">General</h5>
                                        </li>
                                        <li><a href="#"><i className="icon-desktop"></i><span> Dashboard</span></a></li>
                                        <li className="pb-0"><a href="#"><i className="icon-blackboard"></i><span> Widgets</span></a></li>
                                        <li className="main-section">
                                            <h5 className="mb-0">Layout</h5>
                                        </li>
                                        <li><a href="#"><i className="icon-direction-alt"></i><span> Sidebar</span></a></li>
                                        <li><a href="#"><i className="icon-layout"></i><span> Page Layout</span></a></li>
                                        <li className="pb-0"><a href="#"><i className="icon-cloud-down"></i><span> Footers</span></a></li>
                                        <li className="separator"></li>
                                        <li className="pt-0">
                                            <button className="btn btn-pill btn-outline-success">Log Out</button>
                                        </li>
                                    </ul>
                                    <div className="onhover-dropdown navs-dropdown">
                                        <button className="btn btn-success onhover-dropdown">Dropdown example <i
                                            className="icon-arrow-down"></i></button>
                                        <div className="onhover-show-div">
                                            <ul className="icon-lists navs-icon">
                                                <li>
                                                    <h5 className="mb-0">General</h5>
                                                </li>
                                                <li><a href="#"><i className="icon-desktop"></i><span> Dashboard</span></a>
                                                </li>
                                                <li><a href="#"><i className="icon-blackboard"></i><span> Widgets</span></a>
                                                </li>
                                                <li className="main-section">
                                                    <h5 className="mb-0">Layout</h5>
                                                </li>
                                                <li><a href="#"><i className="icon-direction-alt"></i><span> Sidebar</span></a>
                                                </li>
                                                <li><a href="#"><i className="icon-layout"></i><span> Page Layout</span></a></li>
                                                <li className="pb-0"><a href="#"><i className="icon-cloud-down"></i><span> Footers</span></a></li>
                                                <li className="separator"></li>
                                                <li className="pt-0">
                                                    <button className="btn btn-pill btn-outline-success">Log Out
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Active and Disabled Links</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="icon-lists border navs-icon">
                                        <li><a className="active" href="#"><i className="icon-desktop"></i><span> Dashboard</span></a></li>
                                        <li><a href="#"><i className="icon-blackboard"></i><span> Widgets</span></a></li>
                                        <li><a className="disabled" href="#"><i className="icon-package"></i><span> Base</span></a></li>
                                        <li><a href="#"><i className="icon-notepad"></i><span> Forms</span></a></li>
                                        <li><a href="#"><i className="icon-harddrives"></i><span> Tables</span></a></li>
                                        <li><a href="#"><i className="icon-credit-card"></i><span> Cards</span></a></li>
                                        <li><a className="disabled" href="#"><i className="icon-panel"></i><span> Timeline</span></a></li>
                                        <li><a href="#"><i className="icon-bar-chart"></i><span> Charts</span></a></li>
                                        <li><a href="#"><i className="icon-map-alt"></i><span> Maps</span></a></li>
                                        <li><a href="#"><i className="icon-ruler-pencil"></i><span> Editors</span></a>
                                        </li>
                                    </ul>
                                    <div className="onhover-dropdown navs-dropdown">
                                        <button className="btn btn-info onhover-dropdown">Dropdown example <i
                                            className="icon-arrow-down"></i></button>
                                        <div className="onhover-show-div">
                                            <ul className="icon-lists navs-icon">
                                                <li><a className="active" href="#"><i className="icon-desktop"></i><span> Dashboard</span></a></li>
                                                <li><a href="#"><i className="icon-blackboard"></i><span> Widgets</span></a>
                                                </li>
                                                <li><a className="disabled" href="#"><i className="icon-package"></i><span> Base</span></a></li>
                                                <li><a href="#"><i className="icon-notepad"></i><span> Forms</span></a>
                                                </li>
                                                <li><a href="#"><i className="icon-harddrives"></i><span> Tables</span></a>
                                                </li>
                                                <li><a href="#"><i className="icon-credit-card"></i><span> Cards</span></a></li>
                                                <li><a className="disabled" href="#"><i className="icon-panel"></i><span> Timeline</span></a></li>
                                                <li><a href="#"><i className="icon-bar-chart"></i><span> Charts</span></a>
                                                </li>
                                                <li><a href="#"><i className="icon-map-alt"></i><span> Maps</span></a></li>
                                                <li><a href="#"><i className="icon-ruler-pencil"></i><span> Editors</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-40 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Inline Nav</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="icon-lists border navs-icon inline-nav">
                                        <li><a href="#"><i className="icon-package"></i><span> Base</span></a></li>
                                        <li className="pl-navs-inline"><a href="#"><i className="fa fa-angle-right"></i><span> State Color</span></a>
                                        </li>
                                        <li className="pl-navs-inline"><a href="#"><i className="fa fa-angle-right"></i><span> Typography</span></a>
                                        </li>
                                        <li className="pl-navs-inline"><a href="#"><i className="fa fa-angle-right"></i><span> Grid</span></a>
                                        </li>
                                        <li className="pl-navs-inline"><a href="#"><i className="fa fa-angle-right"></i><span> Tags & Pills</span></a>
                                        </li>
                                        <li className="pl-navs-inline"><a href="#"><i className="fa fa-angle-right"></i><span> Progress</span></a>
                                        </li>
                                        <li className="pl-navs-inline"><a href="#"><i className="fa fa-angle-right"></i><span> Modal</span></a>
                                        </li>
                                        <li className="pl-navs-inline"><a href="#"><i className="fa fa-angle-right"></i><span> Alert</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 xl-60 col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Sub Nav</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div>
                                                <h5>Static Sub Nav</h5>
                                            </div>
                                            <ul className="icon-lists border navs-icon">
                                                <li><a href="#"><i className="icon-package"></i><span> Base</span></a></li>
                                                <li><a href="#"><i className="icon-support"></i><span> Advance</span></a>
                                                    <ul>
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>Scrollable</a></li>
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>Tree View</a></li>
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>Rating</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#"><i className="icon-notepad"></i><span> Forms</span></a>
                                                </li>
                                                <li><a href="#"><i className="icon-harddrives"></i><span> Tables</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 nav-md-mt">
                                            <div>
                                                <h5>Toggle Sub Nav</h5>
                                            </div>
                                            <ul className="icon-lists border navs-icon default-according style-1"
                                                id="accordionoc">
                                                <li><a href="#"><i className="icon-package"></i><span> Base</span></a></li>
                                                <li>
                                                    <button className="btn btn-link text-muted"
                                                            data-toggle="collapse" 
                                                            data-target="#collapseicon"
                                                            aria-expanded="true"
                                                            onClick={() => this.setState({toggleAdvance:!this.state.toggleAdvance})}
                                                            >
                                                            <i className="icon-support"></i>
                                                            <span> Advance</span>
                                                    </button>
                                                    <ul className={`collapse ${this.state.toggleAdvance?'show':''}`} id="collapseicon"
                                                        aria-labelledby="collapseicon" data-parent="#accordionoc">
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>Scrollable</a></li>
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>Tree View</a></li>
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>Rating</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#"><i className="icon-notepad"></i><span> Forms</span></a>
                                                </li>
                                                <li>
                                                    <button className="btn btn-link text-muted collapsed pb-0"
                                                            data-toggle="collapse" data-target="#collapseicon1"
                                                            onClick={() => this.setState({toggleTables:!this.state.toggleTables})}
                                                            aria-expanded="false"><i className="icon-harddrives"></i> Tables
                                                    </button>
                                                    <ul className={`collapse ${this.state.toggleTables?'show':''}`} id="collapseicon1"
                                                        data-parent="#accordionoc">
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>New</a></li>
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>Replied</a></li>
                                                        <li className="pl-navs-inline"><a href="#"><i
                                                            className="fa fa-angle-right"></i>Panding</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Container-fluid Ends*/}
            </div>
        );
    }
}


export default Navs;
