import * as types from './actionTypes'
import axios from 'axios'
let apiHost = 'http://' + (process.env.API_HOST || '127.0.0.1') + ':3001'


export const acceptOrder = order => dispatch => {
    axios.post(`${apiHost}/api/v1/order_details/${order.id}/handle`, {accept: true})
        .then(res => {
            dispatch({ type: types.ACCEPT_ORDER, order: res.data})
        })
        .catch(err => {
            dispatch({ type: types.ERRORS, errors: err})
        })
}

export const cancelOrder = order => dispatch =>{
    axios.post(`${apiHost}/api/v1/order_details/${order.id}/handle`, {accept: false})
        .then(res => {
            dispatch({ type: types.CANCEL_ORDER, order: res.data})
        })
        .catch(err => {
            dispatch({ type: types.ERRORS, errors: err})
        })
}