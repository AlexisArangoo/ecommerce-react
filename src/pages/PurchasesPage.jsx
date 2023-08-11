import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchases from "../components/PurchasesPage/ProductPurchases"
import './styles/PurchasesPage.css'
import { Link } from "react-router-dom"

const PurchasesPage = () => {

    const { getAllPurchases, purchases } = usePurchases()

    useEffect(() => {
      
        getAllPurchases()

    }, [])

     
  return (
    <section className="purchases">
        <header className="purchases-header">
            <div className="purchases-container-span">
                <Link to='/'>
                    <span className="purchases-span-home">home</span>
                </Link>
                <span className="purchases-span-punto">°</span>
                <span className="purchases-span-purchases">purchases</span>
            </div>

            <h2 className="purchases-title">My Purchases</h2>
        </header>
        
        <div className="purchases-container-productpurchases">
            {
                purchases?.map(purch => (
                   <Link to={`/product/${purch.productId}`}  key={purch.id}>
                        <ProductPurchases 
                        purchase={purch}
                        /> 
                   </Link>
                ))
            }
        </div>
    </section>
  )
}

export default PurchasesPage