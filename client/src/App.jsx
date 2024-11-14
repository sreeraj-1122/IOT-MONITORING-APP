import { Routes, Route, useNavigate } from "react-router-dom";
import CommonLayout from "./Layout/CommonLayout";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import Register from "./pages/Auth page/Register";
import Login from "./pages/Auth page/Login";
import Hero from "./components/Hero";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardLayout from "./Layout/DashboardLayout";
import { useContext, useEffect } from "react";
import AuthContext from "./contexts/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard', { replace: true });
    }
  }, [isLoggedIn, navigate]);
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
          <Route path="" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
};

export default App;
