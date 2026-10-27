import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminDashboard(){
    const navigate = useNavigate();
    const { currentUser, userData, logout } = useAuth();

    async function  handleLogout() {
        try{
            await logout();
            navigate("/admin/login", {replace: true});
        } catch(error){
            console.error("Logout failed", error);
        }
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8 text-slate-900">
            <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
                <h1 className="mb-4 text-3xl font-bold text-blue-600">
                    TRAVIS ADMIN DASHBOARD
                </h1>
                
                <p className="mb-2">
                    <strong>Authentication successful</strong>
                </p>

                <p className="mb-2">
                    <strong>Email:</strong>{currentUser?.email}
                </p>
                <p className="mb-2">
                    <strong>Role:</strong>{userData?.role_id}
                </p>
                <p className="mb-6">
                    <strong>Approval:</strong>{userData?.approval_status}
                </p>

                <button 
                    onClick={handleLogout}
                    className="rounded-lg bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700">
                        Logout
                </button>
            </div>
        </div>
    );
}

export default AdminDashboard;