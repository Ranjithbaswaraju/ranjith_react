import axios from "axios";
import React, { useEffect, useState } from "react";

const TableFake = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const finalData = await axios.get("https://fakestoreapi.com/products");
      setData(finalData.data);
      console.log(finalData.data);
    };
    FetchData();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>FakeStore Product Table</h1>
      <table
        style={{
          width: "90%",
          margin: "20px auto",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
        border="1"
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.image} alt="product" width="50" height="50" />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>{item.category}</td>
              <td style={{ maxWidth: "300px" }}>
                <span
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableFake;
