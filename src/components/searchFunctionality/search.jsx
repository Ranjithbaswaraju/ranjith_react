import React, { useMemo, useState } from "react";

const SearchFunctionality = ()=>{
  const items=["apple","banana","mango","grapes"]

  const[search,setSearch]=useState("")

  const handler=(e)=>{
    setSearch(e.target.value)
  }

  const newData=useMemo(()=>{
    return items.filter((each)=>
    each.toLowerCase().includes(search.toLowerCase()))
  })
  

  return(
    <>
    <input type="text" value={search} onChange={handler}/>
    {
      newData.length===0 ? (<p style={{color:'red'}}>No items found</p>) :
      (
        newData.map((item)=>{
          return(
            <ul>
              <li>{item}</li>
            </ul>
          )
        })
      )
    }
    </>
  )
}
export default SearchFunctionality
