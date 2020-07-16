import React, {Component} from 'react';
import { Table, Button } from 'reactstrap';
import Breadcrumb from '../../common/breadcrumb.component'
import { getProducts, deleteProduct } from '../../../services/products/actions'
import { connect } from 'react-redux'
const styles ={
    newButton: {
        position: 'absolute',
        right: '30px',
        margin: 'auto'
    },
    table: {
        marginTop: '20px'
    }
}
class ProductList extends Component {

    componentDidMount(){
        this.receiveProducts();
    }
    receiveProducts = () => {
        const token = localStorage.getItem("token")
        this.props.getProducts(token)
    }
    deleteProduct = product => {
        this.props.deleteProduct(product.id)
            .then(()=> {
                this.receiveProducts()
            })
            .catch(err=> {
                console.log(err)
            })
    }
    render () {
        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Products" parent="E-commerce" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Products List </h5>
                                    <span>The searching functionality provided by DataTables is useful for quickly search through the information in the table - however the search is global, and you may wish to present controls that search on specific columns.</span>
                                    
                                </div>
                                <div>
                                <Button className="btn-pill btn-success mr-1" style={styles.newButton} color="primary"  onClick={()=>this.props.history.push(`${process.env.PUBLIC_URL}/admin/products/new`)} >New</Button>
                                </div>
                                <div  style={styles.table} className="card-body">
                                    <div className="table-responsive product-table">
                                        <Table className="display">
                                            <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Details</th>
                                                <th>Amount</th>
                                                <th>Stock</th>
                                                <th>Start date</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.products != undefined && this.props.products.map(product => {
                                                return (<tr>
                                                <td><img style={{width: "50px", height: "50px"}} src={product.images[0]} alt=""/>
                                                </td>
                                                <td>
                                                    <h6>{product.title.en}</h6>
                                                    <p>{product.short_description.en}</p>
                                                </td>
                                                <td>{product.price} VND</td>
                                                <td className="font-success">In Stock</td>
                                                <td>2011/04/25</td>
                                                <td>
                                                    <Button onClick={()=> this.deleteProduct(product)} className="btn-pill btn-danger mr-1" color="danger">Delete</Button>
                                                    <Button className="btn-pill btn-success" color="success">Edit</Button>
                                                </td>
                                            </tr>
                                                )
                                            })}                                 
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Container-fluid Ends*/}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.product.products
    }
}
export default connect(mapStateToProps, {getProducts, deleteProduct})(ProductList);