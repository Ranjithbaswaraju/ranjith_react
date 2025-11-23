// import React, { useReducer, useState } from "react";
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         ...state,
//         todos: [...state.todos, action.payload],
//       };
//     case "REMOVE_TODO":
//       return {
//         ...state,
//         todos: state.todos.filter((_, index) => index != action.payload),
//       };
//   }
// }
// const AddUseReducer = () => {
//   const intialState = {
//     todos: [],
//   }
//   const [currentSate, dispatch] = useReducer(reducer, intialState);
//   const [name, setName] = useState("");

//   const enteredHandler = (e) => {
//     setName(e.target.value);
//   }
//   const handler = () => {
//     dispatch({
//       type: "ADD_TODO",
//       payload: name,
//     })
//     setName("");
//   }
//   const remove = (index) => {
//     dispatch({
//       type: "REMOVE_TODO",
//       payload: index,
//     })
//   }
//   return (
//     <>
//       <input type="text" onChange={enteredHandler} value={name} />
//       <button onClick={handler}>Add Name</button>
//       <ol>
//         {currentSate.todos.map((eachtodo, index) => {
//           return (
//             <>
//               <li>{eachtodo}</li>
//               <button onClick={() => remove(index)}>Remove</button>
//             </>
//           );
//         })}
//       </ol>
//     </>
//   );
// };
// export default AddUseReducer;


// import React, { act, useReducer, useState } from "react";


// const reducer=(state,action)=>{
//     switch(action.type){
//         case "ADD":
//             return {...state,todos:[...state.todos,action.payload]}
//         case "REMOVE":
//             return {...state,todos:state.todos.filter((_,index)=>index!==action.payload)}
//     }
// }

// const AddUseReducer=()=>{
//     const initialState={
//         todos:[]
//     }

//     const[name,setName]=useState("")

//     const[currentSate,dispatch]=useReducer(reducer,initialState)

//     const ranjith=(e)=>{
//         setName(e.target.value)
//     }

//     const baswaraju=(e)=>{
//         e.preventDefault()
//         dispatch({
//             type:"ADD",
//             payload:name
//         })
//     }

//     const remove=(index)=>{
//         dispatch({
//             type:'REMOVE',
//             payload:index
//         })
//     }

//     return(
//         <>
//         <input type='text' value={name} onChange={ranjith}/>
//         <button onClick={baswaraju}>Add_Todo</button>
//         {
//             currentSate.todos.map((item,index)=>{
//                 return(
//                     <>
//                     <li>{item}</li>
//                     <button onClick={()=>remove(index)}>DELETE</button>
//                     </>
//                 )
//             })
//         }
        
        
//         </>
//     )
// }
// export default AddUseReducer;


import React, { useReducer, useState } from "react";
import { Button } from "react-bootstrap";

const reducer=(state,action)=>{
    switch(action.type){
        case "ADD":
            return{...state,todos:[...state.todos,action.payload]}
        case 'REMOVE':
            return{...state,todos:state.todos.filter((_,index)=>index!==action.payload)}
    }
}

const AddUseReducer = () => {


    const intialState={
        todos:[]
    }
    const[currentSate,dispatch]=useReducer(reducer,intialState)
    const[name,setName]=useState('')

    const handler=(e)=>{
        setName(e.target.value)
    }

    const addHandler=(e)=>{
        e.preventDefault()
        dispatch({
            type:'ADD',
            payload:name
        })
        setName("")
    }

    const remvoeHandler=(index)=>{
        dispatch({
            type:'REMOVE',
            payload:index
        })
    }

    return(
        <>
        <input type="text" onChange={handler} value={name}/>
        <button onClick={addHandler}>Add</button>
        <ol>
        {
            currentSate.todos.map((item,index)=>{
                return(
                    <>
                    <li>{item}</li>
                    <button onClick={()=>remvoeHandler(index)}>Delete</button>
                    </>
                    
                )
            })
        }
        </ol>
        </>
    )
  
};
export default AddUseReducer;