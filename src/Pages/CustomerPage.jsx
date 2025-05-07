import React from 'react';
import { Outlet } from 'react-router-dom'

const CustomerPage = () => {
    return (
        <React.Fragment>
            <h1>Customer Page</h1>
            <Outlet />
        </React.Fragment>
    );
};

export default CustomerPage;