import React, {Component} from 'react';
import { Table } from 'reactstrap';
import Breadcrumb from '../../common/breadcrumb.component'
import { getUser } from '../../../services/authentication/actions'
import { connect } from 'react-redux'
import Order from './order'
class Orders extends Component {
    componentDidMount(){
        const token = localStorage.getItem("token")
        this.props.getUser(token)
    }
    render () {
        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Orders List" parent="E-commerce" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Manage shop's orders </h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive product-table">
                                        <Table className="display">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Date</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Buyer</th>
                                                <th>Receiver</th>
                                                <th>Payment</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {this.props.user.current_user != undefined && this.props.user.current_user.order_details.map(order => {
                                               return( 
                                                <Order order={order}></Order>
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
    return { user: state.auth.user}
}

export default connect(mapStateToProps, {getUser})(Orders);