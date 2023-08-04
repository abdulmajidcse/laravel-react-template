import { Tooltip } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function VisitSiteLink() {
  return (
    <>
      <Tooltip content="Visit site">
        <Link
          to="/"
          className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Visit site</span>
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </Tooltip>
    </>
  );
}
