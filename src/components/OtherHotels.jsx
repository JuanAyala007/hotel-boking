import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import HotelCard from './homePage/HotelCard'
import '../components/styles/OtherHotel.css'

const OtherHotels = ({hotel}) => {

    const url = `https://hotels-app-jhw1.onrender.com/hotels?cityId=${hotel?.cityId}`

  const [hotelsInCity, getHotelsInCity] = useFetch(url)

  useEffect(() => {
    getHotelsInCity()
  }, [hotel])


  
  return (
    <section className='card-hotels'>
        <h3 className='card-name-other-hotel'>Other hotels in <span>{hotel?.city.name}</span></h3>
        <div className='card-other-hotel'>
            {
                hotelsInCity?.filter(hotelInfo => hotelInfo.id !== hotel.id).map(hotelInfo => (
                    <HotelCard 
                    key={hotelInfo.id}
                    hotel={hotelInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default OtherHotels