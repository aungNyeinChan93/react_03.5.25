import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ListView from './views/ListView'
import Todos from './class_components/Todos'
import CreateTodo from './class_components/CreateTodo'
import Style from './class_components/Style'
import TestReducer from './components/TestReducer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Navbar from './layouts/Navbar'
import NotFoundPage from './Pages/NotFoundPage'
import CustomerPage from './Pages/CustomerPage'
import Main from './layouts/Main'
import ProductPage from './Pages/ProductPage'
import SingleProduct from './components/SingleProducts'
import ProductLayout from './layouts/ProductLayout'
import AuthLayout from './layouts/AuthLayout'
import Login from './components/auth/Login'
import ProtectedRoute from './components/ProtectedRoute'
import ProductMiddleware from './middlewares/ProductMiddleware'

function App() {

  return (
    <>
      {/* <Counter />
      <ListView />
      <Todos />
      <CreateTodo />
      <Style />
      <TestReducer /> */}
      <BrowserRouter>
        <Routes>

          <Route path='/' element={< Main />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='customers' element={<CustomerPage />}>
              <Route path='one' element={<h1>Customer One</h1>} />
            </Route>
            <Route path='products' element={
              <ProductMiddleware>
                <ProductLayout />
              </ProductMiddleware>}>
              <Route index element={<ProductPage />} />
              <Route path=':id' element={<SingleProduct />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFoundPage />} />

          <Route path='/login' element={<AuthLayout />} >
            <Route index element={<Login />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
