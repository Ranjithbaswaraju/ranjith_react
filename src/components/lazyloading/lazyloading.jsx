// import React, { Suspense } from "react";
// import { lazy } from "react";

// const Component1=lazy(()=>
//     import("../contextapi/contextapi")
// )
// const Component2=lazy(()=>
//     import("../useEffect/fetch")
// )

// const Ranjith=()=>{
//     return(
//         <>
//         <h1>Lazy Loading....</h1>
//         <Suspense fallback={<h1>Loading...</h1>}>
//             <Component2/>
//         </Suspense>
//         <Suspense fallback={<h4>Loading...</h4>}>
//             <Component1/>
//         </Suspense>
//         </>
//     )
// }
// export default Ranjith;

// import React, { lazy, Suspense } from "react";

// const Component1 = lazy(() => 
//   import("../contextapi/contextapi")
// );

// const Component2 = lazy(() => 
//   import("../useEffect/axios")
// );

// const Ranjith = () => {
//   return (
//     <>
//       <h1>Lazy loading.......</h1>

//       <Suspense fallback={<h1>loading.....</h1>}>
//         <Component1 />
//       </Suspense>

//       <Suspense fallback={<h1>loading....</h1>}>
//         <Component2 />
//       </Suspense>
//     </>
//   );
// };
// export default Ranjith;



import React, { lazy, Suspense } from "react";

const Component1=lazy(()=>
    import("../useEffect/axios")
  )
  const Component2=lazy(()=>
    import("../contextapi/contextapi")
  )
const Ranjith=()=>{

  return(
    <>
    <Suspense fallback={<h1>Loading......</h1>}>
      <Component1/>
    </Suspense>

    <Suspense fallback={<h2>Please wait the page is loading....</h2>}>
      <Component2/>
    </Suspense>
    </>
  )
}
export default Ranjith;