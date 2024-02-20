import {useState,useEffect} from "react";


function useTodos(){
    const [todos, setTodos] = useState([]);
  const [int,setInt]=useState(false);

  useEffect(()=>{
    
      console.log("Hi");
      fetch("https://sum-server.100xdevs.com/todos")
      .then((res)=>{
        return res.json();
      }).then((res)=>{
        setTodos(res["todos"]);
      })
  
  },[int]);

  useEffect(()=>{
    setInterval(()=>{
      setInt((prev)=>{
        return !prev;
      })
    },10000)
  },[]);

  return todos;
}

export default useTodos;