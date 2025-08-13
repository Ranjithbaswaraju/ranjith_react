// import React, { useRef } from "react";

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

import React, { useRef } from "react";


const UncontolledComponent=()=>{

    const inputRef=useRef("")
    const Handler=(e)=>{
        e.preventDefault()
        alert(`Entered Name is : `+inputRef.current.value)

    }
    return(
        <>

       <form onSubmit={Handler}>
         <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
       </form>
        </>
    )
}
export default UncontolledComponent;