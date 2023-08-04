import { Link, Outlet } from "react-router-dom";
import DarkTheme from "../auth/DarkTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function GuestLayout() {
  return (
    <>
      {/* Theme section */}
      <div className="fixed top-4 right-4 md:top-10 md:right-10 z-20">
        <DarkTheme />
      </div>

      {/* use py-5 when form will over h-screen */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div>
          <Link to="/" className="flex items-center">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-4xl mr-2 text-blue-800"
              title={"App Name"}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {"App Name"}
            </span>
          </Link>
        </div>
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
          <Outlet />
        </div>
      </div>
    </>
  );
}
