import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/hotelCard.css'

const HotelCard = ({hotel}) => {

  const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)

    }


  return (
    <div className='div'>

    <article className='card-container'>
        <section className='card'>
        <header className='card-header'><img src={hotel.images[0].url} alt="" />
        </header>
            <h3 className='card-name'>{hotel.name}</h3>
            <p className='card-rating'>Rating - {hotel.rating}</p>
            <span className='card-city'>City - {hotel.city.name}, {hotel.city.country}</span>
            <div className='card-price'>Price - {hotel.price}</div>
        <footer>
            <button className='card-btn' onClick={handleClick}>see more...</button>
        </footer>
        </section>
    </article>

    </div>
  )
}

export default HotelCard