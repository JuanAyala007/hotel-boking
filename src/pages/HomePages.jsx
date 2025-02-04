import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import HotelCard from "../components/homePage/HotelCard";
import CategoryFilter from "../components/homePage/CategoryFilter/CategoryFilter";
import "../components/styles/HomePage.css";

const HomePages = () => {
  const [inputName, setInputName] = useState("");

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const hotels = useSelector((states) => states.hotels);

  const inputValue = useRef();

  const handleChange = () => {
    setInputName(inputValue.current.value);
  };

  const cbFilter = (hotelInfo) => {
    const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim());

    const price = Number(hotelInfo.price);
    const filterPrice = price >= fromTo.from && price <= fromTo.to;

    return filterName && filterPrice;
  };
  return (
    <div className="card-filter">
      <div className="aside-filter">
        {/* <div className="input-search">
          <h3 className="filter-name">Category filter</h3>
          <input
            onChange={handleChange}
            value={inputName}
            ref={inputValue}
            type="text"
            placeholder="search"
          />
        </div> */}
        {/* <PriceFilter setFromTo={setFromTo} /> */}
        <CategoryFilter />
      </div>

      <div className="card-result-filter">
        {hotels?.filter(cbFilter).map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
        ))}
      </div>
    </div>
  );
};

export default HomePages;
