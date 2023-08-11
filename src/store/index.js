import { configureStore } from "@reduxjs/toolkit";
import products from './slices/Products.slice'
import cart from './slices/cart.slice'
import onLogin from './slices/onLogin.slice'

const store = configureStore({
    reducer: {
        products,
        cart,
        onLogin
    }
})

export default store