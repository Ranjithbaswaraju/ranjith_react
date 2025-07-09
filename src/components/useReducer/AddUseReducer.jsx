import React, { useReducer, useState } from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        case "REMOVE_TODO":
            return{
                ...state,
                todos:state.todos.filter((_,index)=>index!=action.payload)            }
    }
}

const AddUseReducer = () => {
    const intialState={
        todos:[]
    }

    const[currentSate,dispatch]=useReducer(reducer,intialState)
    const[name,setName]=useState("")

    const enteredHandler=(e)=>{
        setName(e.target.value)
    }

    const handler=()=>{
        dispatch({
            type:'ADD_TODO',
            payload:name
        })
        setName('')
    }

    const remove=(index)=>{
        dispatch({
            type:"REMOVE_TODO",
            payload:index
        })
    }
    return (
        <>
        <input type="text" onChange={enteredHandler} value={name}/>
        <button onClick={handler}>Add Name</button>
        <ol>
            {
            currentSate.todos.map((eachtodo,index)=>{
                return(
                    <>

                    <li>{eachtodo}</li>
                    <button onClick={()=>remove(index)}>Remove</button>
                    </>
                )
            })
        }
        </ol>
        </>
    )
}

export default AddUseReducer