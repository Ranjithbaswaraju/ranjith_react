// import React, { useRef } from "react";

import { useRef } from "react"

// const UncontolledComponent=()=>{
//     const inputRef=useRef(null)

//     const submitHandler=(e)=>{
//         e.preventDefault()
//         alert(`Entered name is :` +inputRef.current.value)
//     }
//     return(
//         <>
        
//         <form onSubmit={submitHandler}>
//         <input type="text" ref={inputRef} />
//         <button type="submit">Submit</button>    
//         </form></>
//     )
// }
// export default UncontolledComponent


const UncontolledComponent=()=>{
    const inputRef=useRef(null)

    const ranjith=(e)=>{
        e.preventDefault()
        alert(`Entered Name is : `+inputRef.current.value)
    }


    return(
        <>
       <form onSubmit={ranjith}>
        <input ref={inputRef} type="text" placeholder="Enter Name"/>
        <button type="submit">Submit</button>
       </form>

        </>
    )
}
export default UncontolledComponent

