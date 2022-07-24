import { ADD_CART_FAIL, ADD_CART_REQUEST, ADD_CART_SUCCESS, DELETEALL_CART_FAIL, DELETEALL_CART_REQUEST, DELETEALL_CART_SUCCESS, DELETE_CART_FAIL, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS, UPDATE_CART_QUANTITY_FAIL, UPDATE_CART_QUANTITY_REQUEST, UPDATE_CART_QUANTITY_SUCCESS } from './CartTypes'

const initialState = {
    loading: false,
    carts: [],
    error: ''
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_REQUEST:
        case GET_CART_REQUEST:
        case UPDATE_CART_QUANTITY_REQUEST:
        case DELETE_CART_REQUEST:
        case DELETEALL_CART_REQUEST:
            return {
                carts: [],
                loading: true,
                error: ''
            }
        case ADD_CART_SUCCESS:
        case DELETEALL_CART_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case ADD_CART_FAIL:
        case GET_CART_FAIL:
        case UPDATE_CART_QUANTITY_FAIL:
        case DELETE_CART_FAIL:
        case DELETEALL_CART_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_CART_SUCCESS:
        case UPDATE_CART_QUANTITY_SUCCESS:
        case DELETE_CART_SUCCESS:
            return {
                loading: false,
                carts: action.payload,
                error: ''
            }
        default:
            return state
    }
}