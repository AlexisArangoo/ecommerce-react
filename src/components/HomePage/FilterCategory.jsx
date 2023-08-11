import { useDispatch } from "react-redux"
import useFetch from "../../hooks/useFetch"
import { useEffect, useState } from "react"
import { getAllProductsThunk, getFilteredProductsThunk,} from "../../store/slices/Products.slice"
import './styles/FilterCategory.css'

const FilterCategory = () => {

  const [onCategory, setOnCategory] = useState()

  const [categories, getAllCategories] = useFetch()

  useEffect(() => {
    getAllCategories("/categories")
  }, [])

  const dispatch = useDispatch()

  const handleAllCategories = () => {
    dispatch(getAllProductsThunk())
  }

  const handleFilterCategories = id => {
    dispatch(getFilteredProductsThunk(id))
  }

  const handleOnCategory = () => { 
    setOnCategory(!onCategory)
   }

  return (
    <article className={`filtercategory ${onCategory ? 'oncategory' : ''}`}>
      <div onClick={handleOnCategory} className="filtercategory-container-title">
        <h3 className="filtercategory-title" >Category</h3> <span className={`filtercategory-span ${onCategory ? 'oncategory' : ''}`}>{'>'}</span>
      </div>
      <ul className="filtercategory-container-list">
        <li className="filtercategory-list" onClick={handleAllCategories}>All categories</li>
        {categories?.map(category => (
          <li
            onClick={() => handleFilterCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default FilterCategory
