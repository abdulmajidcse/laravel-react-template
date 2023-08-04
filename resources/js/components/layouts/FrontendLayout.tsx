import DarkTheme from "../auth/DarkTheme";
import { Outlet } from "react-router-dom";

export default function FrontendLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-slate-300">
        {/* Theme section */}
        <div className="fixed top-4 right-4 md:top-10 md:right-10 z-20">
          <DarkTheme />
        </div>
        <Outlet />
      </div>
    </>
  );
}
