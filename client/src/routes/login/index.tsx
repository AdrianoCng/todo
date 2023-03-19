import { Navigate } from "react-router-dom";

import { routes } from "../../constants";
import LoginForm from "../../containers/login-form/LoginForm";
import { useAuthContext } from "../../contexts/AuthContext";

export default function LoginPage() {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={routes.home} />;
    }

    return <LoginForm />;
}
