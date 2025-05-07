import React, { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MasterContext } from '../../layouts/Master';

const Login = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const navigate = useNavigate()
    const { setUser } = useContext(MasterContext)

    const formSubmit = (e) => {
        e.preventDefault();
        if (nameRef.current.value || emailRef.current.value) {
            setUser(pre => ({ ...pre, name: nameRef.current.value, email: emailRef.current.value }))
            navigate('/')
        }
    }

    return (
        <React.Fragment>
            <section className=' flex justify-center items-center my-10'>
                <form className='w-[500px]' onSubmit={formSubmit}>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label className="block text-sm/6 font-medium text-gray-900">Username</label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input ref={nameRef} type="text" name="username" id="username" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="janesmith" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label className="block text-sm/6 font-medium text-gray-900">email</label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input ref={emailRef} type="email" name="email" id="email" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="janesmith@123" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='px-3 py-2 bg-blue-600 rounded my-5'> Login</button>
                </form>
            </section>

        </React.Fragment>
    );
};

export default Login;