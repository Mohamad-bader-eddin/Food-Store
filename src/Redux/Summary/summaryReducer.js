import { ADD_SUMMARY_FAIL, ADD_SUMMARY_REQUEST, ADD_SUMMARY_SUCCESS, GET_SUMMARY_FAIL, GET_SUMMARY_REQUEST, GET_SUMMARY_SUCCESS } from './summaryTypes'

const initialState = {
    loading: false,
    summary: [],
    error: ''
}

export const summaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SUMMARY_REQUEST:
        case GET_SUMMARY_REQUEST:
            return {
                loading: true,
                summary: [],
                error: ''
            }
        case ADD_SUMMARY_SUCCESS:
            return {
                loading: false,
                ...state
            }
        case ADD_SUMMARY_FAIL:
        case GET_SUMMARY_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case GET_SUMMARY_SUCCESS:
            return {
                loading: false,
                summary: action.payload,
                error: ''
            }
        default:
            return state
    }
}