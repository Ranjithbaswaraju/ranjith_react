// import React, { useMemo, useState } from "react";


// const UseMemoExample=()=>{
//     const[riceQty,setRiceQty]=useState(0)
//     const[milkQty,setMilkQty]=useState(0)

//     const milkPriceCalculation=useMemo(()=>{
//         console.log("<<<<the milk calucaltion>>>")

//         const price=50
//         return price*milkQty
//     },[milkQty])

//     const ricePriceCalculation=useMemo(()=>{
//         console.log("<<<<the rice calucaltion>>>")
//         const price=100
//         return price*riceQty
//     },[riceQty])

//     const riceHandler=()=>{
//         setRiceQty(riceQty+1)
//     }
//     const milkHandler=()=>{
//         setMilkQty(milkQty+1)
//     }

//     return(
//         <>
//         <p>riceQty:{riceQty}-- price-{ricePriceCalculation}</p>
//         <p>milkQty:{milkQty} -- price-{milkPriceCalculation}</p>
//         <button onClick={riceHandler}>Rice</button>
//         <button onClick={milkHandler}>Milk</button>
//         </>
//     )
// }
// export default UseMemoExample

import React, { useMemo, useState } from "react";

// const UseMemoExample=()=>{
//     const[riceQty,setRiceQty]=useState(0)
//     const[milkQty,setMilkQty]=useState(0)

//     const RiceHandler=()=>{
//         setRiceQty(riceQty+1)
//     }
//     const MilkHandler=()=>{
//         setMilkQty(milkQty+1)
//     }

//     const ricePriceCalculation=useMemo(()=>{
//         console.log('<<<Rice price calculation>>>')
//         const riceprice=50
//         return riceprice*riceQty
//     },[riceQty])

//     const milkPriceCalculation=useMemo(()=>{
//         console.log('<<<Milk price calculation>>>')
//         const milkprice=100
//         return milkprice*milkQty
//     },[milkQty])  
//     return(
//         <>
//         <p>Milk Qty --{milkQty} --price --{milkPriceCalculation}</p>
//         <p>Rice Qty --{riceQty} --price --{ricePriceCalculation}</p>
//         <button onClick={MilkHandler}>MILK</button>
//         <button onClick={RiceHandler}>RICE</button>
//         </>
//     )
// }
// export default UseMemoExample;


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