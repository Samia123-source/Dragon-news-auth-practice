import { useContext } from "react"
import { AuthContext } from "../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    if(user) {
        return children;
    }
 return <Navigate to= '/login'></Navigate>
}

export default PrivateRoute