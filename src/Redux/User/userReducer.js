import { USER_ADD_FAIL, USER_ADD_REQUEST, USER_ADD_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS } from './userTypes'

const initialState = {
    loading: false,
    user: null,
    error: ''
}

export const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case USER_ADD_REQUEST:
        case USER_LOGIN_REQUEST:
        case USER_LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case USER_ADD_FAIL:
        case USER_LOGIN_FAIL:
        case USER_LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: null
            }
        default:
            return state
    }
}