import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactElement } from "react";

export default function Loading({
  title = "Please wait...",
}: {
  title?: ReactElement | string;
}) {
  return (
    <>
      <div className="fixed h-screen w-full top-0 left-0 z-[500] flex justify-center items-center backdrop-blur-sm">
        <button
          disabled
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          <FontAwesomeIcon
            icon={faRotate}
            className="text-white animate-spin"
          />
          <span className="ml-2">{title}</span>
        </button>
      </div>
    </>
  );
}
