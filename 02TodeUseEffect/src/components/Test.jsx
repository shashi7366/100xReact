import React, { useCallback,useState} from "react";


function Test(){
    const [count,setCount]=useState(0);
    const [pc,setPc]=useState(0);

    let handleClick=useCallback(()=>{
        //console.log("function got recreated")
        setCount(count+1);
    },[count]);

    return <div>
        <button onClick={()=>{
            setPc(pc+1);
        }}>Parent counter is {pc}</button>
        <Counter clickHandler={handleClick} count={count}/>
    </div>
}

let Counter=React.memo(({count,clickHandler})=>{
    console.log("child got called");
    return <div>
        <button onClick={clickHandler}>
           child counter is {count}
        </button>
    </div>
})

export default Test;