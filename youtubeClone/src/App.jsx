import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import VideoGrid from "./components/VideoGrid";
import AppBar from "./components/AppBar";
import SideBar from './components/SideBar';

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
    <AppBar/>
    <div className='grid grid-cols-12'>
      <div className='col-span-2'>
        <SideBar/>
      </div>
      <div className='col-span-10'>
        <VideoGrid/>
      </div>
    </div>
    </>
  )
}

export default App
