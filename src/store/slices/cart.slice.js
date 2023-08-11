import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfigToken from '../../utils/configToken';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCartG: (state, action) => action.payload,
        addCartG: (state, action) => [...state, action.payload],
        deleteCartG: (state, action) => state.filter(e => e.id !== action.payload)
    }
})

export const { setCartG, addCartG, deleteCartG } = cartSlice.actions;

export default cartSlice.reducer;

//Thunk

export const getCartThunk = () => dispatch => {
    
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'
    axios.get(url, getConfigToken())
        .then(resp => dispatch(setCartG(resp.data)))
        .catch(err => console.log(err))
}
