
import React, { lazy, Suspense } from "react";
const Component1=lazy(()=>
  import("../useEffect/fetch")
)
const Component2=lazy(()=>
import("../contextapi/contextapi")
)

const Ranjith=()=>{
  return(
    <>
    <Suspense fallback={<div>....Loading1</div>}><Component1/></Suspense>
    <Suspense fallback={<div>...Loading2</div>}><Component2/></Suspense>
    </>
  )
}
export default Ranjith;