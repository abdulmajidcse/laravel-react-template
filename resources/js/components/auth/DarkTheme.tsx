import { Tooltip } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useDarkTheme from "./../../hooks/useDarkTheme";

export default function DarkTheme() {
  const [darkThemeIs, updateTheme] = useDarkTheme();

  return (
    <>
      {darkThemeIs ? (
        <Tooltip content="Switch to light theme">
          <button
            id="light_theme"
            onClick={() => updateTheme("light")}
            type="button"
            className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Light theme</span>
            <FontAwesomeIcon
              icon={faSun}
              className="text-gray-500 dark:text-gray-400"
            />
          </button>
        </Tooltip>
      ) : (
        <Tooltip content="Switch to dark theme">
          <button
            id="dark_theme"
            onClick={() => updateTheme("dark")}
            type="button"
            className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Dark theme</span>
            <FontAwesomeIcon
              icon={faMoon}
              className="text-gray-500 dark:text-gray-400"
            />
          </button>
        </Tooltip>
      )}
    </>
  );
}
