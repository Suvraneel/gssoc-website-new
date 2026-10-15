import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Portal, Tooltip } from "@chakra-ui/react";
import MoreMenu from "./MoreMenu";
import ThemeChanger from "./Toggler";
import { asset } from "../lib/asset";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="flex items-center justify-between transition-colors flex-wrap bg-white drop-shadow-xl p-1 mb-10 dark:bg-black dark:text-white dark:transition-colors sticky top-0 z-10">
        <div className="flex items-center p-1.5 ml-5">
          <Link href="/" className="inline-flex items-center">
            <span className="text-xl font-bold uppercase tracking-wide">
              {theme === "light" ? (
                <img
                  style={{ width: "200px" }}
                  id="Learn_more"
                  src={asset("/GS_logo_Black.svg")}
                  alt="GSSoC logo light"
                />
              ) : (
                <img
                  style={{ width: "200px" }}
                  id="Learn_more"
                  src={asset("/GS_logo_White.svg")}
                  alt="GSSoC logo dark"
                />
              )}
            </span>
          </Link>
        </div>
        <button
          className="inline-flex p-2.5 hover:bg-orange-600 rounded-sm lg:hidden text-grey-700 dark:text-white"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? " " : "hidden"
          }   w-full lg:inline-flex lg:grow lg:w-auto text-center`}
        >
          <div className="flex flex-col lg:flex-row lg:ml-auto lg:w-auto items-center mr-6">
            <Link
              href="/"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              ABOUT
            </Link>
            <Link
              href="/project"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              PROJECT
            </Link>
            <Link
              href="/#Sponsors"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              SPONSORS
            </Link>
            <Link
              href="/schedule"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              SCHEDULE
            </Link>
            <Link
              href="/leaderboard"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              LEADERBOARD
            </Link>
            <Link
              href="/faq"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              FAQ
            </Link>
            <Link
              href="/team"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              TEAM
            </Link>
            <Link
              href="/blog"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              onClick={handleClick}
              className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded-sm text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
            >
              CONTACT
            </Link>
            <div className="lg:inline-flex lg:w-auto w-full px-2 text-center rounded-sm">
              <MoreMenu handleClick={handleClick} />
            </div>
            <div className="hidden lg:block">
              <Tooltip.Root
                openDelay={0}
                closeDelay={0}
                positioning={{ placement: "bottom" }}
              >
                <Tooltip.Trigger asChild>
                  <div>
                    <ThemeChanger />
                  </div>
                </Tooltip.Trigger>
                <Portal>
                  <Tooltip.Positioner>
                    {/* v2 look: gray.700 bg, sm text, sm radius */}
                    <Tooltip.Content
                      bg="#2D3748"
                      color="whiteAlpha.900"
                      px={2}
                      py={0.5}
                      borderRadius="sm"
                      textStyle="sm"
                    >
                      Change Theme
                    </Tooltip.Content>
                  </Tooltip.Positioner>
                </Portal>
              </Tooltip.Root>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
