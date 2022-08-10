import React from "react";
import { isExpired } from "react-jwt";
import { Navigate, Outlet } from "react-router-dom";

function useAuth() {
  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user")!);

    try {
      const isMyTokenExpired: boolean = isExpired(user.token);

      if (isMyTokenExpired) {
        localStorage.removeItem("user");
        return false;
      }
      if (user.role !== "ADMIN" && user.role !== "COORDENADOR") {
        return false;
      }
      return true;
    } catch (e) {
      localStorage.removeItem("user");
      return false;
    }
  }
  return false;
}

export default function CoordAndUp() {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/not-found" />;
}
