import React, { useContext } from 'react';
import { MasterContext } from '../layouts/Master';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(MasterContext);
    if (!user.name) {
        return <Navigate to='/login' />
    }
    return children;
};

export default ProtectedRoute;