import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosExample=()=>{
 const[data,setData]=useState([])

 useEffect(()=>{
    const response=async()=>{
        const finalData=await axios.get("https://fakestoreapi.com/products")
        setData(finalData.data)
        console.log(finalData.data)
    }
    response()
 },[])
 
    return(
    <>
    {
        data.map((item)=>{
            return(
                <>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.price}</p>
                </>
            )
        })
    }
    </>
 )
}
export default AxiosExample;