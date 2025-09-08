import { Link } from "react-router-dom";

const ApplyPage = () => {
  return (
    <div>
      <div className={"bg-primary"}>
        <div
          className={
            "max-w-5xl mx-auto pb-24 pt-40 px-4 sm:px-6 lg:px-8 flex gap-16"
          }
        >
          <div className={"w-1/2"}>
            <h1 className={"text-4xl font-normal text-white sm:text-5xl"}>
              Joining our Finance Network
            </h1>
          </div>
          <div className={"w-1/2 flex flex-col gap-8"}>
            <p className={"text-md font-[200] text-white"}>
              Eligibility is limited to{" "}
              <span className={"font-semibold"}>
                Greek students currently enrolled in university programs,
              </span>{" "}
              either in Greece or abroad.
            </p>
            <p className={"text-md font-light text-white"}>
              If you aspire to shape the future of finance and distinguish
              yourself in a competitive landscape, we encourage you to apply
              during our next recruitment cycle.
            </p>
            <div className={"w-1/5 h-0.5 bg-white"} />
            <Link to={"/apply"}>
              <p className={"text-md font-light text-white hover:underline"}>
                Read more
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center-center max-w-4xl text-center mx-auto gap-24 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-light"}>
            Why We're Different
          </h1>
          <div className={"flex gap-16"}>
            <p className={"text-lg font-light"}>
              Private networking events with top-tier professionals
            </p>
            <p className={"text-lg font-light"}>
              Skill-building workshops & competitions
            </p>
            <p className={"text-lg font-light"}>
              A lifelong network of high-achieving peers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
