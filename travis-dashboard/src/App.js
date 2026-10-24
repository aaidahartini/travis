import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import CommuterPage from "./pages/CommuterPage";
import AdminLoginPage from "./pages/AdminLoginPage";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommuterPage />} />

        {/*Admin Login*/}
        <Route 
          path="/admin/login" 
          element={<AdminLoginPage/>} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;