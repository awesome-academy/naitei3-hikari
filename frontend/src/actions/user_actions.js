import { postUser, postSession, deleteSession, clearAllErrors, fetchUserByName, fetchUserById, fetchUsers } from '../utils/utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_NO_USER_ERRORS = 'RECEIVE_NO_USER_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errorsArr => ({
  type: RECEIVE_ERRORS,
  errorsArr
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});
const receiveNoUserErrors = errorData => ({
  type: RECEIVE_NO_USER_ERRORS,
  errorData
});
const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const createNewUser = formUser => dispatch => {
  return postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(data => dispatch(receiveErrors(data)));
}

export const login = formUser => dispatch => 
  postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(data => dispatch(receiveErrors(data)));

export const logout = () => dispatch => 
  deleteSession()
  .then(() => dispatch(logoutCurrentUser()))
  .fail(data => dispatch(receiveErrors(data)));

export const getUserByName = (username) => dispatch => 
  fetchUserByName(username)
  .then((user) => dispatch(receiveUser(user)))
  .fail(data => dispatch(receiveNoUserErrors(data)));

export const getUserById = (id) => dispatch => 
  fetchUserById(id)
  .then((user) => dispatch(receiveUser(user)))
  .fail(data => dispatch(receiveNoUserErrors(data)));

export const getUsers = (request) => dispatch => 
  fetchUsers(request)
  .then((users) => dispatch(receiveUsers(users)))
  .fail(data => dispatch(receiveNoUserErrors(data)))

export const resetErrors = () => dispatch => 
  dispatch(clearErrors())