import React, {Component} from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Breadcrumb from '../../common/breadcrumb.component';

class Tabbootstrap extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            active_tab: '1',
            active_tab_bottom_left: '1',
            active_tab_icon: '1',
            active_tab_right_align: '1',
            active_tab_vertical: '1',
            active_tab_pill: '1',
            active_tab_pill_icon: '1',
            active_tab_dark_color: '1',
            active_tab_primary: '1',
            active_tab_secondary: '1',
            text_one:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. . It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            text_two:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            text_three:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        };
    }

    toggle(tab) {
        if (this.state.active_tab !== tab) {
            this.setState({
                active_tab: tab
            });
        }

    }

    toggle_bottom_left(tab) {
        if (this.state.active_tab_bottom_left !== tab) {
            this.setState({
                active_tab_bottom_left: tab
            });
        }
    }
    toggle_icon(tab) {
        if (this.state.active_tab_icon !== tab) {
            this.setState({
                active_tab_icon: tab
            });
        }
    }
    toggle_right_align(tab) {
        if (this.state.active_tab_right_align !== tab) {
            this.setState({
                active_tab_right_align: tab
            });
        }
    }
    toggle_vertical(tab) {
        if (this.state.active_tab_vertical !== tab) {
            this.setState({
                active_tab_vertical: tab
            });
        }
    }
    toggle_pill(tab) {
        if (this.state.active_tab_pill !== tab) {
            this.setState({
                active_tab_pill: tab
            });
        }
    }
    toggle_pill_icon(tab) {
        if (this.state.active_tab_pill_icon !== tab) {
            this.setState({
                active_tab_pill_icon: tab
            });
        }
    }
    toggle_dark_color(tab) {
        if (this.state.active_tab_dark_color !== tab) {
            this.setState({
                active_tab_dark_color: tab
            });
        }
    }
    toggle_primary (tab) {
        if (this.state.active_tab_primary  !== tab) {
            this.setState({
                active_tab_primary: tab
            });
        }
    }
    toggle_secondary (tab) {
        if (this.state.active_tab_secondary  !== tab) {
            this.setState({
                active_tab_secondary: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Breadcrumb title="bootstrap tabs" parent="Base" />
                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Basic Tabs</h5>
                                </div>
                                <div className="card-body">

                                    <Nav tabs className={'tabs-color'}>
                                        <NavItem >
                                            <NavLink
                                                className={classnames({ active: this.state.active_tab === '1' })}
                                                onClick={() => { this.toggle('1'); }} >
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab === '2' })}
                                                     onClick={() => { this.toggle('2'); }} >
                                                profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab === '3' })}
                                                     onClick={() => { this.toggle('3'); }}>
                                                Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.active_tab}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>TABS BOTTOM LEFT ALIGN</h5>
                                </div>
                                <div className="card-body">

                                    <TabContent activeTab={this.state.active_tab_bottom_left}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="m-b-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="m-b-30">
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="m-b-30">
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                    <Nav tabs className={'tabs-color'}>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.active_tab_bottom_left === '1' })}
                                                onClick={() => { this.toggle_bottom_left('1'); }} >
                                                <i className="icofont icofont-ui-home"> </i>Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_bottom_left === '2' })}
                                                     onClick={() => { this.toggle_bottom_left('2'); }} >
                                                <i className="icofont icofont-man-in-glasses"></i>Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_bottom_left === '3' })}
                                                     onClick={() => { this.toggle_bottom_left('3'); }}>
                                                <i className="icofont icofont-ui-home"></i> Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>TABS WITH ICON</h5>
                                </div>
                                <div className="card-body ">

                                    <Nav tabs className={'tabs-color'}>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.active_tab_icon === '1' })}
                                                onClick={() => { this.toggle_icon('1'); }} >
                                                <i className="icofont icofont-ui-home"> </i>Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_icon === '2' })}
                                                     onClick={() => { this.toggle_icon('2'); }} >
                                                <i className="icofont icofont-man-in-glasses"></i>profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_icon === '3' })}
                                                     onClick={() => { this.toggle_icon('3'); }}>
                                                <i className="icofont icofont-ui-home"></i>Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.active_tab_icon}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Tabs Right Align</h5>
                                </div>
                                <div className="card-body">
                                    <Nav tabs className={'nav-right tabs-color'} >
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.active_tab_right_align === '1' })}
                                                onClick={() => { this.toggle_right_align('1'); }} >
                                                <i className="icofont icofont-ui-home"> </i>Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_right_align === '2' })}
                                                     onClick={() => { this.toggle_right_align('2'); }} >
                                                <i className="icofont icofont-man-in-glasses"></i>profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_right_align === '3' })}
                                                     onClick={() => { this.toggle_right_align('3'); }}>
                                                <i className="icofont icofont-ui-home"></i>Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.active_tab_right_align}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Tabs Vertical</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3 col-xs-12">
                                            <Nav  className={'nav flex-column nav-pills'}>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.active_tab_vertical === '1' })}
                                                        onClick={() => { this.toggle_vertical('1'); }} >
                                                        Home
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.active_tab_vertical === '2' })}
                                                             onClick={() => { this.toggle_vertical('2'); }} >
                                                        Profile
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.active_tab_vertical === '3' })}
                                                             onClick={() => { this.toggle_vertical('3'); }}>
                                                        Messages
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.active_tab_vertical === '4' })}
                                                             onClick={() => { this.toggle_vertical('4'); }}>
                                                        Settings
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                        <div className="col-sm-9 col-xs-12">
                                            <TabContent activeTab={this.state.active_tab_vertical}>
                                                <TabPane tabId="1">
                                                    <Row>
                                                        <Col sm="12">
                                                            <p>
                                                                {this.state.text_one}
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <Row>
                                                        <Col sm="12">
                                                            <p>
                                                                {this.state.text_two}
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </TabPane>
                                                <TabPane tabId="3">
                                                    <Row>
                                                        <Col sm="12">
                                                            <p>
                                                                {this.state.text_three}
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </TabPane>
                                                <TabPane tabId="4">
                                                    <Row>
                                                        <Col sm="12">
                                                            <p>
                                                                {this.state.text}
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </TabPane>
                                            </TabContent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Pill Tabs</h5>
                                </div>
                                <div className="card-body">
                                    <Nav className={'nav-pills'}>
                                        <NavItem>
                                            <NavLink className={classnames({active: this.state.active_tab_pill === '1'})}
                                                onClick={() => {
                                                    this.toggle_pill('1');
                                                }}>
                                                Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({active: this.state.active_tab_pill === '2'})}
                                                     onClick={() => {
                                                         this.toggle_pill('2');
                                                     }}>
                                                Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({active: this.state.active_tab_pill === '3'})}
                                                     onClick={() => {
                                                         this.toggle_pill('3');
                                                     }}>
                                                Messages
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({active: this.state.active_tab_pill === '4'})}
                                                     onClick={() => {
                                                         this.toggle_pill('4');
                                                     }}>
                                                Settings
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.active_tab_pill}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Pill Tabs With Icon</h5>
                                </div>
                                <div className="card-body">

                                    <Nav tabs className={'nav-pills'}>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.active_tab_pill_icon === '1' })}
                                                onClick={() => { this.toggle_pill_icon('1'); }} >
                                                <i className="icofont icofont-ui-home"> </i>Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_pill_icon === '2' })}
                                                     onClick={() => { this.toggle_pill_icon('2'); }} >
                                                <i className="icofont icofont-man-in-glasses"></i>profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_pill_icon === '3' })}
                                                     onClick={() => { this.toggle_pill_icon('3'); }}>
                                                <i className="icofont icofont-contacts"></i>Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.active_tab_pill_icon}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_two}
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_three}
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <Row>
                                                <Col sm="12">
                                                    <p>
                                                        {this.state.text_one}
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>

                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card height-equal">
                                <div className="card-header">
                                    <h5>Pill Dark color</h5>
                                    <span>Add <code>.nav-*</code> class with nav class</span>
                                    <span>remove  <code>nav-pill</code> class from pill style Tab</span>
                                </div>
                                <div className="card-body">
                                    <Nav  className={'nav-dark'}>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.active_tab_dark_color === '1' })}
                                                onClick={() => { this.toggle_dark_color('1'); }} >
                                                <i className="icofont icofont-ui-home"> </i>Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_dark_color === '2' })}
                                                     onClick={() => { this.toggle_dark_color('2'); }} >
                                                <i className="icofont icofont-man-in-glasses"></i> Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_dark_color === '3' })}
                                                     onClick={() => { this.toggle_dark_color('3'); }}>
                                                <i className="icofont icofont-contacts"></i> Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.active_tab_dark_color}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                     </TabContent>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Primary Color</h5>
                                    <span>Add <code>.nav-primary</code> class with nav class</span>
                                </div>
                                <div className="card-body">
                                    <Nav className={'nav-primary'}>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: this.state.active_tab_primary === '1' })}
                                                onClick={() => { this.toggle_primary('1'); }} >
                                                <i className="icofont icofont-ui-home"> </i>Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_primary === '2' })}
                                                     onClick={() => { this.toggle_primary('2'); }} >
                                                <i className="icofont icofont-man-in-glasses"></i> Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: this.state.active_tab_primary === '3' })}
                                                     onClick={() => { this.toggle_primary('3'); }}>
                                                <i className="icofont icofont-contacts"></i> Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.active_tab_primary}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xl-6 xl-100">
                            <div className="card">
                                <div className="card-header">
                                    <h5>secondary color</h5>
                                    <span>Add <code>.nav-secondary </code> class with nav class</span>
                                </div>
                                <div className="card-body">
                                    <Nav className={'nav-secondary '}>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({active: this.state.active_tab_secondary  === '1'})}
                                                onClick={() => {
                                                    this.toggle_secondary('1');
                                                }}>
                                                <i className="icofont icofont-ui-home"> </i>Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({active: this.state.active_tab_secondary === '2'})}
                                                     onClick={() => {
                                                         this.toggle_secondary('2');
                                                     }}>
                                                <i className="icofont icofont-man-in-glasses"></i> Profile
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({active: this.state.active_tab_secondary === '3'})}
                                                     onClick={() => {
                                                         this.toggle_secondary('3');
                                                     }}>
                                                <i className="icofont icofont-contacts"></i> Contact
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={this.state.active_tab_secondary}>
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_one}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_two}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <p className="mb-0 m-t-30">
                                                        {this.state.text_three}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                 {/*Container-fluid Ends */}
            </div>
        )
    }
}


export default Tabbootstrap;
