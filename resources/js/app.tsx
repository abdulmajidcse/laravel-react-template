import "./bootstrap";
import "./assets/css/main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRoutes />
            <ToastContainer />
        </Provider>
    </React.StrictMode>
);
