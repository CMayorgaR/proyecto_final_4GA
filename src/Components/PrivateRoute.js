import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

    const [auth, setAuth] = useState(localStorage.getItem('token'))

    console.log('authprivate', auth)
    return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;