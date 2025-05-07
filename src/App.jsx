import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ListView from './views/ListView'
import Todos from './class_components/Todos'
import CreateTodo from './class_components/CreateTodo'
import Style from './class_components/Style'
import TestReducer from './components/TestReducer'


function App() {

  return (
    <>
      <Counter />
      <ListView />
      <Todos />
      <CreateTodo />
      <Style />
      <TestReducer />
    </>
  )
}

export default App
