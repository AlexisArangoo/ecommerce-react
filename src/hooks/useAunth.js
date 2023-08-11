import axios from "axios"
import { useReducer, useState } from "react"
import { useDispatch } from "react-redux"
import { setOnLoginG } from "../store/slices/onLogin.slice"
import getConfigToken from "../utils/configToken"

const useAunth = () => {
    
    const dispatch = useDispatch()
    
    const [loginInfo, setLoginInfo] = useState({})

    const [infoOneUser, setInfoOneUser] = useState()

    console.log(loginInfo)

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
                setLoginInfo(resp.data)
                localStorage.setItem('token', resp.data.token)
                dispatch(setOnLoginG(localStorage.getItem('token')))
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
            })
    }

    return { createUser, loginUser, loginInfo, getOneUser, infoOneUser }
}

export default useAunth