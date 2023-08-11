import { useForm } from "react-hook-form"
import './styles/FilterPrice.css'
import { useState } from "react"

const FilterPrice = ({setFromTo}) => {
  const [onPrice , setOnPrice ] = useState(false)

  const { register, reset, handleSubmit } = useForm()

  const submit = data => {
    const from = +data.from.trim()
    const to = +data.to.trim()
    const obj =  { 
        from: from || 0,
        to: to || Infinity,
     }
     setFromTo(obj)
  }
  const handleOnPrice = () => { 
    setOnPrice(!onPrice)
  }

  return (
    <article className={`filterprice ${onPrice ? 'onprice' : ''}`}>
      <div onClick={handleOnPrice} className="filterprice-container-title">
        <h3 className="filterprice-title">Price</h3> <span className={`filterprice-span ${onPrice ? 'onprice' : ''}`}>{'>'}</span>
      </div>
      <form className="filterprice-form" onSubmit={handleSubmit(submit)}>
        <div className="filterprice-form-container-input">
          <label className="filterprice-form-label" htmlFor="">From</label>
          <input className="filterprice-form-input" {...register("from")} type="number" id="from" />
        </div>
        <div className="filterprice-form-container-input">
          <label className="filterprice-form-label" htmlFor="to">To</label>
          <input className="filterprice-form-input" {...register("to")} type="number" id="to" />
        </div>
        <button className="filterprice-form-btn">Filter price</button>
      </form>
    </article>
  )
}

export default FilterPrice