import * as types from './actionTypes'

const initialState = {
    categories: [],
    errors: {}
}

export default function (state = initialState, action){
    switch(action.type){
        case types.GET_CATEGORIES:
            return {...state, categories: action.categories}
        default:
            return state;
    }
}