import { addDoc, collection, deleteDoc, doc, getDocs, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import db from '../../Firebase/config'
import { ADD_CART_FAIL, ADD_CART_REQUEST, ADD_CART_SUCCESS, DELETEALL_CART_FAIL, DELETEALL_CART_REQUEST, DELETEALL_CART_SUCCESS, DELETE_CART_FAIL, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAIL, GET_CART_REQUEST, GET_CART_SUCCESS, UPDATE_CART_QUANTITY_FAIL, UPDATE_CART_QUANTITY_REQUEST, UPDATE_CART_QUANTITY_SUCCESS } from './CartTypes'
import { toast } from "react-toastify";


const addCartRequest = () => {
    return {
        type: ADD_CART_REQUEST
    }
}

const addCartSuccess = () => {
    return {
        type: ADD_CART_SUCCESS,
    }
}

const addCartFail = error => {
    return {
        type: ADD_CART_FAIL,
        payload: error
    }
}

const getCartsRequest = () => {
    return {
        type: GET_CART_REQUEST
    }
}

const getCartsSuccess = carts => {
    return {
        type: GET_CART_SUCCESS,
        payload: carts
    }
}

const getCartsFail = error => {
    return {
        type: GET_CART_FAIL,
        payload: error
    }
}

const updateCartRequest = () => {
    return {
        type: UPDATE_CART_QUANTITY_REQUEST
    }
}

const updateCartSuccess = (carts) => {
    return {
        type: UPDATE_CART_QUANTITY_SUCCESS,
        payload: carts
    }
}

const updateCartFail = error => {
    return {
        type: UPDATE_CART_QUANTITY_FAIL,
        payload: error
    }
}


const deleteCartRequest = () => {
    return {
        type: DELETE_CART_REQUEST
    }
}

const deleteCartSuccess = (carts) => {
    return {
        type: DELETE_CART_SUCCESS,
        payload: carts
    }
}

const deleteCartFail = error => {
    return {
        type: DELETE_CART_FAIL,
        payload: error
    }
}

const deleteAllCartRequest = () => {
    return {
        type: DELETEALL_CART_REQUEST
    }
}

const deleteAllCartSuccess = () => {
    return {
        type: DELETEALL_CART_SUCCESS
    }
}

const deleteAllCartFail = error => {
    return {
        type: DELETEALL_CART_FAIL,
        payload: error
    }
}

async function getCartsItem(db, email) {
    const cartCol = collection(db, 'cart')
    const cartQuery = query(cartCol, where('user_email', '==', email))
    const cartSnapshot = await getDocs(cartQuery)
    const cartList = cartSnapshot.docs.map(doc => ({...doc.data(), id: doc.id }))
    return cartList
}


export const addCart = cart => async dispatch => {
    dispatch(addCartRequest())

    const newCart = {
        ...cart,
        createAt: serverTimestamp()
    }
    addDoc(collection(db, "cart"), newCart)
        .then(() => {
            dispatch(addCartSuccess())
            toast.success("It have been added successfully", {
                position: "bottom-right",
                pauseOnHover: true,
                theme: "colored",
            })
        })
        .catch(error => {
            const errMsg =
                error.response && error.response.data.message ?
                error.response.data.message :
                error.message
            dispatch(addCartFail(errMsg))
            toast.error(errMsg, {
                position: "bottom-right",
                pauseOnHover: true,
                theme: "colored",
            });
        })
}

export const getCarts = email => async dispatch => {
    let carts = []

    try {
        dispatch(getCartsRequest())
        carts = await getCartsItem(db, email)
        dispatch(getCartsSuccess(carts))
    } catch (error) {
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(getCartsFail(err))
    }
}

export const updateCartQuantity = (cartId, quantity, email) => async dispatch => {
    let carts = []
    try {
        dispatch(updateCartRequest())
        await updateDoc(doc(db, 'cart', cartId), {
            quantity
        })
        carts = await getCartsItem(db, email)
        dispatch(updateCartSuccess(carts))
    } catch (error) {
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(updateCartFail(err))
    }
}

export const deleteCart = (id, email) => async dispatch => {
    try {
        dispatch(deleteCartRequest())
        await deleteDoc(doc(db, 'cart', id))
        const carts = await getCartsItem(db, email)
        dispatch(deleteCartSuccess(carts))
        toast.success("It have been deleted successfully", {
            position: "bottom-right",
            pauseOnHover: true,
            theme: "colored",
        })
    } catch (error) {
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(deleteCartFail(err))
    }
}

export const deleteAllCart = email => async dispatch => {
    let carts = []
    try {
        dispatch(deleteAllCartRequest())
        carts = await getCartsItem(db, email)
        dispatch(deleteAllCartSuccess())
        carts.forEach(cart => {
            deleteDoc(doc(db, 'cart', cart.id))
        })
    } catch (error) {
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(deleteAllCartFail(err))
    }
}