import {
  faBarsStaggered,
  faCube,
  faGrip,
  faPenToSquare,
  faTableList,
  faToggleOff,
  faTriangleExclamation,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import SidebarDropdown from "./SidebarDropdown";
import SidebarHeading from "./SidebarHeading";

export default function Aside() {
  const location = useLocation();

  return (
    <>
      <aside className="lg:text-sm lg:leading-6 relative mt-8 ta-sidebar">
        <ul className="text-slate-900 dark:text-slate-300 text-base">
          <SidebarLink
            name="Dashboard"
            icon={faGrip}
            to="/auth"
            active={location.pathname === "/auth"}
          />
          <SidebarDropdown name="Page" icon={faFileLines} active={false}>
            <>
              <SidebarLink
                name="Blank"
                topLinkIs={false}
                active={false}
                to="/auth"
              />
              <SidebarDropdown name="Auth" topLinkIs={false} active={false}>
                <>
                  <SidebarLink
                    name="Register"
                    icon={faCircleDot}
                    topLinkIs={false}
                    active={false}
                    to="/auth/register"
                  />
                  <SidebarLink
                    name="Login"
                    icon={faCircleDot}
                    topLinkIs={false}
                    active={false}
                    to="/auth/login"
                  />
                </>
              </SidebarDropdown>
              <SidebarLink
                name="404 Error"
                topLinkIs={false}
                active={false}
                to="/auth"
              />
              <SidebarLink
                name="500 Error"
                topLinkIs={false}
                active={false}
                to="/auth"
              />
            </>
          </SidebarDropdown>
          <SidebarLink
            name="Forms"
            icon={faPenToSquare}
            rightLabel={
              <span className="bg-red-600 dark:bg-red-800 text-white/80 dark:text-white/50 text-sm font-semibold px-2 py-0.5 rounded absolute right-2">
                New
              </span>
            }
            active={location.pathname === "/auth/forms"}
            to="/auth/forms"
          />
          <SidebarLink
            name="Tables"
            icon={faTableList}
            to="/auth/tables"
            active={location.pathname === "/auth/tables"}
          />
          <SidebarHeading title="Components" />
          <SidebarLink
            name="Alerts"
            icon={faTriangleExclamation}
            active={false}
            to="/auth"
          />
          <SidebarLink
            name="Buttons"
            icon={faToggleOff}
            active={false}
            to="/auth"
          />
          <SidebarLink
            name="Cards"
            icon={faBarsStaggered}
            active={false}
            to="/auth"
          />
          <SidebarLink name="Modals" icon={faCube} active={false} to="/auth" />
        </ul>
      </aside>
    </>
  );
}
