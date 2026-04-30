// // import axios from "axios";
// // import React, { useEffect, useMemo, useState } from "react";
// // import BasicExample from "../useState/cardComponent";

// // const AxiosExample = () => {
// //   const [data, setData] = useState([]);
// //   const [search, setSearch] = useState("");

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const finalData = await axios.get("https://dummyjson.com/products");
// //         console.log(finalData.data.products);
// //         setData(finalData.data.products);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     fetchData();
// //   }, []);

// //   const filterData = useMemo(() => {
// //     return data.filter((item) => {
// //       return item.title.toLowerCase().includes(search.toLowerCase());
// //     });
// //   });

// //   const handler = (e) => {
// //     setSearch(e.target.value);
// //   };

// //   return (
// //     <>
// //       <div style={{ textAlign: "center" }}>
// //         <h1>Search Products....</h1>
// //         <input
// //           type="text"
// //           value={search}
// //           onChange={handler}
// //           style={{ marginBottom: "20px" }}
// //         />
// //       </div>
// //       <div
// //         style={{
// //           height: "100vh",
// //           width: "100vw",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //           flexWrap: "wrap",
// //           gap: "30px",
// //         }}
// //       >
// //         {filterData.length > 0 ? (
// //           filterData.map((item) => {
// //             return (
// //               <>
// //                 <BasicExample
// //                   key={item.id}
// //                   title={item.title}
// //                   description={item.description}
// //                   image={item.images}
// //                   category={item.category}
// //                 />
// //               </>
// //             );
// //           })
// //         ) : (
// //           <h1 style={{ color: "red" }}>Not Found</h1>
// //         )}
// //       </div>
// //     </>
// //   );
// // };
// // export default AxiosExample;

import axios from "axios";
import React, { useMemo, useState } from "react";
import BasicExample from "../useState/cardComponent";

const AxiosExample = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const fetch = await axios.get("https://dummyjson.com/products");
      console.log(fetch.data.products);
      setData(fetch.data.products);
    } catch (err) {
      console.log(err);
    }
  };
  fetchData();

  const handle = (e) => {
    setSearch(e.target.value);
  };

  const filterData = useMemo(() => {
    return data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLocaleLowerCase());
    });
  });

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Search Products.....</h1>
        <input
          type="text"
          onChange={handle}
          value={search}
          style={{ marginBottom: "20px" }}
        />
      </div>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {filterData.length > 0 ? (
          filterData.map((item) => {
            return (
              <>
                <BasicExample
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  image={item.images}
                />
              </>
            );
          })
        ) : (
          <p>Not Found</p>
        )}
      </div>
    </>
  );
};
export default AxiosExample;

