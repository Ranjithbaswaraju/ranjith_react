import React, { useRef } from "react";


const UncontolledComponent=()=>{
    const inputRef=useRef(null)

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Entered name is :` +inputRef.current.value)
    }

    return(
        <>
        
        <form onSubmit={submitHandler}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>    
        </form></>
    )
}
export default UncontolledComponent