import { createSlice } from '@reduxjs/toolkit';

export const onLoginSlice = createSlice({
    name: 'onLogin',
    initialState: localStorage.getItem('token'),
    reducers: {
        setOnLoginG: (state, action) => action.payload
    }
})

export const { setOnLoginG } = onLoginSlice.actions;

export default onLoginSlice.reducer;
