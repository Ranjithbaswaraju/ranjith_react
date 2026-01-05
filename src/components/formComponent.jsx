// import React, { useState } from "react";
// import Child from "./child";
// const Parent=()=>{
// const [name,setName]=useState("")
// return(
//     <>
//     <div>
//         <input type="text"
//         value={name}
//         onChange={(e)=>setName(e.target.value)}/>
//     </div>
//     <Child data={name}/>
//     </>
// )
// }
// export default Parent;


// stateUplifiting example

import React, { useState } from "react";
import Child from "./child";

const Parent=()=>{
const [name,setName]=useState("")

return(
    <>
    <Child setName={setName}/>
    <p>Parent recives :{name}</p>
    
    </>
)
}
export default Parent