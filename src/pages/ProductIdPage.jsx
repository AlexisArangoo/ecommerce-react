import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProduct from "../components/ProductIdPage/SimilarProduct"
import './styles/ProductIdPage.css'

const ProductIdPage = () => {

    const { id } = useParams()

   const [product, getSingleProduct] = useFetch()

   useEffect(() => {
     getSingleProduct(`/products/${id}`)
   }, [id])

   
   

  return (
    <div className="productidpage">

        <header className="productidpage-header">
          <Link>
            <span className="productidpage-header-home">Home</span>
          </Link>
          <span className="productidpage-header-punto">°</span>
          <span className="productidpage-header-title">{product?.title}</span>
        </header>
        <ProductInfo 
        product={product}
        />

        <SimilarProduct 
        product={product}
        />
    </div>
  )
}

export default ProductIdPage