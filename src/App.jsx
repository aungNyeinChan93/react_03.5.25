import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ListView from './views/ListView'
import Todos from './class_components/Todos'
import CreateTodo from './class_components/CreateTodo'
import Style from './class_components/Style'


function App() {

  return (
    <>
      <Counter />
      <ListView />
      <Todos />
      <CreateTodo />
      <Style />
    </>
  )
}

export default App
