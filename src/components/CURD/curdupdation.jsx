// import React, { useState } from "react";

// const CurdUpdation=()=>{

//     const[input,setInput]=useState("")
//     const[todos,setTodos]=useState([])
//     const[selectItem,setSelectItem]=useState(null)

//     const inputHandler=(e)=>{
//         setInput(e.target.value)
//     }
//     const addHandler=(e)=>{
//         e.preventDefault()

//         if(input){
//             setTodos([...todos,input])
//         }
//         setInput("")
//     }

//     const removeHandler=(ind)=>{
//         const updatedTodo=todos.filter((item,index)=>index!=ind)
//         setTodos(updatedTodo)
//     }

//     const updateHandler=(ind)=>{
//         setSelectItem(ind)
//         const inputValue=todos[ind]
//         setInput(inputValue)
//     }

//     const updatedTodo=(e)=>{
//         e.preventDefault()

//         const todosCopy=[...todos]

//         todosCopy[selectItem]=input

//         setTodos(todosCopy)
//         setSelectItem('')
//         setInput("")

//     }

//     return(
//         <>
//         <form onSubmit={selectItem || selectItem ===0 ? updatedTodo : addHandler}>
//             <input type="text" onChange={inputHandler} value={input}/>
//             <button type="submit">{selectItem || selectItem ===0 ? "updatedTodo" : "ADD_TODO"}</button>
//             <ol>
//                 {
//                     todos?.map((item,index)=>{
//                         return(
//                             <>
//                             <li>{item}</li>
//                             <button onClick={()=>removeHandler(index)}>Delete Todo</button>
//                             <button onClick={()=>updateHandler(index)}>Update Todo</button>
//                             </>
//                         )
//                     })
//                 }
//             </ol>
//         </form>
//         </>
//     )

// }
// export default CurdUpdation

// import React, { useState } from "react";

// const CurdUpdation = () => {
//   const [input, setInput] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [selectItem, setSelectItem] = useState("");

//   const inputHandler = (e) => {
//     setInput(e.target.value);
//   };

//   const addHandler = (e) => {
//     e.preventDefault();

//     if (input) {
//       setTodos([...todos, input]);
//     }
//     setInput("");
//   };

//   const removeHandler = (ind) => {
//     const updatedTodo = todos.filter((_, index) => index !== ind);
//     setTodos(updatedTodo);
//   };

//   const updateHandler = (ind) => {
//     setSelectItem(ind);
//     const inputValue = todos[ind];
//     setInput(inputValue);
//   };

//   const updatedTodo = (e) => {
//     e.preventDefault();

//     const todosCopy = [...todos];
//     todosCopy[selectItem] = input;

//     setTodos(todosCopy);
//     setInput("");
//     setSelectItem("");
//   };

//   return (
//     <>
//       <form onSubmit={selectItem || selectItem === 0 ? updatedTodo : addHandler}>
//         <input type="text" onChange={inputHandler} value={input} />
//         <button type="submit">{selectItem || selectItem === 0 ? "Update Todo" : "Add Todo"}</button>
//       </form>
//       <ol>
//         {todos?.map((item, index) => {
//           return (
//             <li key={index}>
//               {item}{" "}
//               <button onClick={() => removeHandler(index)}>Delete Todo</button>{" "}
//               <button onClick={() => updateHandler(index)}>Update Todo</button>
//             </li>
//           );
//         })}
//       </ol>
//     </>
//   );
// };

// export default CurdUpdation;

import React, { useState } from "react";
const CurdUpdation = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectItem, setSelectItem] = useState("");

  const changehandler = (e) => {
    setName(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    if (name) {
      setTodos([...todos, name]);
    }
    setName("");
  };
  const remove = (ind) => {
    const updatedTodo = todos.filter((item, index) => index != ind);
    setTodos(updatedTodo);
  };

  const update = (ind) => {
    setSelectItem(ind);
    const updated = todos[ind];

    setName(updated);
  };

  const updatingTodo = (e) => {
    e.preventDefault();
    const todosCopy = [...todos];
    todosCopy[selectItem] = name;
    setTodos(todosCopy);
    setSelectItem("");
    setName("");
  };

  return (
    <>
      <form onSubmit={selectItem || selectItem === 0 ? updatingTodo : add}>
        <input value={name} onChange={changehandler} />

        <button type="submit">
          {selectItem || selectItem === 0 ? "Update Todo" : "Add Todo"}
        </button>
      </form>
      <ol>
        {todos?.map((item, index) => {
          return (
            <>
              <li>{item}</li>
              <button onClick={() => remove(index)}>Delete</button>
              <button onClick={() => update(index)}>Update Todo</button>
            </>
          );
        })}
      </ol>
    </>
  );
};
export default CurdUpdation;
