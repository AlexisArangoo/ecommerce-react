import { useState } from "react"
import useCartApi from "../../hooks/useCartApi"
import './styles/ProductInCart.css'

const ProductInCart = ({ prodCart }) => {

    const [counter, setCounter] = useState(prodCart.quantity)

    const { deleteProductInCart, upDateProductInCart } = useCartApi()

    const handleDeleteCart = () =>{
        deleteProductInCart(prodCart.id)
    }

    const handleSumCounter = () => { 
        setCounter(counter + 1)
        const data = {
            quantity: counter + 1
        }
        upDateProductInCart(data, prodCart.id)
     }
   
     const handleResCounter = () => { 
        if (counter > 1) {
            setCounter(counter - 1)

            setTimeout(() => {
                const data = {
                    quantity: counter - 1
                }
                upDateProductInCart(data, prodCart.id)
            }, 50);
  
        }
    } 
       

  return (
    <article className="productincart">
        <header className="productincart-header">
            <img className="productincart-header-img" src={prodCart.product.images[0].url} alt="" />
        </header>
        <section className="productincart-body">
            <h3 className="productincart-body-title">{prodCart.product.title}</h3>
            <button className="productincart-body-btn res" onClick={handleResCounter}>-</button>
            <span className="productincart-body-counter">{counter}</span>
            <button className="productincart-body-btn sum" onClick={handleSumCounter}>+</button>
            <button className="productincart-body-trash" onClick={handleDeleteCart}><i className='bx bx-trash'></i></button>
        </section>
        <footer className="productincart-footer">
            <span className="productincart-footer-sub">subTotal:</span>
            <span className="productincart-footer-value">{prodCart.product.price * counter}</span>   
        </footer>

    </article>
  )
}

export default ProductInCart