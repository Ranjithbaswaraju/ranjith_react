import React, { useState } from "react";
const FetchData=()=>{
    const[data,setData]=useState([])
    const HandleFetch=async()=>{
        const response=await fetch("https://fakestoreapi.com/products")
        const FinalData=await response.json()
        setData(FinalData)
        console.log(FinalData)
    }
    return(
        <>
        <button onClick={()=>HandleFetch()}>ShowData</button>
            {
                data.map((item)=>{
                    return(
                        <>
                        <p>{item.id}</p>
                        <p>{item.title}</p>
                        </>
                    )
                })
            }
        </>
    )
}
export default FetchData;

