import React, { act, useReducer, useState } from "react";


const reducer=(state,action)=>{
    switch(action.type){
        case 'Add':
            return {...state,todos:[...state.todos,action.payload]}
        case "Del":
            return {...state,todos:state.todos.filter((_,index)=>index!=action.payload)}
    }
}
const AddUseReducer = () => {
  const initialState = {
    todos: [],
  };
  const [name,setName]=useState("")

  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch({
        type:"Add",
        payload:name
    })
  }
  const deleteHandler=(index)=>{
    dispatch({
        type:"Del",
        payload:index
    })
  }
  const [currentSate, dispatch] = useReducer(reducer, initialState);
  return <>
  <input type="text" onChange={(e)=>setName(e.target.value)}/>
  <button onClick={submitHandler}>ADD</button>
<ol>
    {
    currentSate.todos.map((item,index)=>{
        return(
            <>
            <li>{item}</li>
            <button onClick={()=>deleteHandler(index)}>Delete</button>
            </>
        ) 
    }) 
  }
</ol> 
  </>;
};
export default AddUseReducer;

