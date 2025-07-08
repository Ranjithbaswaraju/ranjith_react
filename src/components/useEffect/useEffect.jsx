import React, { use, useEffect, useState } from "react";

const UseEffectExample=()=>{
    const[count,setCount]=useState(0)

    useEffect(()=>{
        console.log(`The count is now:${count}`)
    },[count])
    

    return(
        <>
        <p>Count :{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}
export default UseEffectExample;