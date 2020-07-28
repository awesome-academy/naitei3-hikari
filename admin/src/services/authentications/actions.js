import axios from 'axios';
import * as types from './actionTypes';

let apiHost = 'http://' + (process.env.API_HOST || '127.0.0.1') + ':3001'

export const login = userData => dispatch => new Promise((resolve, reject)=>{
    dispatch({ type: types.START_PROCESSING });
    axios.post(`${apiHost}/api/v1/session`, userData)
    .then(({ data}) => {
      if(data.user.user.role == "admin"){
      localStorage.setItem('token', JSON.stringify(data.user.auth_token));

      dispatch({ type: types.LOG_IN_SUCCESS, userData });
      dispatch({ type: types.FINISH_PROCESSING });
      resolve();
      }
      reject();
    })
    .catch(err => {
      dispatch({ type: types.LOG_IN_FAILURE, errors: err.response.data.errors });
      dispatch({ type: types.FINISH_PROCESSING });
      reject();
    });
});

export const getUser = token => dispatch => {
  var config = {
    headers: {}
  }
  if(token){
    config['headers']['Authorization'] =  JSON.parse(token)
  }
  dispatch({ type: types.START_PROCESSING })
  axios.get(`${apiHost}/api/v1/current_user`,config)
  .then(data => {
    dispatch({ type: types.GET_USER_SUCCESS, user: data.data })
    dispatch({ type: types.FINISH_PROCESSING })
  })
  .catch(err => {
    dispatch({ type: types.GET_USER_FAILURE, errors: err.response.data.errors})
    dispatch({ type: types.FINISH_PROCESSING })
  })
}

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: types.LOG_OUT,
  };
}

export const clearErrors = () => {
  return {
    type: types.CLEAR_ERRORS,
  };
}