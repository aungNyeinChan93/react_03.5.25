import React, { use, useContext } from 'react';
import TestReducer from '../components/TestReducer';
import { MasterContext } from '../layouts/Master';


const HomePage = () => {
    const { user } = useContext(MasterContext);

    return (
        <React.Fragment>
            <h1 className='text-center text-2xl text-green-500 p-2 my-1'>{user?.name}</h1>
            <TestReducer />
        </React.Fragment>
    );
};

export default HomePage;