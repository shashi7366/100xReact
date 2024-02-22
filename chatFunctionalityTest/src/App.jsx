import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingPage from './pages/loadingPage/LoadingPage';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
  
    fetch("https://shiny-palm-tree-gvjxxvgvrp4hw6j5-5000.app.github.dev/api/msg/allmsg",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({
        to:"65c31c4bdd48ca16817f2f13",
        from:"65c474e4c011f27c7ce73255"
      })
    }).then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      setMessages(data.result);
    })

  },[]);

  let prev;

  return (
   <LoadingPage/>
  )
}

export default App
