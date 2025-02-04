import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hotelCard.css";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  return (
    <div className="div">
      <article className="card-container">
        <section className="card">
          <header className="card-header">
            <img src={hotel.images[0].url} alt="" />
          </header>
          <h3 className="card-name">{hotel.name}</h3>
          <div className="card-details">
            <p className="card-rating">Rating: {hotel.rating}</p>
            <p className="card-city">
              City: {hotel.city.name}, {hotel.city.country}
            </p>
            <p className="card-price">Price: {hotel.price}</p>{" "}
          </div>

          <footer className="card-btn-box">
            <button className="card-btn" onClick={handleClick}>
              ver mas...
            </button>
          </footer>
        </section>
      </article>
    </div>
  );
};

export default HotelCard;
