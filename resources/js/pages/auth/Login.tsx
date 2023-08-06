import { type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate("/auth");
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                {/* Email Address */}
                <div className="mt-4">
                    <label className="label-gray" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input-indigo"
                        id="email"
                        type="email"
                        name="email"
                        required
                    />
                </div>
                {/* Password */}
                <div className="mt-4">
                    <label className="label-gray" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input-indigo"
                        id="password"
                        type="password"
                        name="password"
                        required
                        autoComplete="new-password"
                    />
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center"
                    >
                        <input
                            id="remember_me"
                            type="checkbox"
                            className="checkbox-indigo"
                            name="remember"
                        />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me
                        </span>
                    </label>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <a className="link-gray" href="#">
                        Forgot password?
                    </a>
                    <button type="submit" className="btn-blue">
                        Log In
                    </button>
                </div>
                <div className="flex justify-center mt-4 border-t border-gray-300 dark:border-gray-500">
                    <Link to="/auth/register" className="mt-3 btn-purple ml-4">
                        Create New Account
                    </Link>
                </div>
            </form>
        </>
    );
}
