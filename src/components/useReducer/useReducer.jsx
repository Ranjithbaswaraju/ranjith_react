import React, { useReducer } from "react";

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT_COUNT":
            return{...state,count:state.count+1}
        case "DECREMENT_COUNT":
            return{...state,count:state.count-1}
        default:
            return state;
    }
}
const UseReducer1 = () => {

    const intialState={
        count:0
    }

    const IncrementHandler=()=>{
        dispatch({
            type:"INCREMENT_COUNT"
        })
    }

    const DecrementHandler=()=>{
        dispatch({
            type:'DECREMENT_COUNT'
        })
    }

    const[currentSate,dispatch]=useReducer(reducer,intialState)
    return(
        <>
        <h1>Count :{currentSate.count}</h1>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
        </>
    )
};
export default UseReducer1