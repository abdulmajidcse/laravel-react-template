import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h2 className="text-xl">
                Welcome to {import.meta.env.VITE_APP_NAME}
            </h2>
            <Link
                to="/auth"
                className="text-blue-500 hover:underline hover:text-yellow-500"
            >
                Go to Dashboard
            </Link>
        </>
    );
}
