import './styles/ProductPurchases.css'

const ProductPurchases = ({ purchase }) => {


  const fecha = new Date(purchase.updatedAt)
  return (
    <article className='productpurchases'>
        <header className='productpurchases-header'>
            <img src={purchase.product.images[0].url} alt="" />
        </header>
        <section className='productpurchases-section'>
          <h3 className='productpurchases-section-title'>{purchase.product.title}</h3>

          <div className='productpurchases-section-container-items'>
            <div className='productpurchases-section-fecha'>{fecha.toLocaleDateString()}</div>
            <div className='productpurchases-section-quantity'>{purchase.quantity}</div>
            <div className='productpurchases-section-price'>{purchase.quantity * purchase.product.price}</div> 
          </div>
        </section>
    </article>
  )
}

export default ProductPurchases