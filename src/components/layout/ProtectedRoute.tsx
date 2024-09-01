import { logOut, useGetCurrentToken } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { jwtDecode } from "jwt-decode";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TProtectedRouteProps = {
  children: ReactNode;
  role?: "user" | "admin";
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const token = useAppSelector(useGetCurrentToken);
  const dispatch = useAppDispatch();

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  const user = jwtDecode(token! as string);
  console.log(user.role);

  if (role !== undefined && role !== user?.role) {
    dispatch(logOut());
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoute;
