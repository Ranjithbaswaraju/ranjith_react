import axios from "axios";
import React, { useState } from "react";

const AxiosExample=()=>{
    const[data,setData]=useState([])

    const Handler=async()=>{
        const finalData=await axios.get("https://fakestoreapi.com/products")
        setData(finalData.data)
        // console.log(finalData)
    }
  

    return(
        <>
        <button onClick={Handler}>Show Data</button>
        {
            data.map((item)=>{
                return(
                    <>
                    <p key={item.id}>{item.id}</p>
                    </>
                )
            })
        }
        </>
        
    )
}
export default AxiosExample;