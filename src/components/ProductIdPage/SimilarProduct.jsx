import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../HomePage/CardProduct"
import './styles/SimilarProduct.css'

const SimilarProduct = ({product}) => {

    const [ productsByCategory, getProductsByCategory] = useFetch()

    useEffect(() => {
        if (product) {
            getProductsByCategory(`/products?categoryId=${product?.categoryId}`)
        }
    }, [product])
    
    const cbFilter = prod => {
        if (prod.id !== product.id) {
            return prod
        }
    }
  return (
    <div className="similarproduct">
        <h3 className="similarproduct-title">Similar Products</h3>

        <div className="similarproduct-container-cart">
            {
                productsByCategory?.filter(cbFilter).map(prod => (
                    <CardProduct 
                    key={prod.id}
                    product={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default SimilarProduct