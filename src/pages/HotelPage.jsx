import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Map, Overlay } from "pigeon-maps";
import OtherHotels from "../components/OtherHotels";
import ReservationPage from "./ReservationPage";
import "../components/styles/HotelPage.css";

const HotelPage = () => {
  const { id } = useParams();

  const url = `https://hotels-api.academlo.tech/hotels/${id}`;

  const [hotel, gethotel] = useFetch(url);

  useEffect(() => {
    gethotel();
  }, [id]);

  return (
    <div className="hotel-uni">
      <h2 className="hotel-name">{hotel?.name}</h2>
      <h2 className="hotel-rating">
        {" "}
        Rating - <span className="hotel-rating-value">
          {hotel?.rating}
        </span>{" "}
      </h2>
      <div className="slider">
        <div className="slider-reservation">
          <img className="hotel-img" src={hotel?.images[0].url} alt="" />
          <div className="hotel-reservation">
            {localStorage.getItem("token") ? (
              <ReservationPage />
            ) : (
              <h4>
                if you wnat make a reservation, please{" "}
                <Link to={"/login"}>Login</Link>
              </h4>
            )}
          </div>
        </div>
      </div>

      <section className="hotel-info">
        <div className="hotel-description-box">
          <h3 className="hotel-city">
            {hotel?.city.name}, {hotel?.city.country}
          </h3>
          <p className="hotel-address">
            <i className="bx bxs-map"></i>
            <span>{hotel?.address}</span>
          </p>
          <p className="hotel-description">{hotel?.description}</p>
        </div>

        <div className="hotel-map">
          <h3>Address in the map</h3>
          {hotel && (
            <Map
              height={500}
              defaultCenter={[+hotel?.lat, +hotel?.lon]}
              defaultZoomZoom={8}
              maxZoom={20}
            >
              <Overlay
                anchor={[+hotel?.lat, +hotel?.lon]}
                color="red"
                offset={[20, 20]}
              >
                <i className="bx bxs-map ponter"></i>
              </Overlay>
            </Map>
          )}
        </div>
      </section>

      <div className="hotel-others">
        <OtherHotels hotel={hotel} />
      </div>
    </div>
  );
};

export default HotelPage;
