import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore'
import db from '../../Firebase/config'
import { ADD_SUMMARY_FAIL, ADD_SUMMARY_REQUEST, ADD_SUMMARY_SUCCESS, GET_SUMMARY_FAIL, GET_SUMMARY_REQUEST, GET_SUMMARY_SUCCESS } from './summaryTypes'

const addSummaryRequest = () => {
    return {
        type: ADD_SUMMARY_REQUEST
    }
}

const addSummarySuccess = () => {
    return {
        type: ADD_SUMMARY_SUCCESS
    }
}

const addSummaryFail = error => {
    return {
        type: ADD_SUMMARY_FAIL,
        payload: error
    }
}

const getSummaryRequest = () => {
    return {
        type: GET_SUMMARY_REQUEST
    }
}

const getSummarySuccess = summary => {
    return {
        type: GET_SUMMARY_SUCCESS,
        payload: summary
    }
}

const getSummaryFail = error => {
    return {
        type: GET_SUMMARY_FAIL,
        payload: error
    }
}

async function getSummaryItem(db, email) {
    const summaryCol = collection(db, 'summary')
    const summaryQuery = query(summaryCol, where('email', '==', email))
    const summarySnapshot = await getDocs(summaryQuery)
    const summaryList = summarySnapshot.docs.map(doc => ({...doc.data(), id: doc.id }))
    return summaryList
}

export const addSummary = summary => async dispatch => {
    dispatch(addSummaryRequest())
    const newSummary = {
        ...summary,
        createAt: serverTimestamp()
    }

    addDoc(collection(db, 'summary'), newSummary)
        .then(() => {
            dispatch(addSummarySuccess())
        })
        .catch(error => {
            const errMsg =
                error.response && error.response.data.message ?
                error.response.data.message :
                error.message
            dispatch(addSummaryFail(errMsg))
        })
}

export const getSummary = email => async dispatch => {
    let summary = []
    try {
        dispatch(getSummaryRequest())
        summary = await getSummaryItem(db, email)
        dispatch(getSummarySuccess(summary))
    } catch (error) {
        const err = error.response && error.response.data.message ? error.response.data.message : error.message
        dispatch(getSummaryFail(err))
    }
}