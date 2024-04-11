import { configureStore } from '@reduxjs/toolkit'
import hotels from '../states/hotel.slice'

export default configureStore({
  reducer:{
    hotels
    
  }
})