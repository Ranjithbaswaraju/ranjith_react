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


const messageContext=createContext()
const ContextApi=()=>{
    const message='Hello World';
  return(
      <messageContext.Provider value={message}>
        <p>App</p>
        <ChildComponent/>
    </messageContext.Provider>
  )
}
const ChildComponent=()=>{
    const message=useContext(messageContext)
    return(
        <>
        <h3>{message}</h3>
        </>
    )
}
export default ContextApi;


