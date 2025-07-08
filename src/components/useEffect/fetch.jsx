import React, { useEffect, useState } from "react";


const UseEffectFetch=()=>{
    const[data,setData]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch("https://fakestoreapi.com/products")
            const finalData=await response.json()
            setData(finalData)
            console.log(finalData)
        }
        fetchData()
    },[])

    return(
        <>
           {
                data.map((item)=>{{
                    return(
                        <>
                        <p>{item.id}</p>
                        <p>{item.title}</p>
                        </>
                    )
                }})
            }

        </>
    )


}
export default UseEffectFetch
