import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./routes";
import LoginPage from "./routes/login";

function App() {
    return (
        <Routes>
            <Route path="/projects/todo-app-express/login" element={<LoginPage />} />
            <Route path="/projects/todo-app-express" element={<Homepage />} />
        </Routes>
    );
}

export default App;
