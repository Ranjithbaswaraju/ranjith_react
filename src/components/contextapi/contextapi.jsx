


import React, { createContext, useContext } from "react";
const MessageContext=createContext()

const ContextApi=()=>{
    let message='Hello Ranjith'

    return(
        <>
        <MessageContext.Provider value={message}>
            <h1>ContextApi</h1>
            <ChildComponent/>
        </MessageContext.Provider>
        </>
    )
}
const ChildComponent=()=>{
    let ranjith=useContext(MessageContext)
    return(
        <>
        <p>{ranjith}</p>
        </>
    )
}
export default ContextApi