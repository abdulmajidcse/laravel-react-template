import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

interface SidebarDropdownProps {
  name: string;
  active: boolean;
  children: ReactElement;
  icon?: IconDefinition;
  topLinkIs?: boolean;
}

export default function SidebarDropdown({
  name,
  active,
  children,
  icon = faCircle,
  topLinkIs = true,
}: SidebarDropdownProps) {
  const [openIs, setOpenIs] = useState<boolean>(false);

  const toggleMenu = () => setOpenIs((prevState) => !prevState);

  useEffect(() => {
    setOpenIs(active);
  }, [active]);

  return (
    <>
      <li className={`${topLinkIs ? "mb-1" : ""}`}>
        <div
          className={`${
            topLinkIs ? "top-link" : "sub-link"
          } flex items-center lg:leading-6 relative rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 cursor-pointer ${
            openIs ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          <div className="mr-2 shadow-sm dark:highlight-white/10">
            <FontAwesomeIcon
              icon={icon ?? faCircle}
              className={`${topLinkIs ? "text-lg" : ""}`}
            />
          </div>
          {name}
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={`absolute right-2 ${openIs ? "-rotate-90" : ""}`}
          />
        </div>
        {/* dropdown menu */}
        <ul className={`my-1 ${openIs ? "block" : "hidden"}`}>{children}</ul>
      </li>
    </>
  );
}
