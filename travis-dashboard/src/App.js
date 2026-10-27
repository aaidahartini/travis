import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import CommuterPage from "./pages/CommuterPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./components/common/ProtectedRoute";

function App(){
  return(
    <AuthProvider>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommuterPage />} />

        {/*Admin Login*/}
        <Route 
          path="/admin/login" 
          element={<AdminLoginPage/>} />
          
        <Route 
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["role_admin"]}>
              <AdminDashboard/>
            </ProtectedRoute>
          }
          />

          <Route
            path="/authorities/dashboard"
            element={
              <ProtectedRoute allowedRoles={["role_authority"]}>
                <h1>Authorities Dashboard</h1>
              </ProtectedRoute>
            }
            />
            <Route 
              path="/unauthorized"
              element={
                <div className="p-8">
                  <h1 className="text-2xl font-bold text-red-600">
                    Access Denied
                  </h1>

                  <p className="mt-2">
                    You do not have permission to access this page
                  </p>
                </div>
              }
              />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;