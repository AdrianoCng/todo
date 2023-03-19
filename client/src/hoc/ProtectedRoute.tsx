import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../constants";

export default function ProtectedRoute() {
    const isAuthenticated = !!localStorage.getItem("access_token");

    if (!isAuthenticated) {
        return <Navigate to={routes.login()} />;
    }

    return <Outlet />;
}
