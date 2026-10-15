import Link from "next/link";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MoreMenu = ({ handleClick }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="lg:inline-flex lg:w-auto w-full py-2 text-center rounded-sm text-grey-800 text-1xl font-medium hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
          MORE
          {/* 1em box like the old Chakra icon; shrink-7 scales the bolder FA glyph to the old chevron's size */}
          <FontAwesomeIcon
            icon={faChevronDown}
            transform="shrink-7"
            className="-mr-1 mt-1 ml-2 motion-safe:hover:animate-ping"
            style={{ width: "1em", height: "1em", verticalAlign: "middle" }}
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      {/* modal={false}: headlessui 2 locks page scroll while open by default; v1 did not */}
      <MenuItems
        transition
        modal={false}
        className="origin-top-right absolute -right-5 mt-2 w-56 rounded-md shadow-lg dark:bg-black ring-1 bg-white ring-black/5 focus:outline-hidden transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            {({ focus }) => (
              <Link
                href="/codeofconduct"
                onClick={handleClick}
                className={classNames(
                  focus
                    ? "hover:text-primary_orange-0 dark:hover:text-primary_orange-0 dark:text-white"
                    : "hover:text-primary_orange-0 dark:text-white",
                  "block px-4 py-2 text-sm cursor-pointer"
                )}
              >
                CODE OF CONDUCT
              </Link>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <Link
                href="/info"
                onClick={handleClick}
                className={classNames(
                  focus
                    ? "hover:text-primary_orange-0 dark:hover:text-primary_orange-0 dark:text-white"
                    : "hover:text-primary_orange-0 dark:text-white",
                  "block px-4 py-2 text-sm cursor-pointer"
                )}
              >
                HOW GSSOC WORKS ?
              </Link>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <Link
                href="/event"
                onClick={handleClick}
                className={classNames(
                  focus
                    ? "hover:text-primary_orange-0 dark:hover:text-primary_orange-0 dark:text-white"
                    : "hover:text-primary_orange-0 dark:text-white",
                  "block px-4 py-2 text-sm cursor-pointer"
                )}
              >
                EVENTS
              </Link>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <Link
                href="/campus_ambassador"
                onClick={handleClick}
                className={classNames(
                  focus
                    ? "hover:text-primary_orange-0 dark:hover:text-primary_orange-0 dark:text-white"
                    : "hover:text-primary_orange-0 dark:text-white",
                  "block px-4 py-2 text-sm cursor-pointer"
                )}
              >
                CAMPUS AMBASSADORS
              </Link>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <Link
                href="/verify_cert"
                onClick={handleClick}
                className={classNames(
                  focus
                    ? "hover:text-primary_orange-0 dark:hover:text-primary_orange-0 dark:text-white"
                    : "hover:text-primary_orange-0 dark:text-white",
                  "block px-4 py-2 text-sm cursor-pointer"
                )}
              >
                VERIFY CERTIFICATIONS
              </Link>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default MoreMenu;
