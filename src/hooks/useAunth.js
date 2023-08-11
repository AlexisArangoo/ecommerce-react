import axios from "axios"
import { useReducer, useState } from "react"
import { useDispatch } from "react-redux"
import { setOnLoginG } from "../store/slices/onLogin.slice"
import getConfigToken from "../utils/configToken"

const useAunth = () => {
    
    const dispatch = useDispatch()


    const [infoOneUser, setInfoOneUser] = useState()



    const getOneUser = (id) => { 
        
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users/${id}`
        axios.get(url, getConfigToken())
            .then(resp => setInfoOneUser(resp.data)) 
            .catch(err => console.log(err))
     }

    
    const createUser = (data, navigate) => {

        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url, data)
            .then(resp => {
                console.log(resp.data)
                navigate('/login')
            } 
            )
            .catch(err => console.log(err))
    }

    const loginUser = (data, navigate) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        axios.post(url, data)
            .then(resp => {
                console.log(resp.data)
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('name', `${resp.data.user.firstName} ${resp.data.user.lastName}`)
                dispatch(setOnLoginG(localStorage.getItem('token')))
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
            })
    }

    return { createUser, loginUser, getOneUser, infoOneUser }
}

export default useAunth