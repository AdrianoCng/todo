import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { todosKeys } from "./api";

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
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
