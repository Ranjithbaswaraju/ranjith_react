import React from "react";
const Child=({handler})=>{
    return(
        <>
        <p>Child Component</p>
        <button onClick={handler}>Click Here</button>
        
        </>
    )
}
export default Child;