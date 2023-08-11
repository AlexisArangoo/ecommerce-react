import { useNavigate } from 'react-router-dom'
import './styles/CardProduct.css'
import useCartApi from '../../hooks/useCartApi'
const CardProduct = ({product}) => {

    const navigate = useNavigate()

    const { addProductInCart } = useCartApi()

    const handleNavigate = () => {
        navigate(`/product/${product.id}`)
    }

    const handleAddCart = e => {
        e.stopPropagation()
        const data = {
            quantity: 1,
            productId: product.id
        }
        addProductInCart(data)
    }

  return (
    <article className='cardproduct' onClick={handleNavigate}>
        <header className='cardproduct-header'>
            <img className='img1' src={product.images[0].url} alt="" />
            <img className='img2' src={product.images[1].url} alt="" />
        </header>
        <section className='cardproduct-body'>
            <h4 className='body-brand'>{product.brand}</h4>
            <h3 className='body-title'>{product.title}</h3>
            <article className='body-price'>
                <h3 className='body-price-value'>Price</h3>
                <span className='body-price-span'>$ {product.price}</span>
            </article>
            <button className='body-btn' onClick={handleAddCart}>
                <i className='bx bxs-cart-add' ></i>
            </button>
        </section>
    </article>
  )
}

export default CardProduct