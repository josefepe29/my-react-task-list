import { createContext, useEffect, useState } from "react";
import { registerPost, loginPost, verifyToken, logoutPost } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [auth, setAuth] = useState(false);

  const handleSignup = async (user) => {
    try {
      const res = await registerPost(user);
      setUser(res.data);
      setAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (user) => {
    try {
      const res = await loginPost(user);
      setUser(res.data);
      setAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    // Cookies.remove("token");
    try {
      await logoutPost();
      setAuth(false);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (cookies.token) {
        try {
          const res = await verifyToken(cookies.token);
          if (!res.data) return setAuth(false);
          setAuth(true);
          setUser(res.data);
        } catch (error) {
          setAuth(false);
          setUser(null);
        }
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ handleSignup, user, auth, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
