import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test';
import useTodos from './components/useTodos';

function App() {
  
  let todos=useTodos();

  return (
    <>
    {todos.length>0?
      todos.map((todo)=>{
        return <div key={todo["id"]}>{todo["title"]}</div>
      })
    :<div>...loading</div>}
    
    </>
  )
}

export default App
