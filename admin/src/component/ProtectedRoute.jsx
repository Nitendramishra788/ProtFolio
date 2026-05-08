import {Navigate} from "react-router-dom";

function ProtectedRoute({isLoggedIn , children}) {
  
    if(!isLoggedIn){
        return <Navigate  to="/admin/login" />;
    }

    return children;
}

export default ProtectedRoute;