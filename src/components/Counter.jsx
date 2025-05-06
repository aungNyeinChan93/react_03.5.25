import React, { useState } from 'react';

const Counter = () => {
    const [state, setState] = useState({
        name: 'counter',
        counter: 0,
        isLoading: true,
        status: true,

    })
    console.log(state);

    if (state.isLoading) {
        return (
            <React.Fragment>
                <section className='w-full h-screen flex justify-center items-center'>
                    <h1 className='text-4xl text-red-600'>Loading ... </h1>
                    <button onClick={() => setState(pre => ({ ...pre, isLoading: !state.isLoading }))}> Change Status</button>
                </section>
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <section className='bg-red-400 text-center w-full h-screen'>
                <h2 className='text-center text-2xl text-gray-100'>{state.counter}</h2>
                <button onClick={() => setState((pre) => ({ ...pre, counter: pre.counter + 1 }))}>+</button>
                {state.status ? (
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis natus eligendi quo.</p>
                    </div>) : (
                    <div>
                        <p>False</p>
                    </div>)}
            </section>
        </React.Fragment>
    );


};

export default Counter;