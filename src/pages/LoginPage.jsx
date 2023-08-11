import { useForm } from "react-hook-form"
import useAunth from "../hooks/useAunth"
import { Link, useNavigate } from "react-router-dom"
import './styles/LoginPage.css'

const LoginPage = () => {

    const {register, reset, handleSubmit} = useForm()

    const {loginUser} = useAunth()

    const navigator = useNavigate()

    const submit = data => {
        loginUser(data, navigator)
    }

  return (
   <div className="loginpage">
     <form className="loginpage-form" onSubmit={handleSubmit(submit)}>
      <div className="loginpage-form-container-input">
        <label className="loginpage-form-label" htmlFor="email">Email</label>
        <input className="loginpage-form-input" {...register('email')} type="email" id="email" />
      </div>
      <div className="loginpage-form-container-input">
        <label className="loginpage-form-label" htmlFor="password">Password</label>
        <input className="loginpage-form-input" {...register('password')} type="password" id="password" />
      </div>
      <footer className="footer">
      <button className="loginpage-form-btn">Login</button>
      <p className="loginpage-form-par">You do not have an account? <Link to='/register'><span className="loginpage-form-par-register">Register.</span></Link></p>
      </footer>
    </form>
   </div>
  )
}

export default LoginPage