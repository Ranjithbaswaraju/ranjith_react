import React, { useState } from "react";


const ControlledComponent=()=>{
    const[data,setData]=useState()

    const changeHandler=(e)=>{
        setData(e.target.value)
    }
    
    return(
        <>
        <input type="text" onChange={changeHandler} value={data}/>
        </>
    )
}
export default ControlledComponent