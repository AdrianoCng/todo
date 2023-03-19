import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { todosKeys } from "./api";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles, { theme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { AxiosError } from "axios";
import { routes } from "./constants";
import AuthContextProvider from "./contexts/AuthContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Temporarely logout if not authorized
            onError(err) {
                if (err instanceof AxiosError) {
                    if (!err.response) return;

                    if (err.response.status !== 403) return;

                    window.location.assign(routes.login());
                }
            },
            retry(failureCount, error) {
                if (error instanceof AxiosError) {
                    if (!error.response) return failureCount < 3;

                    if (error.response.status === 403) return false;
                }

                return failureCount < 3;
            },
        },
        mutations: {
            onSuccess() {
                queryClient.invalidateQueries(todosKeys.all());
            },
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
