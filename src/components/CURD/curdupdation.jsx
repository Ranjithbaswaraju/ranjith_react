import { useState } from "react"


const CurdUpdation=()=>{
  const[name,setName]=useState("")
  const[todos,setTodos]=useState([])
  const[selectItem,setSelectItem]=useState("")

  const addTodos=(e)=>{
    e.preventDefault()
   if(name){
     setTodos([...todos,name])
    setName("")
   }
   else{
    alert("Please enter name")
   }
  }

  const deleteHandler=(ind)=>{
    const deletedTodo=todos.filter((_,index)=>index!=ind)
    setTodos(deletedTodo)
  }

  const updateHandler=(ind)=>{
    setSelectItem(ind)
    const updated=todos[ind]
    setName(updated)
  } 

  const updatingTodo=(e)=>{
    e.preventDefault()
    const todosCopy=[...todos]
    todosCopy[selectItem]=name
    setTodos(todosCopy)
    setName("");
  setSelectItem("");
  }
  return(
  <>
  <form onSubmit={selectItem !== "" ? updatingTodo : addTodos}>
  <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
  <button type="submit">{selectItem !== "" ? "Update Todo" : "Add Todo"}</button>
  </form>
  <ol>
  {
    todos?.map((item,index)=>{
      return(
        <>
        <li>{item}</li>
        <button onClick={()=>deleteHandler(index)}>Delete Todo</button>
        <button onClick={()=>updateHandler(index)}>Update Todo</button>
        </>
      )
    })
  }
  </ol>
  </>)
}
export default CurdUpdation;