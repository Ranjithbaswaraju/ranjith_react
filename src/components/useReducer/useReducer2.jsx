
// import React, { act, action, useReducer, useState } from "react";

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "INC":
//             return{...state,count:state.count+action.payload};
//         case 'CHANGE_NAME':
//             return{...state,username:action.payload};
//         case "default":
//             return state
//     }
// }
// const UseReducer2=()=>{
//     const intialState={
//         count:0,
//         username:'ranjith'
//     }


//     const[currentSate,dispatch]=useReducer(reducer,intialState)
//     const[name,setName]=useState("")

//     const Handler=()=>{
//         dispatch({
//             type:"INC",
//             payload:3
//         })
//     }

//     const nameHandler=(e)=>{
//         setName(e.target.value)
//     }

//     const ranjith=()=>{
//         dispatch({
//             type:"CHANGE_NAME",
//             payload:name
//         })
//         setName("")
//     }

// return(<>
// <p>Count:{currentSate.count}</p>
// <button onClick={Handler}>Increment</button>
// <p>Username :{currentSate.username}</p>
// <input type="text" onChange={nameHandler} value={name}/>
// <button onClick={ranjith}>Change Name</button>

// </>)
// }

// export default UseReducer2


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
