import * as types from './actionTypes'
import axios from 'axios'
let apiHost = 'http://' + (process.env.API_HOST || '127.0.0.1') + ':3001'

export const addUser = user => dispatch => new Promise((resolve, reject)=> {
    axios.post( `${apiHost}/api/v1/users`, user)
        .then(res => {
            dispatch({ type: types.ADD_USER, user: res.data })
            resolve();
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: types.ERRORS, errors: err})
            reject();
        })
})

export const deleteUser = id => dispatch => new Promise((resolve, reject)=> {
    axios.delete(`${apiHost}/api/v1/users/${id}`)
        .then(res => {
            dispatch({ type: types.DELETE_USER, id: id})
            resolve();
        })
        .catch(err => {
            dispatch({ type: types.ERRORS, errors: err})
            reject(err);
        })
})

export const editUser = user => dispatch =>  {
    dispatch({ type: types.EDIT_USER, userToEdit: user})
}

export const updateUser = (id,data) => dispatch => new Promise((resolve, reject)=> {
    axios.patch(`${apiHost}/api/v1/users/${id}`, data)
        .then(res => {
            dispatch({ type: types.UPDATE_USER, user: res.data})
            resolve();
        })
        .catch(err => {
            dispatch({ type: types.ERRORS, errors: err})
            reject();
        })
})

export const getUsers = token => dispatch => {
    var config = {
      headers: {}
    }
    if(token){
      config['headers']['Authorization'] =  JSON.parse(token)
    }
    axios.get(`${apiHost}/api/v1/users`,config)
    .then(res => {
      dispatch({ type: types.GET_USERS, users: res.data })
    })
    .catch(err => {
      dispatch({ type: types.ERRORS, errors: err})
    })
  }