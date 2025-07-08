import React, { useMemo, useState } from "react";


const UseMemoExample=()=>{
    const[riceQty,setRiceQty]=useState(0)
    const[milkQty,setMilkQty]=useState(0)

    const milkPriceCalculation=useMemo(()=>{
        console.log("<<<<the milk calucaltion>>>")

        const price=50
        return price*milkQty
    },[milkQty])

    const ricePriceCalculation=useMemo(()=>{
        console.log("<<<<the rice calucaltion>>>")
        const price=100
        return price*riceQty
    },[riceQty])

    const riceHandler=()=>{
        setRiceQty(riceQty+1)
    }
    const milkHandler=()=>{
        setMilkQty(milkQty+1)
    }

    return(
        <>
        <p>riceQty:{riceQty}-- price-{ricePriceCalculation}</p>
        <p>milkQty:{milkQty} -- price-{milkPriceCalculation}</p>
        <button onClick={riceHandler}>Rice</button>
        <button onClick={milkHandler}>Milk</button>
        </>
    )
}
export default UseMemoExample