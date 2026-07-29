import React from "react";
const Navbar = ({
  search,
  setSearch,
  setSort,
  pricefilter,
  setPriceFilter,
}) => {
  return (
    <div className="w-full bg-black text-white p-4 grid grid-cols-8 place-items-center mb-5">
      <div className="w-[100px]">HOME</div>
      <div className="w-[100px]">About Us</div>
      <div className="w-[100px]">Services</div>
      <div className="w-[100px]">Contact Us</div>
      <div className="w-[210px] bg-white">
        <input
          type="text"
          placeholder="Search Products here...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 text-black"
        />
      </div>
      <div onClick={() => setSort("asc")}>Ascending </div>
      <div onClick={() => setSort("desc")}>Descending</div>
      <div className="w-[100px]">
        <select
          value={pricefilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="text-black px-2 py-2 rounded color-white bgColor-white"
        >
          <option value="">All Prices</option>
          <option value="under50">Under $50</option>
          <option value="50to100">$50 - $100</option>
          <option value="above100">Above $100</option>
        </select>
      </div>
    </div>
  );
};
export default Navbar;
