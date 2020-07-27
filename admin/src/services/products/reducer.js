import * as types from './actionTypes'

const initialState = {
    products: [],
    productToEdit: {},
    errors: {}
}

export default function (state = initialState, action){
    switch(action.type){
        case types.GET_PRODUCTS:
            return {...state, products: action.products}
        case types.ADD_PRODUCT:
            return {...state, products: state.products.concat(action.product)}
        case types.EDIT_PRODUCT:
            return {...state, productToEdit: action.product}
        case types.UPDATE_PRODUCT:
            return state.products.map(product => {
                if(product.id == action.product.id){
                    return {
                        ...product,
                            ...action.product
                    }
                }
                else return product
            })
        case types.DELETE_PRODUCT:
            return state.products.filter(product => product.id !== action.id)
        default:
            return state;
    }
}