import { SimpleGrid, Spacer } from "@chakra-ui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { projectData } from "./api/projectsData";
import projects2022 from "./api/projects2022.json";
import SearchTags from "../components/SearchTags";

const projectLinks = {
  2022: projects2022,
  2021: projectData,
};

// Fisher-Yates shuffle on a copy, so the shared data arrays are never mutated
const shuffle = (list) => {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const Project = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState("22");
  const { theme } = useTheme();

  const getProjects = useCallback((year) => {
    setData(shuffle(projectLinks[year]));
    setYear(year.substring(2));
  }, []);

  useEffect(() => {
    setMounted(true);
    getProjects("2022");
  }, [getProjects]);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>
          Projects | GirlScript Summer of Code 2022 | GirlScript Foundation
          India
        </title>
        <meta
          name="description"
          content="Projects of GirlScript Summer of Code"
        />
      </Head>
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center px-24 w-full">
          <div className="flex flex-col md:flex-row wrap items-center justify-between w-full gap-2">
            <div className="text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl font-extrabold flex wrap justify-start flex-col md:flex-row">
              <h1 className="text-primary_orange-0">Projects&nbsp;</h1>
              <h1>-&nbsp;GSSOC&apos;{year} </h1>
            </div>
            <div className="flex object-right border-b-2 items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                widthAuto
                className={theme === "light" ? "text-black" : "text-white"}
                style={{ verticalAlign: "middle" }}
              />
              <input
                className="px-3 py-1 bg-transparent outline-hidden dark:text-white text-black"
                type="search"
                placeholder="Search projects..."
                name="search"
                id="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
        </div>
        <p className="dark:text-white font-sans text-2xl md:text-4xl font-semibold text-black mt-20 px-24 mb-10">
          “Unfinished projects are a symbol of progress, not of imperfection.”
        </p>
        <Spacer mt={10} />
        <div className="flex flex-row justify-center flex-wrap items-center gap-5">
          {Object.keys(projectLinks)
            .reverse()
            .map((year) => {
              return (
                <button
                  key={year}
                  className="bg-linear-to-b from-primary_orange-0 to-orange-600 text-lg dark:text-black rounded-b-md hover:bg-linear-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-10 py-3 rounded-sm md:text-2xl md:py-4"
                  onClick={() => getProjects(year)}
                >
                  {year}
                </button>
              );
            })}
        </div>
        {data.length > 1 && (
          <div>
            <Spacer mt={10} mb={10} />
            <SearchTags setSearchTerm={setSearchTerm} />
            <Spacer mt={10} mb={10} />
            <div
              className="flex flex-row justify-center flex-wrap items-center
        gap-x-10 gap-y-10 mt-9"
            >
              {data
                .filter((curElem) => {
                  if (searchTerm == "") return curElem;
                  if (
                    curElem.technology_used
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    curElem.project_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                    return curElem;
                })
                .map((curElem, i) => {
                  const link =
                    curElem.project_link ||
                    curElem.github ||
                    "https://github.com/" + curElem.repo_fullname;
                  return (
                    <div
                      className="flex items-center justify-between w-80"
                      key={link}
                      data-aos="flip-up"
                      data-aos-duration="800"
                    >
                      <div className="shadow-sm dark:bg-black rounded-lg">
                        <div
                          className="overflow-y-clip rounded-lg h-fit md:h-80
                    w-80 flex flex-col justify-start
                    shadow-lg shadow-black-200 relative"
                        >
                          <>
                            <div className="flex flex-col justify-start gap-2 px-5 py-3">
                              <div className="font-bold text-primary_orange-0 md:text-xl">
                                <a target="_blank" rel="noreferrer" href={link}>
                                  {i + 1}. {curElem.project_name}
                                </a>
                              </div>
                              <div className="mb-3 text-sm dark:text-white md:text-md md:mb-4">
                                By {curElem.owner_name}
                              </div>
                            </div>
                            <SimpleGrid
                              columns={{ sm: 2, md: 3 }}
                              gap={2}
                              margin={1}
                              className="px-2"
                            >
                              {curElem.technology_used
                                .split(",")
                                .sort((a, b) => a.length - b.length)
                                .map((techStk, k) => {
                                  return (
                                    techStk && (
                                      <button
                                        className="bg-orange-50 dark:hover:bg-slate-700 dark:bg-stone-800 rounded-2xl w-full py-1
                                      text-orange-600 drop-shadow-md font-semibold"
                                        key={k}
                                        onClick={() => {
                                          setSearchTerm(techStk.trim());
                                        }}
                                      >
                                        {techStk.trim()}
                                      </button>
                                    )
                                  );
                                })}
                            </SimpleGrid>
                          </>
                          <br />
                          <br />
                          <ProjectModal currProject={curElem} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        <br />
        <br />
      </section>
    </>
  );
};

export default Project;
