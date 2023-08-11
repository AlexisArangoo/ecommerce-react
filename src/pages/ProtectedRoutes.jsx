import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
  if (localStorage.getItem('token')) {
    return <Outlet />
  } else{
    <Navigate to='/login' />
  }
}

export default ProtectedRoutes