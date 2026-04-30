import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffectFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const finalData = await data.json();
        console.log(finalData);
        setData(finalData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  return (
    <>
      {data.length > 0 ? (
        data.map((item) => {
          return (
            <>
              <p>{item.id}</p>
            </>
          );
        })
      ) : (
        <p>Not found</p>
      )}
    </>
  );
};
export default UseEffectFetch;
