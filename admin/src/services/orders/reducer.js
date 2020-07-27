import * as types from './actionTypes'

const initialState = {
    orders: [],
    errors: {},
    order: {}
}

export default function (state = initialState, action){
    switch(action.type){
        case types.RECEIVE_ORDERS:
            return {...state, orders: action.orders}
        case types.ACCEPT_ORDER:
            return {...state, orders: newOrders(state, action.order) }
        case types.CANCEL_ORDER:
            return {...state, orders: newOrders(state, action.order)}
        case types.ERRORS:
            return {...state, errors: action.errors}
        default:
            return state;
    }
}

const newOrders = (state, order) => {
    let arr = state.orders.filter(o => {
        return o == order.id
    })
    return [...arr, order]
}