import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../Store/appContext";
import { Navigate } from 'react-router-dom';

function SuperPrivateRoute({ children }) {
    const {store, actions} = useContext(Context)
    const [auth, setAuth] = useState(localStorage.getItem('token'))
    const [role_id, setRole_id] = useState(localStorage.getItem('role_id'))

    console.log('authprivate', auth)
    console.log(store.user)
    return (auth && role_id==2) ? children : <Navigate to="/" />;
}

export default SuperPrivateRoute;