import { GET_COUPON_FAIL, GET_COUPON_REQUEST, GET_COUPON_SUCCESS, REMOVE_COUPON } from './couponTypes'

const initialState = {
    loading: false,
    coupon: null,
    error: ''
}

export const couponReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUPON_REQUEST:
            return {
                loading: true,
                ...state
            }
        case GET_COUPON_SUCCESS:
            return {
                loading: false,
                coupon: action.payload,
                error: ''
            }
        case GET_COUPON_FAIL:
            return {
                loading: false,
                coupon: null,
                error: action.payload
            }
        case REMOVE_COUPON:
            return initialState
        default:
            return state
    }
}