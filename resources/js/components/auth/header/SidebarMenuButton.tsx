import { Tooltip } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SidebarMenuButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <>
      <Tooltip content="Sidebar Menu">
        <button
          type="button"
          onClick={onClick}
          className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Sidebar menu</span>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </Tooltip>
    </>
  );
}
