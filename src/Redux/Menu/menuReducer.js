import { MENU_LIST_FAIL, MENU_LIST_REQUEST, MENU_LIST_SUCCESS } from './menuTypes'

const initialState = {
    loading: false,
    menuList: [],
    error: ''
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case MENU_LIST_SUCCESS:
            return {
                loading: false,
                menuList: action.payload,
                error: ''
            }
        case MENU_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}