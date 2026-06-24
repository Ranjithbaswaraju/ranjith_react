// import React, { useRef, useState } from "react";


// const UseRef2=()=>{
//  const inputRef=useRef(null)
//  const[count,setCount]=useState(0)

//  const ClickHandler=()=>{
//     inputRef.current=count;
//     setCount(count+1)
//  }

//  return(
//     <>
//     <p>Previous Count :{inputRef.current}</p>
//     <p>Current Count :{count}</p>
//     <button onClick={ClickHandler}>Click Here</button>
//     </>
//  )
// }
// export default UseRef2;

import React, { useRef, useState } from "react";


const UseRef2=()=>{
   const [count,setCount]=useState(0)
   const inputRef=useRef()

   const clickHandler=()=>{
      inputRef.current=count
      setCount(count+1)
   }

   return(
      <>
      <p>Current Count :{count}</p>
      <p>Previous Count :{inputRef.current}</p>
      <button onClick={clickHandler}>Count </button>
      </>
   )

}
export default UseRef2;