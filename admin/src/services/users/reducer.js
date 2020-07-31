import * as types from './actionTypes'

const initialState = {
    users: [],
    userToEdit: {},
    errors: {}
}

export default function (state = initialState, action){
    switch(action.type){
        case types.GET_USERS:
            return {...state, users: action.users}
        case types.ADD_USER:
            return {...state, users: state.users.concat(action.user)}
        case types.EDIT_USER:
            return {...state, userToEdit: action.user}
        case types.UPDATE_USER:
            return state.users.map(user => {
                if(user.id == action.user.id){
                    return {
                        ...user,
                            ...action.user
                    }
                }
                else return user
            })
        case types.DELETE_USER:
            return state.users.filter(user => user.id !== action.id)
        case types.ERRORS:
            return {...state, errors: action.errors}
        default:
            return state;
    }
}