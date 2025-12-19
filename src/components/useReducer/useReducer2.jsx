
import React, {action, useReducer, useState } from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case "INC":
            return{...state,count:state.count+action.payload};
        case 'CHANGE_NAME':
            return{...state,username:action.payload};
        case "default":
            return state
    }
}
const UseReducer2=()=>{
    const intialState={
        count:0,
        username:'ranjith'
    }


    const[currentSate,dispatch]=useReducer(reducer,intialState)
    const[name,setName]=useState("")

    const Handler=()=>{
        dispatch({
            type:"INC",
            payload:3
        })
    }

    const nameHandler=(e)=>{
        setName(e.target.value)
    }

    const ranjith=()=>{
        dispatch({
            type:"CHANGE_NAME",
            payload:name
        })
        setName("")
    }

return(<>
<p>Count:{currentSate.count}</p>
<button onClick={Handler}>Increment</button>
<p>Username :{currentSate.username}</p>
<input type="text" onChange={nameHandler} value={name}/>
<button onClick={ranjith}>Change Name</button>

</>)
}

export default UseReducer2



