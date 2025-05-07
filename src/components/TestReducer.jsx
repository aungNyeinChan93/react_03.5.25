import React, { useContext, useReducer } from 'react';
import TestStyle from '../styles/test.module.css'
import { MasterContext } from '../layouts/Master';

const TestReducer = () => {

    const { name, theme, setTheme } = useContext(MasterContext)

    const initialValue = {
        count: 0,
        name: 'counter reducer',
    };

    const reducer = (state, action) => {
        if (action.type === 'increase') {
            return { ...state, count: state.count + 1 }
        }
        if (action.type === 'ten') {
            return { ...state, count: state.count + action.payload }
        }
        if (action.type === 'name') {
            return { ...state, name: action.payload }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialValue);

    const changeTheme = () => {
        theme === 'dark'
            ? setTheme(pre => pre = 'light')
            : setTheme(pre => pre = 'dark')
    }

    return (
        <React.Fragment>
            <section className='w-full h-screen overflow-auto bg-amber-100 text-center'>
                <h1>{state.name}</h1>
                <p>{state.count}</p>
                <p className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>{name} || {theme}</p>
                <button className={TestStyle.primaryBtn} onClick={() => dispatch({ type: 'increase' })}>+</button>
                <button className={TestStyle.primaryBtn} onClick={() => dispatch({ type: 'ten', payload: 10 })}>+10</button>
                <button className={TestStyle.primaryBtn} onClick={() => dispatch({ type: 'name', payload: 'test change' })}>change name</button>
                <button className={TestStyle.primaryBtn} onClick={changeTheme}>change Theme</button>

            </section>
        </React.Fragment>
    );
};

export default TestReducer;