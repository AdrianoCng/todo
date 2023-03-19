import { createContext, useContext, useState } from "react";

interface IAuthContext {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuthContext must be used within a AuthContextProvider");
    }

    return context;
};

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("access_token"));

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}
