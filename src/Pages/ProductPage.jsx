import React from 'react';
import Lists from '../components/Lists';

const ProductPage = () => {
    return (
        <React.Fragment>
            <h1 className='text-center text-red-500 text-xl'>Products Page</h1>
            <Lists />
        </React.Fragment>
    );
};

export default ProductPage;