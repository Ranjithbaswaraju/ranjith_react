import React, { useState } from "react";
import Child from "./Child";


const Parent=()=>{
    const[state,setState]=useState("Hello World")
    const handlerSet=()=>{
        setState("Bye")
    }
    return(
        <>
        <p>Hello I am Parent</p>
        <p>{state}</p>
        <Child handler={handlerSet}/>
        
        </>
    )

}
export default Parent;