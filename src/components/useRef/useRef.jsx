import React, { useRef } from "react";

const UseRefExample=()=>{
    const inputRef=useRef(null)

    const handleClick=()=>{
        inputRef.current.focus()
    }

    return(
        <>
        <input ref={inputRef} type="text" placeholder="Enter Your Name"/>
        <button onClick={handleClick}>Focus the Input</button>
        </>
    )
}
export default UseRefExample


