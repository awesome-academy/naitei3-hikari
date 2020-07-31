import {combineReducers} from 'redux'
import authReducer from './authentications/reducer'
import userReducer from './users/reducer'
export default combineReducers(
    {
        auth: authReducer,
        user: userReducer
    }
)