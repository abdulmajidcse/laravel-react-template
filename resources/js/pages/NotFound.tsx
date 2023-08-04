import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2 className="text-xl">404 | Not Found</h2>
      <Link
        to="/"
        className="text-blue-500 hover:underline hover:text-yellow-500"
      >
        Back to home
      </Link>
    </>
  );
}
