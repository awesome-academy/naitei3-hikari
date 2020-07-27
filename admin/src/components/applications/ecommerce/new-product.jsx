import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import Breadcrumb from '../../common/breadcrumb.component'
import { AvForm, AvField, AvGroup,AvSelect, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import { addProduct } from '../../../services/products/actions'
import { connect } from 'react-redux'

class NewProduct extends Component {
    state = {
        name: '',
        content: '',
        price: '',
        quantity: 1,
        sku: '',
        category_id: 1,
        shop_id: 1,
        picture: '',
        featured: false,
        sale_label: false,
        new_label: false,
        short_description: '',
        description: ''

    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.addProduct(this.state).then(()=> {
            this.props.history.push("/admin/products")
        })
        .catch(err => {
            console.log(err)
        })
    }
    render () {
        return (
                                <Col sm='12'>
                            <div className="card">
                                <div className="card-header">
                                    <h5>New Product</h5>
                                </div>
                                <div className="card-body">

                                    <AvForm onSubmit={this.onSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                                        <div className="form-row">
                                            
                                            <div className="col-md-4">
                                                <AvField name="name"
                                                         label="Name"
                                                         type="text"
                                                         placeholder="Name"
                                                         onChange={this.onChange}
                                                />
                                            </div>
                                            <div className='col-md-4'>
                                                <AvField name="content"
                                                         label="Content"
                                                         type="text"
                                                         placeholder="Content"
                                                         onChange={this.onChange}
                                                         required/>
                                            </div>
                                            <div className='col-md-4'>
                                                <AvField name="price"
                                                         label="Price"
                                                         type="number"
                                                         placeholder="Price"
                                                         onChange={this.onChange}
                                                         required/>
                                            </div>
                                            <div className='col-md-4'>
                                                <AvField name="quantity"
                                                         label="Quantity"
                                                         type="number"
                                                         placeholder="Quantity"
                                                         onChange={this.onChange}
                                                         required/>
                                            </div>
                                            <div className='col-md-4'>
                                                <AvField name="sku"
                                                         label="SKU"
                                                         type="text"
                                                         placeholder="SKU"
                                                         onChange={this.onChange}
                                                         />
                                            </div>
                                            <div className='col-md-4'>
                                            <AvField type="select" name="category_id" label="Category" helpMessage="Choose category">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </AvField>
                                            </div>
                                            <div className='col-md-4'>
                                            <AvField type="select" name="shop_id" label="Shop" helpMessage="Choose shop">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </AvField>

                                            </div>
                                            <div className='col-md-4'>
                                            <AvField name="picture"
                                                        label="Picture"
                                                        type="text"
                                                        placeholder="Picture"
                                                    ></AvField>
                                            </div>
                                            <div className="col-md-4"></div>
                                            <div style={{marginBottom: "10px"}} className='col-md-4'>
                                                <Input type="checkbox" name="featured"></Input> Featured
                                            </div>
                                            <div style={{marginBottom: "10px"}} className='col-md-4'>
                                                <Input type="checkbox" name="sale_label"></Input> On Sale
                                            </div>
                                            <div style={{marginBottom: "10px"}} className='col-md-4'>
                                                <Input type="checkbox" name="new_label"></Input> New
                                            </div>
                                            <div className='col-md-4'>
                                                <AvField name="short_description"
                                                        label="Short description"
                                                        type="text"
                                                        placeholder="Short description"
                                                    ></AvField>
                                            </div>
                                            <div className='col-md-4'>
                                                <AvField name="description"
                                                        label="Description"
                                                        type="text"
                                                        placeholder="Description"
                                                    ></AvField>
                                            </div>
                                        </div>
                                        <Button color="primary">Submit</Button>
                                    </AvForm>
                                </div>
                            </div>
                        </Col>
            
        )
    }
}


export default connect(null, {addProduct})(NewProduct);