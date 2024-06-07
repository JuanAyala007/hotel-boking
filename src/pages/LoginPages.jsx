import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import UserLogged from "../components/loginPage/UserLogged"
import { useState } from "react";
import '../components/styles/LoginPage.css'



const LoginPages = () => {
const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
const {register, handleSubmit, reset} = useForm()
const {loginUser} = useAuth()

const submit = data => {
  loginUser(data)
  reset({
    email: "",
    password: ""
  })

}
  if(localStorage.getItem("token")) {
    return (<UserLogged user={user} setUser={setUser}/>
  )}



  return (
    <div className="login-container">
      <div className="login-card">
      <form className="card-form" onSubmit={handleSubmit(submit)}>
        <div className="card-div">

        <label className="login-label">
          <span className="login-span">Email</span>
          <input className="login-input" {...register("email")} type="email" />
        </label>

        <label className="login-label">
          <span className="login-span">Password</span>
          <input className="login-input" {...register("password")} type="password" />
        </label>

        <button className="login-btn">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )

}

export default LoginPages