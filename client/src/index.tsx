import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { todosKeys } from "./api";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles, { theme } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient({
    defaultOptions: {
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
                    <App />
                </ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
