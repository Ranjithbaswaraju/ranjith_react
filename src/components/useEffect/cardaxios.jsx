// import axios from "axios";
// import React, { useState } from "react";
// import BasicExample from "../useState/cardComponent";


// const CardFake=()=>{
//     const[data,setData]=useState([])

//     const FetchData=async()=>{
//         const finalData=await axios.get("https://fakestoreapi.com/products")
//         setData(finalData.data)
//         console.log(finalData.data)
//     }
//     FetchData()

//     return(
//         <>
//         <h1 style={{textAlign:'center'}}>FakeStore Products</h1>
//         <div style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
            
//         {
//             data.map((item)=>{
                
//                 return(
//                     <>
//                     <BasicExample title={item.title}
//                     src={item.image}
//                     price={item.price}
//                     category={item.category}
//                     description={item.description}
                    
                    
//                     />
//                     </>
//                 )
//             })
//         }
//         </div>
//         </>
//     )
// }
// export default CardFake



import axios from "axios";
import React, { useState } from "react";
import BasicExample from '../useState/cardComponent'
const  CardFake=()=>{
    const[data,setData]=useState([])

    const FetchData=async()=>{
        try{
            const finalData=await axios.get("https://fakestoreapi.com/products")
            console.log(finalData.data)
            setData(finalData.data)
        }
        catch(err){
            console.log(err)
        }
    }
    FetchData()

    return(

        <>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px'}}>
            {
            data.map((item)=>{
                return(
                    <>
                    <BasicExample
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    description={item.description}
                    
                    />
                    </>
                )
            })
        }
        </div>
        
        </>
    )
}
export default CardFake;