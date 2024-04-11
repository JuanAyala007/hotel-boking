import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import '../components/styles/RegisterPage.css'

const RegisterPage = () => {
 const {register, handleSubmit, reset} = useForm()
 const {registerUser} = useAuth()

 const submit = data => {
  registerUser(data)
  reset({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: 'unknown'
  })

 }


  return (
    <div className='register'>
    <div className='card-register'>
      <form className='form' onSubmit={handleSubmit(submit)}>
           <h2 className='title-register'>Register</h2>
       <div className='container-register'>

        <label className='register-label'>
          <span className='register-span'>First Name</span>
          <input className='register-input' {...register("firstName")} type="text" />
        </label>

        <label className='register-label'>
          <span className='register-span'>Last Name</span>
          <input className='register-input' {...register("lastName")} type="text" />
        </label>

        <label className='register-label'>
          <span className='register-span'>Email</span>
          <input className='register-input' {...register("email")} type="email" />
        </label>

        <label className='register-label'>
          <span className='register-span'>Password</span>
          <input className='register-input' {...register("password")} type="password" />
        </label>

        <label className='register-label'>
          <span className='register-span'>Gender</span>

          <select className='register-select' {...register("gender")}>
            <option  value="unknown">Unknown</option>
            <option  value="male">Male</option>
            <option  value="female">Female</option>
            <option  value="other">Other</option>
          </select>
        </label>

        <button className='register-btn'>Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default RegisterPage