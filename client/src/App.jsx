import { Routes, Route, useNavigate } from "react-router-dom";
import CommonLayout from "./Layout/CommonLayout";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import Register from "./pages/Auth page/Register";
import Login from "./pages/Auth page/Login";
import Hero from "./components/Hero";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from "./Layout/DashboardLayout";
import DevicePage from "./pages/Device Page/DevicePage";
import DashboardPage from './pages/Dashboard/DashboardPage';
import UserProfile from "./pages/Profile page/UserProfile";

const App = () => {
  
  return (
    <>
     <ToastContainer />
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route path= "" element={<Hero />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="" element={<DashboardPage/>}/>
          <Route path="devices" element={<DevicePage />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
};

export default App;
