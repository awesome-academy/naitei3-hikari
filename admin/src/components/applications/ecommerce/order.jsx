import React, { Component } from 'react'
import { Button } from 'reactstrap'
import {  acceptOrder, cancelOrder } from '../../../services/orders/actions'
import { connect } from 'react-redux'
class Order extends Component {
    state = {
        status: this.props.order.status
    }
    accept = order => {
        this.setState({status: 'accepted'}, ()=> {
            this.props.acceptOrder(order)
        })
    }
    cancel = order => {
        this.setState({status: 'cancelled'}, ()=> {
            this.props.cancelOrder(order)
        })
    }
    render() {
        const {order} = this.props;
        return (
            <tr>
                                                <td>{order.id}
                                                </td>
                                                <td>
                                                    {order.order.date_paid}
                                                </td>
                                                <td>{order.price}</td>
                                                <td>{order.quantity}</td>
                                                <td>{order.price * order.quantity}</td>
                                               <td className="font-success">{order.order.buyer}</td>
                                               <td>{order.order.receiver}</td>
                                               <td>{order.order.payment}</td>
                                               <td>{this.state.status}</td>
                                                <td>
                                                    <Button onClick={()=>this.accept(order)} className="btn-pill btn-danger mr-1" color="danger">Accept</Button>
                                                    <Button onClick={()=>this.cancel(order)} className="btn-pill btn-success" color="success">Refuse</Button>
                                                </td>
                                            </tr>
        )
    }
}
export default connect(null, {acceptOrder, cancelOrder})(Order);