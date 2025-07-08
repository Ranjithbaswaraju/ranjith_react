import React, { useState } from "react";

const FirstProgram =()=>{
    const[count,setCount]=useState(10)

    const IncrementHandler=()=>{
        setCount(count+1)
    }
    const DecrementHandler=()=>{
        if(count<=0){
            alert("count can't be negative")
        }else
        {
                    setCount(count-1)

        }
    }
    const ResetHandler=()=>{
        
        
            setCount(0)
        
    }

    return(
        <>
        <p>Count : {count}</p>
        <button onClick={()=>IncrementHandler()}>Increment</button>
        <button onClick={()=>DecrementHandler()}>Decrement</button>
        <button onClick={()=>ResetHandler()}>Reset</button>


        </>
    )
}
export default FirstProgram;