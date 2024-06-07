import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import HomePages from './pages/HomePages'
import HotelPage from './pages/HotelPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPages'
import { getHotelsThunk } from './states/hotel.slice'
import { Routes, Route } from 'react-router-dom'
import HeaderPrincipal from './components/shared/HeaderPrincipal'
import ProtetedRoutes from './pages/ProtetedRoutes'
import ReservationPage from './pages/ReservationPage'

function App() {

  const hotels = useSelector(states => states.hotels)

  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-app-jhw1.onrender.com/hotels'
    dispatch(getHotelsThunk(url))
  }, [])
 

  return (
    <div>
      <HeaderPrincipal />
      <Routes>
        <Route path='/' element={<HomePages />}></Route>
        <Route path='/hotels/:id' element={<HotelPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>

        <Route element={<ProtetedRoutes />}>
        <Route path='/reservation' element={<ReservationPage />}></Route>
        </Route>

      
      </Routes>
      
      </div>
  )
}

export default App
