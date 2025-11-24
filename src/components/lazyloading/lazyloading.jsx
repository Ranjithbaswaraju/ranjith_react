import React, { Suspense } from "react";
import { lazy } from "react";


const Component1=lazy(()=>
    import("../contextapi/contextapi")
)
const Component2=lazy(()=>
    import("../useEffect/fetch")
)

const Ranjith=()=>{
    return(
        <>
        <h1>Lazy Loading....</h1>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Component2/>
        </Suspense>
        <Suspense fallback={<h4>Loading...</h4>}>
            <Component1/>
        </Suspense>
        </>
    )
}
export default Ranjith;