import React, { useContext } from 'react';
import { MasterContext } from '../layouts/Master';
import { Navigate } from 'react-router-dom';

const ProductMiddleware = ({ children }) => {
    const { user } = useContext(MasterContext)
    if (Object.keys(user).length) {
        return children
    }
    return <Navigate to={'/login'} />
};

export default ProductMiddleware;