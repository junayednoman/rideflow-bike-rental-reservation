import { logOut, useGetCurrentToken } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TJwtPayload } from "@/types";
import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

type TProtectedRouteProps = {
  children: ReactNode;
  role?: "user" | "admin";
};

const ProtectedRoute = ({ children, role }: TProtectedRouteProps) => {
  const location = useLocation();
  const token = useAppSelector(useGetCurrentToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token && location?.state?.message) {
      toast(location?.state?.message, { duration: 2000 });
    }
  }, [location?.state?.message, token]);

  if (!token) {
    return (
      <Navigate
        to={"/login"}
        state={{ targetPath: location.pathname }}
        replace
      />
    );
  }

  const user = jwtDecode(token! as string) as TJwtPayload;

  if (role !== undefined && role !== user?.role) {
    dispatch(logOut());
    return (
      <Navigate
        to={"/login"}
        state={{ targetPath: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
