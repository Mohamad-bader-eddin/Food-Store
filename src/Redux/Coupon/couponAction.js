import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../Firebase/config'
import { GET_COUPON_FAIL, GET_COUPON_REQUEST, GET_COUPON_SUCCESS, REMOVE_COUPON } from './couponTypes'

const getCouponRequest = () => {
    return {
        type: GET_COUPON_REQUEST
    }
}

const getCouponSuccess = coupon => {
    return {
        type: GET_COUPON_SUCCESS,
        payload: coupon
    }
}

const getCouponFail = error => {
    return {
        type: GET_COUPON_FAIL,
        payload: error
    }
}

const removeCouponRequest = () => {
    return {
        type: REMOVE_COUPON
    }
}

async function getCouponItem(db, name) {
    const couponCol = collection(db, 'coupon')
    const couponQuery = query(couponCol, where('name', '==', name))
    const couponSnapshot = await getDocs(couponQuery)
    const couponList = couponSnapshot.docs.map(doc => ({...doc.data(), id: doc.id }))
    return couponList
}



export const getCoupon = name => async dispatch => {
    try {
        dispatch(getCouponRequest())
        const coupon = await getCouponItem(db, name)
        dispatch(getCouponSuccess(coupon[0]))
    } catch (error) {
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(getCouponFail(err))
    }
}

export const removeCoupon = () => dispatch => {
    dispatch(removeCouponRequest())
}