import React from 'react';
import { Outlet } from 'react-router-dom';

const ProductLayout = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default ProductLayout;