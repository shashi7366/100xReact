import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useSetRecoilState,useRecoilValue} from 'recoil'
import { countAtom, evenSelector,allTodosAtom} from './store/atoms/countAtom'
import OtpValidator from './components/OtpValidator/OtpValidator';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <RecoilRoot>
    <Todos/>
    </RecoilRoot>
   
    </>
  )
}

function Count(){
console.log("count rendered");
  return <>
  <CountRenderer/>
  <ButtonRenderer/>
  <Checker/>
  </>
}

function CountRenderer(){
  console.log("countRenderer rendered");
  const count=useRecoilValue(countAtom);
  return<div>{count}</div>
}

function ButtonRenderer(){
  console.log("button rendered");
  const setCount=useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>{
      setCount((c)=>{
        return c+1;
      })
    }}>increment</button>
    <button onClick={()=>{
      setCount((c)=>{
        return c-1;
      })
    }}>decrement</button>
  </div>
}

function Checker(){
  const count=useRecoilValue(evenSelector);

  return <div>{count?"count is even":null}</div>
}


function Todos(){
  const posts=useRecoilValue(allTodosAtom);

  return <Suspense fallback={"loading...."}>{
    posts.map((post)=>{
      return <div key={post.id}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    })
}</Suspense>
}

export default App
