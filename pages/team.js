import React, { useState, useEffect } from "react";
import { Box, Skeleton, SkeletonCircle, Spacer } from "@chakra-ui/react";
import Head from "next/head";
import { asset } from "../lib/asset";

// GSSoC 2022 snapshot: only these editions are published, newest first
const YEARS = ["2022", "2021", "2020", "2019"];
const FALLBACK_PHOTO = asset("/GS_Foundation_logo_Black.svg");

// Some links were saved without a scheme and would resolve as relative paths
const withScheme = (url) =>
  /^https?:\/\//i.test(url) ? url : `https://${url}`;

const Team = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async (year) => {
    const safeYear = YEARS.includes(String(year)) ? String(year) : YEARS[0];
    let url = asset(`/team_data/team${safeYear}.json`);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setUsers(await response.json());
    } catch (err) {
      console.error(`Could not load the ${safeYear} team`, err);
      setUsers([]);
    }
  };

  useEffect(() => {
    var customQuery = window.location.href.split("#")[1]; // Direct link to /team#20XX
    // Unknown or missing years fall back to 2022 (the snapshot edition)
    customQuery ? getUsers(customQuery) : getUsers("2022");
  }, []);

  return (
    <>
      <Head>
        <title>
          Team | GirlScript Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="GirlScript Summer of Code Team" />
        {/* <link
          rel="icon"
          href="https://user-images.githubusercontent.com/63473496/153487849-4f094c16-d21c-463e-9971-98a8af7ba372.png"
        /> */}
      </Head>
      <div className="items-center justify-center">
        <div className="font-sans text-center text-2xl font-extrabold text-black-100">
          <div className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row mb-10 underline decoration-orange-500  underline-offset-8">
            <h1 className="text-primary_orange-0">Meet the&nbsp;</h1>
            <h1>Team </h1>
          </div>
          <p className=" text-primary_orange-0">
            Individuals can and do make a difference, <br />
            but it takes a team to really mess things up
          </p>
        </div>
      </div>
      <Spacer mt={10} />
      <div className="flex flex-row justify-center flex-wrap items-center gap-5">
        <a>
          <button
            className="bg-linear-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium hover:bg-linear-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded-sm md:text-2xl md:py-4 rounded-sm md:text-2xl md:py-6"
            onClick={() => getUsers(2022)}
          >
            2022
          </button>
        </a>
        <a>
          <button
            className="bg-linear-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium hover:bg-linear-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded-sm md:text-2xl md:py-4 rounded-sm md:text-2xl md:py-6"
            onClick={() => getUsers(2021)}
          >
            2021
          </button>
        </a>
        <a>
          <button
            className="bg-linear-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium hover:bg-linear-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded-sm md:text-2xl md:py-4 rounded-sm md:text-2xl md:py-6"
            onClick={() => getUsers(2020)}
          >
            2020
          </button>
        </a>
        <a>
          <button
            className="bg-linear-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium hover:bg-linear-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded-sm md:text-2xl md:py-4 rounded-sm md:text-2xl md:py-6"
            onClick={() => getUsers(2019)}
          >
            2019
          </button>
        </a>
      </div>
      <Spacer mt={20} />
      <div className="flex flex-row justify-center flex-wrap items-center gap-x-40 gap-y-10">
        {users.map((curElem, i) => {
          return (
            <React.Fragment key={i}>
              {curElem == null ? (
                <div
                  className="flex flex-col items-center justify-center w-80 h-80 gap-5"
                  key={i}
                >
                  <SkeletonCircle size="100px" />
                  <br />
                  <Skeleton>
                    <Box className="text-center px={4}"> Cogito ergo Sum </Box>
                  </Skeleton>
                  <Skeleton>
                    <Box className="text-center px={4}">
                      {" "}
                      Connection is power - DedSec
                    </Box>
                  </Skeleton>
                </div>
              ) : (
                <div className="flex items-center justify-center w-80" key={i}>
                  <div className="p-3 shadow-sm bg-primary_orange-0 rounded-xl w-full md:h-fit">
                    <div className="h-max rounded-lg shadow-lg md:h-96 relative bottom-7 hover:-translate-y-4 duration-300 hover:cursor-pointer">
                      <img
                        src={curElem.Image ? asset(curElem.Image) : FALLBACK_PHOTO}
                        alt={curElem.Name}
                        data-fallback={curElem.Image ? undefined : ""}
                        onError={(e) => {
                          // fall back once; stop if the logo itself fails
                          if (!e.currentTarget.src.endsWith(FALLBACK_PHOTO)) {
                            e.currentTarget.dataset.fallback = "";
                            e.currentTarget.src = FALLBACK_PHOTO;
                          }
                        }}
                        className="object-cover object-center w-full h-full data-fallback:aspect-square data-fallback:object-contain data-fallback:p-6 data-fallback:bg-white"
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="font-bold text-black md:text-xl">
                        {curElem["Name"] ?? curElem["Full name"]}
                      </div>
                      <p className="mb-3 text-lg text-white font-bold	md:text-base md:mb-4">
                        {curElem["Designation"]}
                      </p>

                      <div className="flex">
                        <div className="flex gap-4">
                          {!curElem["GitHub"]?.trim() ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={withScheme(curElem["GitHub"].trim())}
                            >
                              <svg
                                className="w-6 h-6 text-black fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                              </svg>
                            </a>
                          )}
                          {curElem.hasOwnProperty("Twitter") === false ||
                          curElem["Twitter"].trim() == "" ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={withScheme(curElem["Twitter"].trim())}
                            >
                              <svg
                                className="w-6 h-6 text-black fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                            </a>
                          )}
                          {!curElem["LinkedIn"]?.trim() ? (
                            <></>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={withScheme(curElem["LinkedIn"].trim())}
                            >
                              <svg
                                className="w-6 h-6 text-black fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                              >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <Spacer mt={20} />
    </>
  );
};

export default Team;
