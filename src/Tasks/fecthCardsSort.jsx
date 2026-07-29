import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import Navbar from "./navbar";

const FetchCardsSort = ({ search, sort, pricefilter }) => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
      const finalData = await axios.get("https://dummyjson.com/products");
      console.log(finalData.data.products);
      setData(finalData.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredData = data.filter((item) => {
    return ( 
        item.title.toLowerCase().includes(search.toLowerCase()) ||
     item.description.toLowerCase().includes(search.toLowerCase()) ||
     item.category.toLowerCase().includes(search.toLowerCase()) ||
item.rating.toString().includes(search)
    );
  });

  let sortedData = [...filteredData];
  if (sort == "asc") {
    for (let i = 0; i < sortedData.length; i++) {
      for (let j = i + 1; j < sortedData.length; j++) {
        if (
          sortedData[i].title.toLowerCase() > sortedData[j].title.toLowerCase()
        ) {
          let temp = sortedData[i];
          sortedData[i] = sortedData[j];
          sortedData[j] = temp;
        }
      }
    }
  }

  if (sort == "desc") {
    for (let i = 0; i < sortedData.length; i++) {
      for (let j = i + 1; j < sortedData.length; j++) {
        if (
          sortedData[i].title.toLowerCase() < sortedData[j].title.toLowerCase()
        ) {
          let temp = sortedData[i];
          sortedData[i] = sortedData[j];
          sortedData[j] = temp;
        }
      }
    }
  }

  if (pricefilter === "under50") {
    sortedData = sortedData.filter((item) => item.price < 50);
  }
  if (pricefilter === "50to100") {
    sortedData = sortedData.filter(
      (item) => item.price > 50 && item.price < 100,
    );
  }

  if (pricefilter === "above100") {
    sortedData = sortedData.filter((item) => item.price > 100);
  }

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {sortedData.map((item, id) => {
          return (
            <CardComponent
              key={id}
              title={item.title}
              category={item.category}
              image={item.thumbnail}
              price={item.price}
              description={item.description}
              rate={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FetchCardsSort;
