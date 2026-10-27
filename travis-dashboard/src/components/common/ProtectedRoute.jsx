import {Navigate} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

function ProtectedRoute({children, allowedRoles}){
    const {currentUser, userData, loading } = useAuth();

    if(loading){
        return(
            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
                Checking access permissions ...
            </div>
        );
    }

    if (!currentUser || !userData){
        return <Navigate to="/admin/login" replace />;
    }

    if (!allowedRoles.includes(userData.role_id)){
        return <Navigate to ="/unauthorized" replace />;
    }

    return  children;
}

export default ProtectedRoute;