import { useEffect, useState } from "react"
import "./styles/SliderImgs.css"

const SliderImgs = ({ product }) => {
    const [imgSelected, setImgSelected] = useState(0)

    useEffect(() => {
      const interval = setInterval(handleNext, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [imgSelected]); // Limpiar el intervalo cuando imgSelected cambie
  
    const movablestyle = {
      transform: `translateX(calc(-${imgSelected}/3 * 100%))`,
    }
  
    const handlePrev = () => {
      setImgSelected(prevImgSelected => prevImgSelected - 1 >= 0 ? prevImgSelected - 1 : 2);
    }
  
    const handleNext = () => {
      setImgSelected(prevImgSelected => prevImgSelected + 1 <= 2 ? prevImgSelected + 1 : 0);
    }
    
  return (
    <div className="slider">
      <button onClick={handlePrev} className="slider__btn slider__prev">
        &#60;
      </button>
      <div style={movablestyle} className="slider__movable">
        {product?.images.map(imgInfo => (
          <div className="slider__container-img" key={imgInfo.id}>
            <img className="slider__img" src={imgInfo.url} alt="" />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="slider__btn slider__next">
        &#62;
      </button>
    </div>
  )
}

export default SliderImgs