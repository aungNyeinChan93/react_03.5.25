import React from 'react';
import Lists from '../components/Lists';

const ListView = () => {
    return (
        <React.Fragment>
            <section className='w-full min-h-screen mb-4 overflow-auto bg-cyan-700 flex flex-col justify-center space-y-7 items-center'>
                <h3 className='text-3xl text-red-500 text-center'>Produts Lists </h3>
                <Lists />
            </section>
        </React.Fragment>
    );
};

export default ListView;