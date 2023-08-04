import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function TopbarMenuToggleButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={onClick}
      >
        <span className="sr-only">Topbar menu</span>
        <FontAwesomeIcon icon={faCircleChevronDown} />
      </button>
    </>
  );
}
