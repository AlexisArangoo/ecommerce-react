import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductsThunk } from './store/slices/Products.slice'
import Header from './components/shared/Header'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import ProductIdPage from './pages/ProductIdPage'
import CartPage from './pages/CartPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PurchasesPage from './pages/PurchasesPage'
import PerfilPage from './pages/PerfilPage'

function App() {

  const dispacth = useDispatch()

  const [onCart, setOnCart] = useState(false)

  useEffect(() => {
    dispacth(getAllProductsThunk())
  }, [])
  
  const handleOnCart = () => { 
    setOnCart(false)
  }

  return (
    <div className='app'>

      <Header setOnCart={setOnCart}/>

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/product/:id' element={<ProductIdPage />}/>
      
      <Route element={<ProtectedRoutes />}>
        <Route path='/purchases' element={<PurchasesPage />}/>
        <Route path='/profile' element={<PerfilPage />}/>
      </Route>

    </Routes>

    <div onClick={handleOnCart} className={`container-cartpage ${onCart ? '' : 'oncart'}`}>
      <CartPage onCart={onCart} />
    </div>
    </div>
  )
}

export default App
