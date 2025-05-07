import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer'

const Main = () => {
    return (
        <React.Fragment>
            <Navbar />
            <main className='w-full min-h-screen bg-gray-200/20 mb-10'>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Main;