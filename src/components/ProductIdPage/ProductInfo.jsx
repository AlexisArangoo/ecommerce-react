import { useState } from "react";
import useCartApi from "../../hooks/useCartApi";
import "./styles/ProductInfo.css";
import SliderImgs from "./SliderImgs";

const ProductInfo = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const { addProductInCart } = useCartApi();

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => setCounter(counter + 1);

  const handleAddCart = () => {
    const data = {
      quantity: counter,
      productId: product.id,
    };
    addProductInCart(data);
  };

  return (
    <article className="productinfo">
      <div className="productinfo-carucel">
      <SliderImgs product={product} />
      </div>
      <div className="productinfo-body">
        <h4 className="productinfo-body-brand">{product?.brand}</h4>

        <h3 className="productinfo-body-title">{product?.title}</h3>

        <p className="productinfo-body-description">{product?.description}</p>

        <div className="productinfo-body-container-section">
          <section className="productinfo-body-section">
            <h4 className="productinfo-body-section-item">Price</h4>
            <span className="productinfo-body-section-price">{product?.price}</span>
          </section>
          <section className="productinfo-body-section">
            <h4 className="productinfo-body-section-item">Quantity</h4>
            <div className="productinfo-body-section-counter">
              <button className="section-counter-btn" onClick={handleMinus}>-</button>
              <span className="section-counter">{counter}</span>
              <button className="section-counter-btn" onClick={handlePlus}>+</button>
            </div>
          </section>
        </div>
        <footer className="productinfo-footer">
          <button className="productinfo-footer-btn" onClick={handleAddCart}>
            Add to Cart <i className="bx bxs-cart-add"></i>
          </button>
        </footer>
      </div>
    </article>
  );
};

export default ProductInfo;
