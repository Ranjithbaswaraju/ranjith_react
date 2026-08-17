// import React, { useCallback, useState } from "react";
// import Child from "./Child";

// const Parent=()=>{
//     const[data,setData]=useState("Hi Ranjith")

//     const handler=useCallback(()=>{
//         setData("Bye Ranjith")
//     },[])

//     return(
//         <>
//         <h1>Parent Component</h1>
//         <p>{data}</p>
//         <Child callback={handler}/>
//         </>
//     )
// }
// export default Parent



// Increasig count using the Callback


// import React, { useCallback, useState } from "react";
// import Child from "./Child";

// const Parent=()=>{
//     const[count,setCount]=useState(0)

//     const handlerIncrease=useCallback(()=>{
//         setCount(count+1)
//     },[count])

//     return(
//         <>
//         <h1>Parent Component</h1>
//         <Child callBack={handlerIncrease}/>
//         <p>Count:{count}</p>
//         </>
//     )

// }
// export default Parent



// LIGHT THEME USING CALLBACK

// import React, { useCallback, useState } from "react";
// import Child from "./Child";
// const Parent=()=>{
//     const[theme,setTheme]=useState("light")

//     const ThemeHandler=useCallback(()=>{
//         setTheme((prev)=>prev === "light" ? "dark" : "light")
//     },[])

//     return(
//         <div
//         style={{backgroundColor:theme ==="light" ? "white" : "black",
//             color:theme==="light" ? "black" : "white",
//             height: "100vh",width:"100vw"
//         }}>
//         <h1>Parent Component</h1>
//         <Child callBack={ThemeHandler}/>
//         </div>
//     )

// }
// export default Parent

// Wihtout using the CHild COMPOENNT
import React, { useCallback, useState } from "react";

const Parent=()=>{

    const[theme,setTheme]=useState("light")

    const changeTheme=useCallback(()=>{
        setTheme((prev)=>prev === "light" ? "dark" : "light" )
    },[])
    return(
        <div style={{backgroundColor:theme=== "light" ? "white" : "black",
            color:theme === "light" ? "black" :"light",
            height:"100vh",
            width:"100vw"
        }}>
            <p>Parent Component</p>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}
export default Parent

