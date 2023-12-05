import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvaider";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return (
        <div className="flex justify-center my-32">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
        )
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;