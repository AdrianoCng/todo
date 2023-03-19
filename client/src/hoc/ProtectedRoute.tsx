import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../constants";
import { useAuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute() {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={routes.login()} />;
    }

    return <Outlet />;
}
