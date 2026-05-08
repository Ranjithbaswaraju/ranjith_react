// import axios from "axios";
// import React, { lazy, Suspense, useEffect, useState } from "react";
// // import BasicExample from "./CardComponent";
// const BasicExample=lazy(()=>(import("./CardComponent")))

// const PaginationComponent = () => {
//   const [data, setData] = useState([]);
//   const[currentPage,setCurrentPage]=useState(1)

//     let productsPerPage=3
//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         const finalData = await axios.get("https://fakestoreapi.com/products");
//         console.log(finalData);
//         setData(finalData.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchApi();
//   },[]);
//   const lastIndex=currentPage*productsPerPage;
//   const firstIndex=lastIndex-productsPerPage
//   const currentPageProducts=data.slice(firstIndex,lastIndex)
//   const totalPages=Math.ceil(data.length/productsPerPage)
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>Fake Store Products</h1>
//     <Suspense fallback={<h1 style={{textAlign:"center"}}>Loading Products Please Wait...</h1>}>

//     <div
//         style={{
//           width: "100vw",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           alignContent: "center",
//           gap: "20px",
//         }}
//       >
//         {currentPageProducts.map((item) => {
//           return (
//             <BasicExample
//               key={item.id}
//               title={item.title}
//               category={item.category}
//               image={item.image}
//               price={item.price}
//               description={item.description}
//             />
//           );
//         })}
//       </div>
//     </Suspense>

//       <div style={{textAlign: "center", marginTop: "20px" }}>
//             {[...Array(totalPages)].map((_,index)=>{
//                 return(
//                     <button
//                     key={index}
//                     onClick={()=>setCurrentPage(index+1)}
//                     style={{
//                         margin:"5px",
//                         padding:"10px",
//                         backgroundColor:currentPage === index + 1 ? "black" : "gray",
//                         color:'white',
//                         border:'none',
//                         cursor:'pointer'
//                     }}>
//                         {index+1}
//                     </button>
//                 )
//             })}
//         </div>
//     </>
//   );
// };
// export default PaginationComponent;

// choose send one

import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";
const BasicExample = lazy(() => import("./CardComponent"));
const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let productsPerPage = 3;
  //   {API Calling}
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const finalData = await axios.get("https://fakestoreapi.com/products");
        setData(finalData.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);
  // Pagination Logic
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentPageProducts = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / productsPerPage);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fake Store Products</h1>
      {/* Products */}
      <Suspense fallback={<h1 style={{ textAlign: "center" }}>Fake Store Products Loading...</h1>}>
        <div
          style={{
            width: "100vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            gap: "20px",
          }}
        >
          {currentPageProducts.map((item) => {
            return (
              <BasicExample
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                price={item.price}
                description={item.description}
              />
            );
          })}
        </div>
      </Suspense>
      {/* Pagination Buttons */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage == 1}
          style={{
            margin: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {"<<"}
        </button>
        <span style={{ margin: "10px", fontSize: "20px" }}>{currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            margin: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          {">>"}
        </button>
      </div>
    </>
  );
};

export default PaginationComponent;
