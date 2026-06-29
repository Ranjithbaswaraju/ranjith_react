import React, { useReducer, useState } from "react";
const reducer=(state,action)=>{
    switch(action.type){
        case 'CHANGENAME':
            return{...state,name:action.payload}
    }
}
const UseReducer2 = () => {
    const intialState={
        name:'Ranjith',
        count:0
    }
    const[currentState,dispatch]=useReducer(reducer,intialState)
    const[name,setName]=useState('')
    const handler=(e)=>{
        setName(e.target.value)
    }

    const onSumbit=()=>{
        dispatch({
            type:"CHANGENAME",
            payload:name
        })
        setName('')
    }

    return(
        <>
        <p>Your entered name is :{currentState.name}</p>
        <input type="text" onChange={handler} value={name}/>
        <button onClick={onSumbit}>Change Name</button>

        </>
    )
};
export default UseReducer2;

