import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../Firebase/config'
import { MENU_LIST_FAIL, MENU_LIST_REQUEST, MENU_LIST_SUCCESS } from './menuTypes'

const menuListRequest = () => {
    return {
        type: MENU_LIST_REQUEST
    }
}

const menuListSuccess = (menu) => {
    return {
        type: MENU_LIST_SUCCESS,
        payload: menu
    }
}

const menuListFail = (error) => {
    return {
        type: MENU_LIST_FAIL,
        payload: error
    }
}


export const getMenu = (type) => async dispatch => {
    let menuData = []

    async function getMenuItem(db, meal) {
        const menuCol = collection(db, 'menu')
        const queryMeal = query(menuCol, where('type', '==', meal))
        const menuSnapshot = await getDocs(queryMeal)
        const menuList = menuSnapshot.docs.map(doc => ({...doc.data(), id: doc.id }))
        return menuList
    }

    try {
        dispatch(menuListRequest())
        menuData = await getMenuItem(db, type)
        dispatch(menuListSuccess(menuData))
    } catch (error) {
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(menuListFail(err))
    }
}