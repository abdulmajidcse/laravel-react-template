import { Link, useNavigate } from "react-router-dom";
import { type FormEvent } from "react";

export default function Register() {
  const navigate = useNavigate();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/auth");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* Name */}
        <div>
          <label
            className="block font-medium text-sm text-gray-700 dark:text-gray-300"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full"
            id="name"
            type="text"
            name="name"
            required
          />
        </div>
        {/* Email Address */}
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700 dark:text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full"
            id="email"
            type="email"
            name="email"
            required
          />
        </div>
        {/* Password */}
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700 dark:text-gray-300"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full"
            id="password"
            type="password"
            name="password"
            required
            autoComplete="new-password"
          />
        </div>
        {/* Confirm Password */}
        <div className="mt-4">
          <label
            className="block font-medium text-sm text-gray-700 dark:text-gray-300"
            htmlFor="password_confirmation"
          >
            Confirm Password
          </label>
          <input
            className="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm block mt-1 w-full"
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="agree_terms" className="inline-flex items-center">
            <input
              id="agree_terms"
              type="checkbox"
              className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"
              name="agree_terms"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              I agree to your
              <a
                href="#"
                className="text-blue-800 dark:text-blue-400 hover:underline"
              >
                Terms
              </a>
              ,
              <a
                href="#"
                className="text-blue-800 dark:text-blue-400 hover:underline"
              >
                Privacy Policy
              </a>
              and
              <a
                href="#"
                className="text-blue-800 dark:text-blue-400 hover:underline"
              >
                Cookies Policy
              </a>
            </span>
          </label>
        </div>
        <div className="flex items-center justify-end mt-4">
          <Link
            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
            to="/auth/login"
          >
            Already registered?
          </Link>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-700 dark:bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ml-4"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
}
