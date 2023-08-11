import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import ProductInCart from "../components/CartPage/ProductInCart"
import usePurchases from "../hooks/usePurchases"
import './styles/CartPage.css'

const CartPage = ({onCart}) => { 

    const cart = useSelector(reducer => reducer.cart)

    const dispacth = useDispatch()

    useEffect(() => {
      dispacth(getCartThunk())
    }, []) 
    
    const totalAmount = cart.reduce((acc, cv) => {
      const subtotal = cv.quantity * cv.product.price
      return acc + subtotal
    }, 0)

    const { makeAPurchase } = usePurchases()

    const handlePurchase = () => {
      makeAPurchase()
    }

  return (
    <section onClick={(e)=> e.stopPropagation()} className={`cartpage ${onCart ? 'oncart' : ''}`}>
      <h2 className="cartpage-title">Shopping Cart</h2>
      <div className="cartpage-container-products">
        {
          cart.map(prod => (
            <ProductInCart 
            key={prod.id}
            prodCart={prod}
            cart={cart}
            />
          ))
        }
      </div>
      <footer className="cartpage-footer">
        <div className="cartpage-footer-container-price">
        <h3 className="cartpage-footer-total">Total:</h3>
        <span className="cartpage-footer-value">{totalAmount}</span>
        </div>
        <button className="cartpage-footer-btn" onClick={handlePurchase}>Checkout</button>
      </footer>
    </section>
  )
}

export default CartPage