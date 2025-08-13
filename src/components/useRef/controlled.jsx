import React, { useState } from "react";


const ControlledComponent=()=>{
    const[name,setName]=useState('')


    const ClickHandler=(e)=>{
        setName(e.target.value)
    }

    return(
        <>
        <input type="text" value={name} onChange={ClickHandler}/>
        </>
    )
}
export default ControlledComponent

