import { useState } from "react";
import FetchCardsSort from "./Tasks/fecthCardsSort";
import Navbar from "./Tasks/navbar";

const App = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [pricefilter, setPriceFilter] = useState("");
  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        pricefilter={pricefilter}
        setPriceFilter={setPriceFilter}
      />
      <FetchCardsSort search={search} sort={sort} pricefilter={pricefilter} />
    </>
  );
};
export default App;
