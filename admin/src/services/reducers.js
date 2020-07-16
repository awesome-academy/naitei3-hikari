import {combineReducers} from 'redux'
import authReducer from './authentications/reducer'
import productReducer from './products/reducer'
export default combineReducers(
    {
        auth: authReducer,
        product: productReducer
    }
)