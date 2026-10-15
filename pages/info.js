import Head from "next/head";
function info() {
  return (
    <div>
      <Head>
        <title>
        How GSSoC Works? | GirlScript Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="How GirlScript Summer of Code works" />
      </Head>
      <div className="container transition-colors mx-auto mt-12 mb-0 md:mb-12 p-8 sm:px-10 md:px-12 lg:px-40 dark:bg-darkmode_gray-0 dark:transition-colors ">
        <div className="items-center justify-center">
          <div className="font-sans text-center text-2xl font-extrabold">
            <p className="text-black dark:text-white text-4xl text center font-extrabold mb-10 underline underline-offset-4 decoration-primary_orange-0">
              What {""}
              <span className="text-primary_orange-0">they</span> do?
            </p>
          </div>
        </div>
        <div className="first-section mb-10 flex flex-col md:flex-row justify-between flex-auto items-center flex-wrap mb-24">
          <div className="basis-full mt-4 relative">
            <div className="text-black dark:text-white font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-blue-500 text-2xl">Project Admins</strong> own the projects where the contributors are
                  free to contribute in the form of documentation, bug fixes or
                  adding new features.
                </li>
                <li>
                  PAs have to routinely connect with mentors to discuss about
                  the progress, proceedings &amp; future vision of the project.
                </li>
                <li>
                  PAs are responsible for final reviews, merging PRs, assigning
                  labels, guiding the mentors in the review process &amp;
                  resolving doubts in server.
                </li>
              </ul>
            </div>

            <div className="text-black dark:text-white font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-green-500 text-2xl">Mentors</strong> review the Pull Requests, check for plagiarism, and
                  suggest changes based on the project&apos;s Contribution
                  guidelines.
                </li>
                <li>
                  They solve queries, debug issues faced by contributors &amp;
                  are responsible for guiding contributors actively throughout
                  the program.{" "}
                </li>
              </ul>
            </div>

            <div className="text-black dark:text-white font-medium text-lg 2.25rem 3rem mb-5 font-sans">
              <ul className="list-disc">
                <li>
                <strong className="text-yellow-500 text-2xl">Contributors</strong> should feel free to ask their doubts within the
                  GSSoC server/Github project repositories.
                </li>
                <li>
                  Contributors actively and consistently contribute to the
                  projects after they&apos;re assigned to a particular issue by
                  a PA/mentor.
                </li>
                <li>
                  The contributors are free to choose &amp; contribute to
                  multiple projects but they need to submit PRs to the assigned
                  issues within the fixed time bar set by the particular
                  project; failing to do so shall result in reassigning of the
                  issue to someone else.{" "}
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default info;
