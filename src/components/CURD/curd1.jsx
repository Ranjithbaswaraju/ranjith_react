import React, { useState } from "react";

const CurdAddDel=()=>{
  const[name,setName]=useState("")
  const[todos,setTodos]=useState([])

  const ranjith=(e)=>{
    e.preventDefault()

    if(name){
      setTodos([...todos,name])
      setName("")
    }
    else{
      setName("")
    }
  }

  const deleteHandler=(ind)=>{
    const updatedTodo=todos.filter((_,index)=>index!=ind)
    setTodos(updatedTodo)
  }

  return(
    <>
   
    <form onSubmit={ranjith}>

      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button type="submit">Add Todo</button>
      <ol>
      {
        todos?.map((item,index)=>{
          return(
            <>
            <li>{item}</li>
            <button onClick={()=>deleteHandler(index)}>Delete</button>
            </>
          )
        })
      }
      </ol>
    </form>
    
    </>
  )
}
export default CurdAddDel