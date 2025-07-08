import React, { useCallback, useState } from "react";
import Child from "./child";


const UseCallbackExample=()=>{
    const[count,setCount]=useState(0)
    const handleClick=useCallback(()=>{
        console.log("Button clicked")
    },[])

    return(
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <Child onClick={handleClick}/>
        </>
    )
}
export default UseCallbackExample