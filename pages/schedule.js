import Head from "next/head";
import { asset } from "../lib/asset";
import Schedule from "../components/ScheduleMap";

function schedule() {
  return (
    <div>
      <Head>
        <title>
          Schedule | GirlScript Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta
          name="description"
          content="Schedule of GirlScript Summer of Code"
        />
      </Head>
      <div className="hidden lg:block 3xl:hidden">
        <div className="hor absolute top-32 left-0 right-0">
          <img
            src={asset("/images/schedule/schedule-line.svg")}
            alt="line"
          />
        </div>
      </div>
      <div>
        <div className="relative">
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default schedule;
