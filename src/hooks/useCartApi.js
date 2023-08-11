import axios from "axios"
import getConfigToken from "../utils/configToken"
import { deleteCartG, getCartThunk } from "../store/slices/cart.slice"
import { useDispatch } from "react-redux"

const useCartApi = () => {
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

    const dispacth = useDispatch()

  //Post
  const addProductInCart = (data) => {
    const url = `${baseUrl}/cart`
    axios.post(url, data, getConfigToken())
        .then(resp => {
            console.log(resp.data)
            dispacth(getCartThunk())
        })
        .catch(err => console.log(err))

  }

  //Delete
  const deleteProductInCart = (id) => {
    const url = `${baseUrl}/cart/${id}`
    axios.delete(url, getConfigToken())
      .then(resp => {
        console.log(resp.data)
        // dispacth(getCartThunk())
        //Otra manera de actualizar la informacion de cart en el estado global:
        dispacth(deleteCartG(id))
      })
      .catch(err => console.log(err))
  }

  //upDate
  const upDateProductInCart = (data, id) => { 
    const url = `${baseUrl}/cart/${id}`
    axios.put(url, data, getConfigToken())
      .then(resp => {
        console.log(resp.data)
        dispacth(getCartThunk())
      })
      .catch(err => console.log(err))
   }

  return { addProductInCart, deleteProductInCart, upDateProductInCart }
}

export default useCartApi