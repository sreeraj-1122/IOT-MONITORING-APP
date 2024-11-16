// AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token')); 
  const [user, setUser] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      setIsLoggedIn(true);
    }

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    setIsLoggedIn(true); 
    navigate('/dashboard', { replace: true });
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout,user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
