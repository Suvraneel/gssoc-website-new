import {
  Dialog,
  Portal,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Spinner,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import Confetti from "react-confetti";
import Pagination from "react-js-pagination";
const columns = [
  { id: "position", label: "Rank", minWidth: 50 },
  { id: "avatar", label: "Avatar", minWidth: 50 },
  { id: "username", label: "GitHub Username", minWidth: 170 },

  {
    id: "prnums",
    label: "No. Of PRs",
    minWidth: 100,
    align: "center",
  },
  {
    id: "score",
    label: "Score",
    minWidth: 100,
    align: "right",
  },
  {
    id: "viewBtn",
    label: "",
    minWidth: 100,
    align: "right",
  },
];

function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  var getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [getWindowDimensions, hasWindow]);

  return windowDimensions;
}

function Leaderboard() {
  const { theme } = useTheme();
  let [totalData, setTotalData] = useState([]);
  let [leaderss, setLeaderss] = useState([]);
  let [searchData, setSearchData] = useState([]);
  let [links, setLinks] = useState([]);
  let [login, setLogin] = useState("");
  let [score, setScore] = useState("");
  let [avatar, setAvatar] = useState("");
  let [lastupdated, setLastupdated] = useState("");
  let [filter, setFilter] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [isLboardLoading, setIsLboardLoading] = useState(false);
  let [loadingMsg, setLoadingMsg] = useState("Sent request to the server");
  let [showConfetti, setShowConfetti] = useState(false);
  const [openn, setOpenn] = React.useState(true);
  const [activePage, setActivePage] = useState(1);
  const { height, width } = useWindowDimensions();
  const [itemsPerPage, setItemsPerPage] = useState(50); // default items per page
  let rows = [];

  function createData(
    username,
    avatar,
    prnums,
    score,
    profile_url,
    prlinks,
    level0,
    level1,
    level2,
    level3,
    level4,
    rank
  ) {
    return {
      username,
      avatar,
      prnums,
      score,
      profile_url,
      prlinks,
      level0,
      level1,
      level2,
      level3,
      level4,
      rank,
    };
  }
  useEffect(() => {
    setIsLoading(true);
    setIsLboardLoading(true);
    setTimeout(function () {
      setLoadingMsg("Waiting for response from server");
    }, 600);
    // clearTimeout(timeout)
    // Final GSSoC 2022 leaderboard, frozen when the program ended; lazy-loaded as its own chunk
    import("./api/leaderboard.json")
      .then((res) => {
        setLoadingMsg("Data received. Starting to populate.");
        setTimeout(function () {
          setIsLoading(false), 8000;
        });
        return res.default;
      })
      .then((data) => {
        // console.log(data.leaderboard);
        if (data.leaderboard.length === 0 && data.success === true) {
          setIsLoading(false);
          setIsLboardLoading(false);
          setLastupdated(null);
        } else {
          // stable sort: ties keep the order of the final 2022 file
          data.leaderboard.sort(function (a, b) {
            return b.score - a.score;
          });

          let blacklist = [];

          const rankedData = data.leaderboard
            .filter((usr) => {
              return blacklist.includes(usr.login) === false;
            })
            .map((contributorData, idx) => ({
              ...contributorData,
              rank: idx + 1,
            }));
          setLeaderss(rankedData.slice(0, itemsPerPage));
          setIsLboardLoading(false);
          setIsLoading(false);
          setTotalData(rankedData);
          setSearchData(rankedData);
          setOpenn(false);
          setLastupdated(data.updatedTimestring);
          setShowConfetti(true);
          setTimeout(function () {
            setShowConfetti(false);
          }, 5000);
        }
      });
  }, []);

  for (let leader in leaderss) {
    rows.push(
      createData(
        [leaderss[leader].login, leaderss[leader].url],
        leaderss[leader].avatar_url,
        leaderss[leader].pr_urls.filter((item, i, ar) => ar.indexOf(item) === i)
          .length,
        leaderss[leader].score,
        leaderss[leader].profile_url,
        leaderss[leader].pr_urls,
        leaderss[leader].level0,
        leaderss[leader].level1,
        leaderss[leader].level2,
        leaderss[leader].level3,
        leaderss[leader].level4,
        leaderss[leader].rank
      )
    );
  }

  const { open, onOpen, onClose } = useDisclosure();
  let handleClickOpen = (num) => {
    let prlinks = [];
    onOpen();
    for (let link in leaderss[num].pr_urls) {
      prlinks.push(leaderss[num].pr_urls[link] + "\n\n\n\n");
    }

    let unique = prlinks.filter((item, i, ar) => ar.indexOf(item) === i);
    setLinks(unique);
    // setLeveldata({
    //     level0: leaderss[num].level0,
    //     level1: leaderss[num].level1,
    //     level2: leaderss[num].level2,
    //     level3: leaderss[num].level3,
    //     level4: leaderss[num].level4,
    // });
    setLogin(leaderss[num].login);
    setAvatar(leaderss[num].avatar_url);
    setScore(leaderss[num].score);
  };

  const filterData = () => {
    setIsLboardLoading(true);
    if (filter === "" && leaderss.length !== totalData.length) {
      setSearchData(totalData);
      setActivePage(1);
      setIsLboardLoading(false);
    } else {
      const filtered = totalData.filter((leader) =>
        leader.login.toLowerCase().includes(filter.toLowerCase())
      );
      setSearchData(filtered);
      setActivePage(1);
      setIsLboardLoading(false);
    }
  };

  const handleClose = () => {
    setLinks([]);
    onClose();
  };

  const handlePageChange = (pageNumber) => {
    // console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    handlePageChange(0);
  };

  useEffect(() => {
    if ((activePage - 1) * itemsPerPage + itemsPerPage < searchData.length) {
      setLeaderss(
        searchData.slice(
          (activePage - 1) * itemsPerPage,
          (activePage - 1) * itemsPerPage + itemsPerPage
        )
      );
    } else {
      setLeaderss(searchData.slice((activePage - 1) * itemsPerPage));
    }
  }, [activePage, itemsPerPage, searchData]);

  return (
    <>
      <Head>
        <title>
          Leaderboard | GirlScript Summer of Code 2022 | GirlScript Foundation
          India
        </title>
        <meta
          name="description"
          content="Leaderboard of GirlScript Summer of Code 2022"
        />
      </Head>
      {isLoading && (
        <div className="loader-div">
          <div className="overlay dark:bg-darkmode_gray-0"></div>
          <div className="loader-group-container">
            <div className="loader-group dark:bg-black">
              <Spinner
                className="loader"
                borderWidth="6px"
                animationDuration="0.65s"
                css={{ "--spinner-track-color": "colors.gray.200" }}
                color="orange.500"
                size="xl"
              />
              <span className="loading-msg dark:text-white">{loadingMsg}</span>
            </div>
          </div>
        </div>
      )}
      {showConfetti && <Confetti className="fullscreen" />}
      <div
        className="container transition-colors mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-10 lg:px-20 2xl:px-32 dark:bg-darkmode_gray-0 dark:transition-colors "
        style={{ margin: "auto" }}
      >
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold">
            <div className="text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              <span className="text-primary_orange-0"> GSSoC 2022 </span>
              Top Performers
            </div>
          </div>
        </div>
        <div>
          {/* <Backdrop className={classes.backdrop} open={openn}>
            <CircularProgress color="inherit" />
          </Backdrop> */}
          <div className="py-5 px-0 xl:pb-12 xl:px-24 xl:pt-0 text-center">
            <div className="flex md:flex-row justify-between gap-y-1 gap-x-1 md:gap-x-2 items-center my-10">
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto">
                {totalData[1] === undefined && (
                  <>
                    <SkeletonCircle className="skeleton-circle-md" />
                    <SkeletonText mt="4" noOfLines={1} gap="4" height="2" />
                  </>
                )}
                {totalData[1] !== undefined && (
                  <>
                    <img
                      className="w-12 md:w-16 lg:w-24 rounded-full m-auto inline-block object-cover bg-white"
                      src={
                        totalData[1] !== undefined
                          ? totalData[1].avatar_url
                          : null
                      }
                      alt=""
                    />
                    <FontAwesomeIcon
                      className="invisible lg:visible w-8 h-8 rounded-full border-white absolute bottom-1/4 right-1/4 bg-amber-300 inline-block"
                      icon={faGithub}
                      size="2x"
                    />
                    <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md">
                      2.{" "}
                      {totalData[1] !== undefined ? totalData[1].login : null}
                    </h3>
                  </>
                )}
              </div>
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4  relative inline-block w-28 md:w-auto">
                {totalData[0] === undefined && (
                  <>
                    <SkeletonCircle className="skeleton-circle-lg" />
                    <SkeletonText mt="4" noOfLines={1} gap="4" height="2" />
                  </>
                )}

                {totalData[0] !== undefined && (
                  <>
                    <img
                      className="w-12 md:w-16 lg:w-40 rounded-full m-auto bg-white"
                      src={
                        totalData[0] !== undefined
                          ? totalData[0].avatar_url
                          : null
                      }
                      alt=""
                    />
                    <FontAwesomeIcon
                      className="invisible lg:visible w-10 h-10 rounded-full border-white absolute bottom-1/4 right-1/4 bg-cyan-200 inline-block"
                      icon={faGithub}
                      size="3x"
                    />
                    <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-4 text-xs sm:text-sm md:text-md">
                      1.{" "}
                      {totalData[0] !== undefined ? totalData[0].login : null}
                    </h3>
                  </>
                )}
              </div>
              <div className="bg-white shadow-2xl dark:bg-black rounded-md px-0 sm:px-3 py-2 md:px-16 lg:py-4 relative inline-block w-28 md:w-auto">
                {totalData[2] === undefined && (
                  <>
                    <SkeletonCircle className="skeleton-circle-md" />
                    <SkeletonText mt="4" noOfLines={1} gap="4" height="2" />
                  </>
                )}
                {totalData[2] !== undefined && (
                  <>
                    <img
                      className="w-12 md:w-16 lg:w-24 rounded-full m-auto bg-white"
                      src={
                        totalData[2] !== undefined
                          ? totalData[2].avatar_url
                          : null
                      }
                      alt=""
                    />
                    <FontAwesomeIcon
                      className="invisible lg:visible w-8 h-8 rounded-full border-white absolute bottom-1/4 right-1/4 bg-zinc-100 inline-block"
                      icon={faGithub}
                      size="2x"
                    />
                    <h3 className="text-black dark:text-primary_orange-0 font-semibold mt-2 text-xs sm:text-sm md:text-md">
                      3.{" "}
                      {totalData[2] !== undefined ? totalData[2].login : null}
                    </h3>
                  </>
                )}
              </div>
            </div>

            <div className="mt-10">
              {/* // remove this comment to add this pagination
            <div className="pagination-holder">
                  <Pagination
                    innerClass={
                      theme === "dark" ? "dark-theme pagination" : "pagination"
                    }
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={activePage}
                    activeClass="active-page"
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={searchData.length}
                    pageRangeDisplayed={width < 600 ? 3 : 5}
                    onChange={(e) => {
                      // console.log(e);
                      handlePageChange(e);
                    }}
                  />
                </div> */}

              <div className="flex mb-5">
                <div className="input-group relative flex flex-wrap items-stretch w-full">
                  <span className="relative flex items-center w-1/2 justify-start">
                    <label className=" mr-2 whites-nowrap text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400">
                      Showing
                    </label>
                    <select
                      className="relative bg-gray-300 dark:bg-neutral-600 text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400 items-center"
                      onInput={(e) => {
                        // console.log(e);
                        handleItemsPerPageChange(e);
                      }}
                      onChange={(e) => {
                        handlePageChange(1);
                      }}
                      value={itemsPerPage}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                      <option value="200">200</option>
                      <option value="500">500</option>
                      <option value="1000">1000</option>
                    </select>
                    <label className=" ml-2 whites-nowrap text-gray-900 dark:text-gray-200 font-large text-xxl hover:text-gray-400">
                      rows per page
                    </label>
                  </span>
                  <span className="relative flex w-1/2 justify-end">
                    <span className="relative search-container flex w-full justify-end">
                      <div className="relative flex search-container">
                        <input
                          onChange={(e) => {
                            setFilter(e.target.value);
                            filterData();
                          }}
                          value={filter}
                          id="searchInputField"
                          type="text"
                          className="form-control relative flex-auto min-w-0 block px-0.5 py-1.5 text-base dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-hidden dark:placeholder-neutral-300"
                          placeholder="Search"
                          onKeyUp={() => {
                            filterData();
                          }}
                        />
                        <span className="search-count dark:text-neutral-300">
                          {searchData.length}
                        </span>
                      </div>
                      <button
                        onMouseDown={() => {
                          setFilter("");
                        }}
                        onMouseUp={() => {
                          filterData();
                        }}
                        className="btn relative px-6 py-2.5 bg-gray-300 dark:bg-neutral-600 text-gray-600 font-medium text-xs leading-tight uppercase hover:text-gray-800 focus:outline-hidden focus:ring-0 transition duration-150 ease-in-out flex items-center"
                        type="button"
                        id="clearSearch"
                        style={{
                          padding: "10px 10px",
                          maxWidth: "35px",
                          width: "20%",
                        }}
                      >
                        <svg
                          className="w-4 fill-neutral-600 hover:fill-neutral-800 dark:fill-neutral-300 dark:hover:fill-neutral-100"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"></path>
                        </svg>
                      </button>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-sky-100 dark:bg-orange-200 px-1.5 py-1.5 rounded-md mb-3">
              <p className="text-sky-700 dark:text-orange-900 text-sm">
                {isLoading === false && lastupdated !== "" && (
                  <>
                    The leaderboard was last updated on: <b>{lastupdated}</b>
                  </>
                )}
                {isLoading === false && lastupdated === null && (
                  <>The server is updating. Please comeback after 5-10 mins</>
                )}
              </p>
            </div>

            {/* <Paper> */}
            <div className="w-full overflow-x-auto" /*component={Paper}*/>
              <div className="table w-full">
                <div className="table-header-group ">
                  <div className="table-row">
                    {columns.map((column) => (
                      <div
                        className="table-cell font-serif px-4 py-4 bg-black text-white dark:bg-primary_orange-0 dark:text-black"
                        key={column.id}
                        // align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </div>
                    ))}
                  </div>
                </div>
                {!isLboardLoading && (
                  <>
                    <div className="table-row-group">
                      {rows.map((row, i) => {
                        return (
                          // style = {{ display: rows.indexOf(row) === 0 || rows.indexOf(row) === 1 || rows.indexOf(row) === 2 ? "none" : null }
                          <React.Fragment key={i}>
                            {i % 2 ? (
                              <div
                                className="table-row"
                                role="checkbox"
                                aria-checked="false"
                                tabIndex={-1}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <div
                                      className="table-cell px-4 py-2 bg-orange-50 text-black  dark:bg-neutral-900 dark:text-white font-medium"
                                      key={column.id}
                                      // align={column.align}
                                      style={{ verticalAlign: "middle" }}
                                    >
                                      {column.id === "avatar" ? (
                                        <img
                                          className="w-9 cursor-pointer rounded-full m-auto bg-white"
                                          src={value}
                                          onClick={() => {
                                            handleClickOpen(rows.indexOf(row));
                                          }}
                                          alt={`${row.username[0]}'s avatar`}
                                        />
                                      ) : column.id === "position" ? (
                                        row.rank
                                      ) : column.id === "username" ? (
                                        <div className="flex relative left-6 md:left-12 lg:left-24">
                                          <FontAwesomeIcon
                                            className="mr-5"
                                            icon={faGithub}
                                            size="2x"
                                          />
                                          <a
                                            href={value[1]}
                                            target="_blank"
                                            className="no-underline username"
                                            style={{
                                              alignSelf: "center",
                                              cursor: "pointer",
                                            }}
                                            rel="noreferrer"
                                          >
                                            {value[0]}
                                          </a>
                                        </div>
                                      ) : column.id === "viewBtn" ? (
                                        <button
                                          onClick={() => {
                                            handleClickOpen(rows.indexOf(row));
                                          }}
                                          color="primary"
                                          className="view-btn"
                                          style={{
                                            background: "#FA6329",
                                            border: "none",
                                            padding: "5px 12px",
                                            color: "white",
                                            borderRadius: 5,
                                            cursor: "pointer",
                                            fontSize: "17px",
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faList} />
                                        </button>
                                      ) : (
                                        value
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            ) : (
                              <div
                                className="table-row"
                                role="checkbox"
                                aria-checked="false"
                                tabIndex={-1}
                                key={row.username}
                              >
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <div
                                      className="table-cell px-4 py-2 bg-leaderboardbg-0 text-black dark:bg-black dark:text-white font-medium"
                                      key={column.id}
                                      // align={column.align}
                                    >
                                      {column.id === "avatar" ? (
                                        <img
                                          className="w-9 cursor-pointer rounded-full m-auto bg-white"
                                          src={value}
                                          onClick={() => {
                                            handleClickOpen(rows.indexOf(row));
                                          }}
                                          alt={`${row.username[0]}'s avatar`}
                                        />
                                      ) : column.id === "position" ? (
                                        row.rank
                                      ) : column.id === "username" ? (
                                        <div className="flex relative left-6 md:left-12 lg:left-24">
                                          <FontAwesomeIcon
                                            className="mr-5"
                                            icon={faGithub}
                                            size="2x"
                                          />
                                          <a
                                            href={value[1]}
                                            className="no-underline username cursor-pointer"
                                            style={{ alignSelf: "center" }}
                                          >
                                            {value[0]}
                                          </a>
                                        </div>
                                      ) : column.id === "viewBtn" ? (
                                        <button
                                          onClick={() => {
                                            handleClickOpen(rows.indexOf(row));
                                          }}
                                          color="primary"
                                          className="view-btn"
                                          style={{
                                            background: "#FA6329",
                                            border: "none",
                                            padding: "5px 12px",
                                            color: "white",
                                            borderRadius: 5,
                                            cursor: "pointer",
                                            fontSize: "17px",
                                          }}
                                        >
                                          <FontAwesomeIcon icon={faList} />
                                        </button>
                                      ) : (
                                        value
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
              {isLboardLoading && (
                <Stack style={{ marginTop: "10px" }}>
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                  <Skeleton height="40px" />
                </Stack>
              )}
            </div>
            <div className="pagination-holder">
              <Pagination
                innerClass={
                  theme === "dark" ? "dark-theme pagination" : "pagination"
                }
                itemClass="page-item"
                linkClass="page-link"
                activePage={activePage}
                activeClass="active-page"
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={searchData.length}
                pageRangeDisplayed={width < 600 ? 3 : 5}
                onChange={(e) => {
                  // console.log(e);
                  handlePageChange(e);
                }}
              />
            </div>
            {theme === "dark" ? (
              <Dialog.Root
                lazyMount
                unmountOnExit
                open={open}
                onOpenChange={(e) => {
                  if (!e.open) handleClose();
                }}
              >
                <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                <Dialog.Content
                  backgroundColor="#000000"
                  maxW="2xl"
                  textStyle="md"
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <Dialog.Header
                    className="dark:text-white flex m-0 py-4 px-6 leading-relaxed"
                    id="alert-dialog-slide-title"
                    gap={0}
                    fontSize="xl"
                    fontWeight="semibold"
                  >
                    {login + "'s Stats"}
                  </Dialog.Header>
                  <Dialog.Body pb={2}>
                    <div className="flex-auto py-2 px-6 overflow-y-auto">
                      <div id="alert-dialog-slide-description">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            id="avatarImage"
                            alt={`${login}'s avatar`}
                            src={avatar}
                            className="w-24 rounded-full xl:w-28"
                          />
                          <p className="bg-orange-100 dark:bg-neutral-900 dark:text-white rounded-full p-3 text-center modal-score">
                            🏆 {score}
                          </p>
                        </div>
                        <div
                          style={{
                            marginTop: 30,
                            fontWeight: "bolder",
                            color: "white",
                          }}
                        >
                          List Of PRs:{" "}
                        </div>
                        {links.length !== 0 &&
                          links.map((link) => (
                            <a
                              className="pr-links text-white"
                              href={link}
                              key={link}
                            >
                              {link}
                            </a>
                          ))}
                      </div>
                    </div>
                    <div className="flex px-2 py-2 items-center justify-end">
                      <button
                        onClick={handleClose}
                        color="primary"
                        className="close-btn"
                        style={{
                          background: "#FA6329",
                          border: "none",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: 5,
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Body>
                </Dialog.Content>
                </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            ) : (
              <Dialog.Root
                lazyMount
                unmountOnExit
                open={open}
                onOpenChange={(e) => {
                  if (!e.open) handleClose();
                }}
              >
                <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                <Dialog.Content
                  maxW="xl"
                  textStyle="md"
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <Dialog.Header
                    className="dark:text-white flex m-0 py-4 px-6 leading-relaxed"
                    id="alert-dialog-slide-title"
                    gap={0}
                    fontSize="xl"
                    fontWeight="semibold"
                  >
                    {login + "'s Stats"}
                  </Dialog.Header>
                  <Dialog.Body pb={2}>
                    <div className="flex-auto py-2 px-4 overflow-y-auto">
                      <div id="alert-dialog-slide-description">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            alt={`${login}'s avatar`}
                            src={avatar}
                            className="w-24 rounded-full xl:w-28"
                          />
                          <p className="bg-orange-100 dark:bg-neutral-900 dark:text-white rounded-full p-3 text-center modal-score">
                            🏆 {score}
                          </p>
                        </div>
                        <div style={{ marginTop: 30, fontWeight: "bolder" }}>
                          List Of PRs:{" "}
                        </div>
                        {links.length !== 0 &&
                          links.map((link) => (
                            <a
                              className="pr-links text-black"
                              href={link}
                              key={link}
                            >
                              {link}
                            </a>
                          ))}
                      </div>
                    </div>
                    <div className="flex px-2 py-2 items-center justify-end">
                      <button
                        onClick={handleClose}
                        color="primary"
                        className="close-btn"
                        style={{
                          background: "#FA6329",
                          border: "none",
                          padding: "10px 20px",
                          color: "white",
                          borderRadius: 5,
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Body>
                </Dialog.Content>
                </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
