import React from "react";


const Child=({onClick})=>{
        console.log("Child component rendered");
        return(
            <button onClick={onClick}>Click</button>
        )
}
export default Child