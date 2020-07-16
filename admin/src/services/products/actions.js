import * as types from './actionTypes'
import axios from 'axios'
let apiHost = 'http://' + (process.env.API_HOST || '127.0.0.1') + ':3001'

export const addProduct = product => dispatch => new Promise((resolve, reject)=> {
    console.log(product)
    axios.post( `${apiHost}/api/v1/products`, product)
        .then(res => {
            dispatch({ type: types.ADD_PRODUCT, product: res.data })
            resolve();
        })
        .catch(err => {
            dispatch({ type: types.ERRORS, errors: err})
            reject();
        })
})

export const deleteProduct = id => dispatch => new Promise((resolve, reject)=> {
    axios.delete(`${apiHost}/api/v1/products/${id}`)
        .then(res => {
            dispatch({ type: types.DELETE_PRODUCT, id: id})
            resolve();
        })
        .catch(err => {
            dispatch({ type: types.ERRORS, errors: err})
            reject(err);
        })
})

export const editProduct = product => dispatch =>  {
    dispatch({ type: types.EDIT_PRODUCT, productToEdit: product})
}

export const updateProduct = (id,data) => dispatch => new Promise((resolve, reject)=> {
    axios.patch(`${apiHost}/api/v1/products/${id}`, data)
        .then(res => {
            dispatch({ type: types.UPDATE_PRODUCT, product: res.data})
            resolve();
        })
        .catch(err => {
            dispatch({ type: types.ERRORS, errors: err})
            reject();
        })
})

export const getProducts = token => dispatch => {
    var config = {
      headers: {}
    }
    if(token){
      config['headers']['Authorization'] =  JSON.parse(token)
    }
    axios.get(`${apiHost}/api/v1/current_user`,config)
    .then(res => {
      dispatch({ type: types.GET_PRODUCTS, products: res.data.current_user.products })
    })
    .catch(err => {
      dispatch({ type: types.ERRORS, errors: err})
    })
  }