import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const hotelslice = createSlice({
    name: 'hotels',
    initialState: null,
    reducers: {
        setHotels: (state, action) =>action.payload

    }
})

export const { setHotels } = hotelslice.actions;

export default hotelslice.reducer;

export const getHotelsThunk = (url) => (dispatch) => {
    axios.get(url)
    .then(res => dispatch(setHotels(res.data)))
    .catch(err => console.log(err))

}
