



// import React, { useState } from "react";
// const CurdAddDel = () => {
//   const[name,setName]=useState('')
//   const[todos,setTodos]=useState([])
//   const handler=(e)=>{
//     setName(e.target.value)
//   }

//   const ranjith=(e)=>{
//     e.preventDefault()
//     if(name){
//       setTodos([...todos,name])
    
//     }
//     setName('')
//   }
//   const remove=(ind)=>{
//     const updatedTodo=todos.filter((item,index)=>index!=ind)
//     setTodos(updatedTodo)
//   }
//     return(
//       <>
//       <form onSubmit={ranjith}>
//         <input value={name} onChange={handler}/>
//         <button type="submit">Add</button>
//         <ol>
//           {
//           todos?.map((item,index)=>{
//             return(
//               <>
//               <li>{item}</li>
//               <button onClick={()=>remove(index)}>Delete Todo</button>
//               </>
//             )
//           })
//           }
//           </ol>
//       </form>
//       </>
//     )
// }
// export default CurdAddDel;



import React, { useState } from "react";


const CurdAddDel=()=>{
  const[name,setName]=useState("")
  const[todos,setTodos]=useState([])

const ranjith=(e)=>{
  e.preventDefault()
  if(name){
    setTodos([...todos,name])
  }
  setName("")


}

const deleteTodo=(ind)=>{
  const updateTodo=todos.filter((_,index)=>index!=ind)
  setTodos(updateTodo)
}

  return(
    <>
    <form onSubmit={ranjith}>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <button type="submit">Add Todo</button>
    {
      todos?.map((item,index)=>{
        return(
          <>
          <p>{item}</p>
          <button onClick={()=>deleteTodo(index)}>Delete</button>
          </>
        )
      })
    }

    </form>
    
    </>
  )
}

export default CurdAddDel;