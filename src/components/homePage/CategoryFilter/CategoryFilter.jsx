import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { getHotelsThunk } from "../../../states/hotel.slice";
import { useDispatch } from "react-redux";
import "../../styles/CategoryFilter.css";

const CategoryFilter = () => {
  const url = "https://hotels-app-jhw1.onrender.com/city";

  const [cities, getCities] = useFetch(url);

  useEffect(() => {
    getCities();
  }, []);

  const dispatch = useDispatch();

  const handleFilterCity = (id) => {
    let url;

    if (id) {
      url = `https://hotels-app-jhw1.onrender.com/hotels?cityId=${id}`;
    } else {
      url = 'https://hotels-app-jhw1.onrender.com/hotels';
    }
    dispatch(getHotelsThunk(url));
  };

  return (
    <div className="container-search">
      <section className="search-city">
        <h3 className="search-name">City</h3>

        <select className="search-select">
          <option onClick={() => handleFilterCity()}>All cities</option>

            {cities?.map((city) => (
              <option onClick={() => handleFilterCity(city.id)} key={city.id}>
                {city.name}
              </option>
            ))}

        </select>
      </section>
    </div>
  );
};

export default CategoryFilter;