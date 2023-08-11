import axios from "axios"
import getConfigToken from "../utils/configToken"
import { useState } from "react"
import { getCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const usePurchases = () => {

    const [purchases, setPurchases] = useState()

    const dispacth = useDispatch()

    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

  //post
  const makeAPurchase = () => {

    axios.post(url, {}, getConfigToken())
        .then(resp => {
            console.log(resp.data)
            dispacth(getCartThunk())
        })
        .catch(err => console.log(err))
  }

  //get
  const getAllPurchases = () => {
    axios.get(url, getConfigToken())
        .then(resp => setPurchases(resp.data))
        .catch(err => console.log(err))
  }

  return { makeAPurchase, getAllPurchases, purchases }
}

export default usePurchases