import { useForm } from "react-hook-form"
import useAunth from "../hooks/useAunth"
import { Link, useNavigate } from "react-router-dom"
import './styles/RegisterPage.css'

const RegisterPage = () => {

    const {register, reset, handleSubmit} = useForm()

    const {createUser} = useAunth()

    const navigate = useNavigate()

    const submit = data => {
        createUser(data, navigate)
        reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
        })
    }

  return (
    <div className="registerpage">
      <form className="registerpage-form" onSubmit={handleSubmit(submit)}>
      <div className="registerpage-form-container-input">
        <label className="registerpage-form-label" htmlFor="firstname">First Name</label>
        <input className="registerpage-form-input" {...register('firstName')} type="text" id="firstname" />
      </div>
      <div className="registerpage-form-container-input">
        <label className="registerpage-form-label" htmlFor="">Last Name</label>
        <input className="registerpage-form-input" {...register('lastName')} type="text" id="lastname" />
      </div>
      <div className="registerpage-form-container-input">
        <label className="registerpage-form-label" htmlFor="email">Email</label>
        <input className="registerpage-form-input" {...register('email')} type="email" id="email" />
      </div>
      <div className="registerpage-form-container-input">
        <label className="registerpage-form-label" htmlFor="password">Password</label>
        <input className="registerpage-form-input" {...register('password')} type="password" id="password" />
      </div>
      <div className="registerpage-form-container-input">
        <label className="registerpage-form-label" htmlFor="phone">Phone</label>
        <input className="registerpage-form-input" {...register('phone')} type="text" id="phone" />
      </div>
      <footer className="registerpage-footer">
        <button className="registerpage-form-btn">Create User</button>
        <p className="registerpage-form-par">I have an account. <Link to='/login'><span className="registerpage-form-par-login">Login.</span></Link></p>
      </footer>
    </form>
    </div>
  )
}

export default RegisterPage