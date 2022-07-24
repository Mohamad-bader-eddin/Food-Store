import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const RequireAuth = ({ children }) => {
    const { loading , user } = useSelector(state => state.user)
    const location = useLocation()

    if (!loading && !user) {
        return <Navigate to='/sign-in' state={{ path: location.pathname }} />
    }
    return children
}