import React, { useState } from "react";
const CurdAddDel=()=>{
  const[name,setName]=useState()
  const[todos,setTodos]=useState([])
  const ranjith=(e)=>{
    e.preventDefault()
    setTodos([...todos,name])
    setName("")
  }
const deleteHandler=(ind)=>{
  const deleteTodos=todos.filter((_,index)=>index!=ind)
  setTodos(deleteTodos)
}
  return(
  
  <>
  <form onSubmit={ranjith}>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <button type="submit">Add</button>
  </form>
<ol>
  {
    todos?.map((item,index)=>{
      return(
      <li>
      {item}
      <button onClick={()=>deleteHandler(index)}>Delete</button>
      </li>)
    })
  }
</ol>
  </>)
}
export default CurdAddDel