import { Route, Routes } from "react-router-dom";
import Homepage from "./routes";
import LoginPage from "./routes/login";
import { routes } from "./constants";
import ProtectedRoute from "./hoc/ProtectedRoute";

function App() {
    return (
        <Routes>
            <Route path={routes.login()} element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path={routes.home} element={<Homepage />} />
            </Route>
        </Routes>
    );
}

export default App;
