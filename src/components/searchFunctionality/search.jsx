import React, { useMemo, useState } from "react";

const SearchFunctionality = () => {
  const items = ["apple", "banana", "orange", "mango", "grapes"];
  const [search, setSearch] = useState("");

  const Handler = (e) => {
    setSearch(e.target.value);
  };

  const filterData = useMemo(() => {
    return items.filter((each) =>
      each.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={Handler}
        placeholder="Search fruits..."
      />

      {filterData.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        filterData.map((each, index) => <p key={index}>{each}</p>)
      )}
    </>
  );
};

export default SearchFunctionality;
