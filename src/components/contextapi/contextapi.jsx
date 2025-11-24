// import React, { createContext, useContext } from "react";

// const messageContext=createContext();
// const ContextApi=()=>{
//     const message='Hello World I am ContextApi'
//     return(
//         <messageContext.Provider value={message}>
//             <h1>ContextApi</h1>
//             <ChildComponent/>
//         </messageContext.Provider>
//     )
// }

// const ChildComponent=()=>{
//     let message1=useContext(messageContext);
//     return(
//         <>
//         <h2>ChildComponent</h2>
//         <h4>{message1}</h4>
//         </>
//     )
// }
// export default ContextApi;


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