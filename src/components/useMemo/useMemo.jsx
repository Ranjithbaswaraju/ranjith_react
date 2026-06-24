import React,{useState,useMemo} from "react";

const UseMemoExample=()=>{
const[riceQty,setRiceQty]=useState(0)
const[milkQty,setMilkQty]=useState(0)

const riceHandler=()=>{
    setRiceQty(riceQty+1)
}

const milkHandler=()=>{
    setMilkQty(milkQty+1)
}

const ricePriceCalculation=useMemo(()=>{
    console.log("--->Rice price Calculation<---")
    let riceprice=50
    return riceprice*riceQty
    
},[riceQty])

const milkPriceCalculation=useMemo(()=>{
    console.log("--->Milk Calculation<----")
    let milkprice=100
    return milkprice*milkQty
    
},[milkQty])

return(<>
<p>Rice Quantity :{riceQty} ---- price :{ricePriceCalculation}</p>
<p>Milk Quantity :{milkQty} ---- price :{milkPriceCalculation}</p>
<button onClick={riceHandler}>Rice Calculation</button>
<button onClick={milkHandler}>Milk Calculation</button>
</>)
}
export default UseMemoExample


