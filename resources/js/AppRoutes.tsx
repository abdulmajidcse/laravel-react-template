import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FrontendLayout from "./components/layouts/FrontendLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Dashboard from "./pages/auth/Dashboard";
import GuestLayout from "./components/layouts/GuestLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import Tables from "./pages/auth/Tables";
import Forms from "./pages/auth/Forms";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontendLayout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                <Route path="auth" element={<GuestLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route path="auth" element={<AuthLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="tables" element={<Tables />} />
                    <Route path="forms" element={<Forms />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
