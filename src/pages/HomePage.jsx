import { useSelector } from "react-redux"
import CardProduct from "../components/HomePage/CardProduct"
import { useRef, useState } from "react"
import './styles/HomePage.css'
import FilterCategory from "../components/HomePage/FilterCategory"
import FilterPrice from "../components/HomePage/FilterPrice"

const HomePage = () => {

    const [nameValue, setNameValue] = useState('')

    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity,
    })

    const inputName = useRef()

    const products = useSelector(reducer => reducer.products)

    const handleFilterName = () => {
        setNameValue(inputName.current.value)
    }

    const cbFilter = prod => {
        //Filter By Name
        const inputNameLower = nameValue.toLowerCase().trim()
        const nameReal = prod.title.toLowerCase()
        const filterName = nameReal.includes(inputNameLower)

        // Filter By Price
        const price = +prod.price
        const filterPrice = fromTo.from <= price && price <= fromTo.to

        return filterName && filterPrice
    }

  return ( 
    <div className="homepage">
        <div className="homepage-container-filter">
            <FilterPrice setFromTo={setFromTo} />

            <FilterCategory />
        </div>
        <div className="homepage-body">
        <input className="homepage-body-input" value={nameValue} ref={inputName} onChange={handleFilterName} type="text" placeholder="what are you looking for?"/>

        <div className="homepage-body-products">
            {products?.filter(cbFilter).length ? (
              products
                ?.filter(cbFilter)
                .map(prod => <CardProduct key={prod.id} product={prod} />)
            ) : (
              <h2>Sorry 😭, not exist products with that filters. ❌</h2>
            )}
        </div>
    </div>
    </div>
  )
}

export default HomePage