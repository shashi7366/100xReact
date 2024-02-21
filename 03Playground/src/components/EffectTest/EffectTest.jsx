import {useEffect, useState} from "react";

function EffectTest(){

    const [count,setCount]=useState(undefined);

    useEffect(()=>{
        console.log("Hi I got called without count");
    },[]);

    useEffect(()=>{
        console.log("Hi I got called");
    },[count]);

    return <div>Hi There!</div>
}

export default EffectTest;