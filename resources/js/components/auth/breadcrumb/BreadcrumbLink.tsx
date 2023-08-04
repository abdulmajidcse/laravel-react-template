import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default function BreadcrumbLink({
  name,
  icon = faAngleRight,
  disabled = false,
}: {
  name: string;
  icon?: IconDefinition;
  disabled?: boolean;
}) {
  return (
    <>
      {disabled ? (
        <li aria-current="page">
          <div className="flex items-center">
            <FontAwesomeIcon icon={icon} className="text-slate-400" />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              {name}
            </span>
          </div>
        </li>
      ) : (
        <li className="inline-flex items-center">
          <Link
            to="/auth"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FontAwesomeIcon icon={icon} />
            <span className="ml-2">{name}</span>
          </Link>
        </li>
      )}
    </>
  );
}
