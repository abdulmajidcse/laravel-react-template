import type { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

interface SidebarLinkProps {
  name: string;
  active: boolean;
  to: string;
  icon?: IconDefinition;
  topLinkIs?: boolean;
  rightLabel?: ReactElement;
}

export default function SidebarLink({
  name,
  active,
  to,
  icon = faCircle,
  topLinkIs = true,
  rightLabel,
}: SidebarLinkProps) {
  return (
    <>
      <li className={`${topLinkIs ? "mb-1" : ""}`}>
        <Link
          to={to}
          className={`${
            topLinkIs ? "top-link" : "sub-link"
          } flex items-center lg:leading-6 relative rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 ${
            active ? "active" : ""
          }`}
        >
          <div className="mr-2 shadow-sm dark:highlight-white/10">
            <FontAwesomeIcon
              icon={icon ?? faCircle}
              className={`${topLinkIs ? "text-lg" : ""}`}
            />
          </div>
          {name} {rightLabel}
        </Link>
      </li>
    </>
  );
}
