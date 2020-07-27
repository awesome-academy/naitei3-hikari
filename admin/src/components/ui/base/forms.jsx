import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ButtonGroup,CustomInput, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup,AvSelect, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';

// import Custom Componenets
import Breadcrumb from '../../common/breadcrumb.component';

class Forms extends Component {
    render() {
        return (
            <div>
                <Breadcrumb title="forms" parent="Base" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-xl-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Default Form Layout</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                                        </div>
                                        <div className="card-body">
                                            <Form>
                                                <FormGroup>
                                                    <Label className="col-form-label pt-0" htmlFor="exampleInputEmail1">Email
                                                        address</Label>
                                                    <Input className="form-control" id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                                        <small className="form-text text-muted" id="emailHelp">We'll
                                                            never share your email with anyone else.
                                                        </small>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="exampleInputPassword1">Password</Label>
                                                    <Input className="form-control" id="exampleInputPassword1" type="password" placeholder="Password"/>
                                                </FormGroup>
                                                <FormGroup check className="checkbox">
                                                    <Input id="dafault-checkbox" type="checkbox"/>
                                                    <Label className="mb-0" htmlFor="dafault-checkbox">Remember my preference</Label>
                                                </FormGroup>
                                            </Form>
                                        </div>
                                        <div className="card-footer">
                                            <Button color="primary">Submit</Button>{' '}
                                            <Button color="secondary">Cancel</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Horizontal Form Layout</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
                                        </div>
                                        <div className="card-body">
                                            <Form className="theme-form">
                                                <FormGroup className="row">
                                                    <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Email</Label>
                                                    <Col sm='9'>
                                                        <input className="form-control" id="inputEmail3" type="email" placeholder="Email"/>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup className="row">
                                                    <Label className="col-sm-3 col-form-label" htmlFor="inputPassword3">Password</Label>
                                                    <Col sm='9'>
                                                        <input className="form-control" id="inputPassword3" type="password" placeholder="Password"/>
                                                    </Col>
                                                </FormGroup>


                                                <FormGroup className="row">
                                                    <Label className="col-sm-3 col-form-label" htmlFor="inputnumber">Contact
                                                        Number</Label>
                                                    <Col sm='9'>
                                                        <Input className="form-control" id="inputnumber" type="number" placeholder="Contact"/>
                                                    </Col>
                                                </FormGroup>


                                                <FormGroup className="row">
                                                    <Label className="col-sm-3 col-form-label" htmlFor="inputPassword3">Company
                                                        name</Label>
                                                    <Col sm="9">
                                                        <Input className="form-control" id="url" type="text" placeholder="Company name"/>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup className="row">
                                                    <Label className="col-sm-3 col-form-label" htmlFor="Website">Website</Label>
                                                    <Col sm="9">
                                                        <input className="form-control" id="Website" type="url" placeholder="Website"/>
                                                    </Col>
                                                </FormGroup>

                                                <FormGroup tag="fieldset">
                                                    <Row>
                                                        <Label className="col-form-label col-sm-3 pt-0">Radios</Label>
                                                        <Col sm='9'>
                                                            <Col className="radio radio-primary">
                                                                <Input id="radio11" type="radio" name="radio1" value="option1"/>
                                                                <Label htmlFor="radio11">Option 1</Label>
                                                            </Col>
                                                            <Col className="radio radio-secondary">
                                                                <Input id="radio22" type="radio" name="radio1" value="option2"/>
                                                                <Label htmlFor="radio22">Option 2</Label>
                                                            </Col>
                                                            <Col className="radio radio-info">
                                                                <Input id="radio33" type="radio" name="radio1" value="option3"  />
                                                                <Label htmlFor="radio33">Option 3</Label>
                                                            </Col>
                                                            <Col className="radio radio-warning">
                                                                <Input id="radio44" type="radio" name="radio1" value="option4" />
                                                                <Label htmlFor="radio44">Option 4</Label>
                                                            </Col>
                                                            <Col className="radio radio-danger">
                                                                <Input id="radio55" type="radio" name="radio1" value="option5" disabled />
                                                                <Label htmlFor="radio55">Disabled</Label>
                                                            </Col>
                                                        </Col>
                                                    </Row>
                                                </FormGroup>

                                                <Row className="form-group mb-0">
                                                    <Label className="col-sm-3 col-form-label pb-0">Checkboxes</Label>
                                                    <Col sm='9'>
                                                        <div className="form-group m-checkbox-inline mb-0 sm-mb-checkbox">
                                                            <div className="checkbox checkbox-primary">
                                                                <Input name='checkbox' id="inline-form-1" type="checkbox"/>
                                                                <Label className="mb-0" htmlFor="inline-form-1">Option 1</Label>
                                                            </div>
                                                            <div className="checkbox checkbox-secondary">
                                                                <Input name='checkbox' id="inline-form-2" type="checkbox"/>
                                                                <Label className="mb-0" htmlFor="inline-form-2">Option 2</Label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                        <div className="card-footer">
                                            <Button color='primary'>Submit</Button>{' '}
                                            <Button color='secondary'>Cancel</Button>{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Mega form</h5>
                                        </div>
                                        <div className="card-body">
                                            <Form className="theme-form mega-form">
                                                <h6>Account Information</h6>
                                                <FormGroup>
                                                    <Label  className="col-form-label">Your Name</Label>
                                                    <Input  className="form-control" type="text" placeholder="your Name"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="col-form-label">Email Address</Label>
                                                    <Input className="form-control" type="email" placeholder="Enter email"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="col-form-label">Contact Number</Label>
                                                    <Input className="form-control" type="Number" placeholder="Enter contact number"/>
                                                </FormGroup>
                                                <hr className="mt-4 mb-4"/>
                                                    <h6>Company Information</h6>
                                                    <FormGroup>
                                                        <label className="col-form-label">Company Name</label>
                                                        <input className="form-control" type="text" placeholder="Company Name"/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <label className="col-form-label">Website</label>
                                                        <input className="form-control" type="text" placeholder="Website"/>
                                                    </FormGroup>
                                            </Form>
                                            <hr className="mt-4 mb-4"/>
                                                <h6 className="pb-4">Billing Information</h6>
                                                <Form className="form-inline theme-form mb-theme-form">
                                                    <FormGroup>
                                                        <Input className="form-control" type="text" placeholder="Name On Card"/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input className="form-control" type="text" name="inputPassword" placeholder="Card Number"/>
                                                    </FormGroup>
                                                    <FormGroup>
                                                        <Input className="form-control" type="text" name="inputPassword" placeholder="Zip Code"/>
                                                    </FormGroup>
                                                </Form>
                                        </div>
                                        <div className="card-footer">
                                            <Button color='primary' >Submit</Button>{' '}
                                            <Button color='secondary' >Cancel</Button>{' '}
                                        </div>
                                    </div>
                                </div>
                                <Col xl='12'>
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Inline Form</h5><span>Use<code>.form-inline</code>class in the form to style with inline fields.</span>
                                        </div>
                                        <div className="card-body">
                                            <h6>Inline Form with Label</h6>
                                            <Form className="form-inline theme-form mt-3 xs-mb-forms">
                                                <FormGroup>
                                                    <Label className="col-form-label" htmlFor="inputInlineUsername">Username</Label>
                                                    <Input className="form-control" id="inputInlineUsername" type="text" name="inputUsername" placeholder="Username" autoComplete="off"/>
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label className="col-form-label" htmlFor="inputInlinePassword">Password</Label>
                                                    <Input className="form-control" id="inputInlinePassword" type="password" name="inputPassword" placeholder="Password" autoComplete="off"/>
                                                </FormGroup>
                                               <FormGroup>
                                                    <Button color='primary'>Login</Button>
                                                </FormGroup>
                                            </Form>
                                            <h6>Inline Form without Label</h6>
                                            <form className="form-inline theme-form mt-3">
                                                <div className="form-group mb-0">
                                                    <input className="form-control" type="text" name="inputUnlabelUsername" placeholder="Username" autoComplete="off"/>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <input className="form-control" id="inputUnlabelPassword" type="password" name="inputPassword" placeholder="Password" autoComplete="off"/>
                                                </div>
                                                <div className="form-group mb-0 btn-login-form">
                                                    <Button color='primary'>Login</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>

                        <Col sm='12'>
                            <div className="card">
                                <div className="card-header">
                                    <h5>Validation Forms</h5>
                                </div>
                                <div className="card-body">

                                    <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                                        <div className="form-row">
                                            <div className="col-md-4">
                                                <AvField name="first_name"
                                                         label="First name"
                                                         type="text"
                                                         placeholder="First name"
                                                         required
                                                />
                                            </div>

                                            <div className="col-md-4">
                                                <AvField name="last_name"
                                                         label="Last name"
                                                         type="text"
                                                         placeholder="Last name"
                                                         validate={{
                                                             required:  {value: true, errorMessage: 'Please enter a last name'},
                                                             pattern:   {value: '^[A-Za-z0-9]+$', errorMessage: 'Your last name must be composed only with letter and numbers'},
                                                             minLength: {value: 6, errorMessage: 'Your last name must be between 6 and 16 characters'},
                                                             maxLength: {value: 16, errorMessage: 'Your last name must be between 6 and 16 characters'}
                                                         }}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <AvField name="email"
                                                         label="Email"
                                                         type="email"
                                                         placeholder="Email"
                                                         validate={{
                                                             required:  {value: true},
                                                         }}
                                                />
                                            </div>
                                            <div className='col-md-4'>
                                                <AvField name="maxPropNumberProp"
                                                         label="Max (validate prop)"
                                                         type="text"
                                                         required
                                                         validate={{max: {value: 10}}} />
                                            </div>
                                            <div className='col-md-4'>
                                                <AvField type="select"
                                                         name="select"
                                                         label="Option"
                                                         required
                                                >
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </AvField>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="form-group m-checkbox-inline mb-0">
                                                    <AvGroup>
                                                        <Label for="example">Rank</Label>
                                                        <AvInput name="rank" id="example" required />
                                                        <AvFeedback>This is an error!</AvFeedback>
                                                    </AvGroup>
                                                </div>
                                            </div>

                                            <div className='col-md-4'>
                                                <AvField type="select"
                                                         helpMessage="MULTIPLE!"
                                                         name="select-multiple"
                                                         label="Option"
                                                         multiple
                                                         validate={{
                                                             required:  {value: true},
                                                             max:  {value:3},
                                                             min:  {value:2},
                                                }}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </AvField>
                                            </div>

                                            <div className='col-md-4'>
                                                <AvCheckboxGroup
                                                    inline
                                                    name="checkbox"
                                                    label="Checkboxes"
                                                    validate={{
                                                    required:  {value: true},
                                                    max:  {value:3},
                                                    min:  {value:2},
                                                }}>
                                                    <div className="form-group m-checkbox-inline mb-0">

                                                        <div className="checkbox checkbox-primary">
                                                            <AvCheckbox label='Option 1' id="inline-form-10" value="1" />
                                                        </div>
                                                        <div className="checkbox checkbox-secondary">
                                                            <AvCheckbox label='Option 2' id="inline-form-11" value="2" />
                                                        </div>
                                                        <div className="checkbox checkbox-warning">
                                                            <AvCheckbox label='Option 3' id="inline-form-12" value="3" />
                                                        </div>
                                                        <div className="checkbox checkbox-info">
                                                            <AvCheckbox label='Option 4' id="inline-form-13" value="4" />
                                                        </div>
                                                    </div>
                                                </AvCheckboxGroup>
                                            </div>

                                            <div className='col-md-4'>
                                                <div className="form-group m-checkbox-inline mb-0">
                                                <AvRadioGroup
                                                    inline
                                                    name="radio"
                                                    label="Radios"
                                                    validate={{
                                                        required:  {value: true},
                                                    }}>
                                                    <AvRadio customInput label="Option 1" value="1" />
                                                    <AvRadio customInput label="Option 2" value="2" />
                                                    <AvRadio customInput label="Option 3" value="3" />
                                                    <AvRadio customInput label="Option 4" value="4" disabled />
                                                </AvRadioGroup>
                                                </div>
                                            </div>




                                        </div>
                                        <Button color="primary">Submit</Button>
                                    </AvForm>
                                </div>
                            </div>
                        </Col>
                    </div>
                </div>
            </div>
        )
    }
}


export default Forms;
