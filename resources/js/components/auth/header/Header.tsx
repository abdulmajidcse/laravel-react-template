import { useState } from "react";
import HeaderBrand from "./HeaderBrand";
import SidebarMenuButton from "./SidebarMenuButton";
import VisitSiteLink from "./VisitSiteLink";
import HeaderSearchbar from "./HeaderSearchbar";
import DarkTheme from "./../DarkTheme";
import TopbarMenuToggleButton from "./TopbarMenuToggleButton";
import HeaderMainMenu from "./HeaderMainMenu";

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [mobileMenuOpenIs, setMobileMenuOpenIs] = useState<boolean>(false);

  const mobileMenuClose = () => setMobileMenuOpenIs(false);
  const toggleMobileMenuOpen = () =>
    setMobileMenuOpenIs((prevState) => !prevState);

  return (
    <>
      <header className="p-4 text-base border-b border-slate-900/10 dark:border-slate-300/10 fixed top-0 z-40 w-full flex-none bg-white dark:bg-slate-800">
        {/* navbar */}
        <nav className="flex justify-between mx-1">
          <HeaderBrand />
          {/* menu wrapper for mobile menu */}
          <div className="flex justify-between lg:w-[calc(100%-15rem)]">
            <ul className="flex">
              <li>
                <SidebarMenuButton onClick={onToggleSidebar} />
              </li>
              <li>
                <VisitSiteLink />
              </li>
              <li>
                <HeaderSearchbar />
              </li>
              <li>
                <DarkTheme />
              </li>
              {/* mobile menu toggle button */}
              <li className="lg:hidden">
                <TopbarMenuToggleButton onClick={toggleMobileMenuOpen} />
              </li>
            </ul>

            <HeaderMainMenu
              mobileMenuOpenIs={mobileMenuOpenIs}
              onClick={mobileMenuClose}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
