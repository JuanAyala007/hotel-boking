import { Navigate, Outlet } from "react-router-dom"


const ProtetedRoutes = () => {

    if(localStorage.getItem("token")) {
        return <Outlet />
    } else {
        return <Navigate  to={"/login"}/>
    }
  return (
    <div>ProtetedRoutes</div>
  )
}

export default ProtetedRoutes