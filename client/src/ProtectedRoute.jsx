import { useContext } from "react";
import { AuthContext } from "./context/Auth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
