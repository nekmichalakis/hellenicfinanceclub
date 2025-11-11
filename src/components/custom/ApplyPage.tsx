import {
  FileUserIcon,
  MapPinCheckInsideIcon,
  MessagesSquareIcon,
} from "lucide-react";
import ContactForm from "@/components/custom/ContactForm.tsx";
import laptops from "@/assets/laptops.webp";

const ApplyPage = () => {
  const cards = [
    {
      icon: <FileUserIcon className={"size-14"} />,
      text: "Stage One",
      description: "Upload your CV & a brief (100 words max) motivation letter",
    },
    {
      icon: <MessagesSquareIcon className={"size-14"} />,
      text: "Stage Two",
      description: "Interview Round",
      description2: "Short session based on technical & behavioral questions",
    },
    {
      icon: <MapPinCheckInsideIcon className={"size-14"} />,
      text: "Stage Three",
      description:
        "Alignment with HFN's values & share your own vision for yourself",
    },
  ];

  return (
    <div>
      <div className={"bg-primary"}>
        <div
          className={
            "max-w-5xl mx-auto pb-24 pt-40 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center text-center md:text-start"
          }
        >
          <div className={"md:w-1/2 pr-8"}>
            <h1 className={"text-4xl font-normal text-white sm:text-5xl"}>
              Joining our Finance Network
            </h1>
          </div>
          <div className={"md:w-1/2 flex flex-col gap-8"}>
            <p className={"text-md font-thin text-white"}>
              Eligibility is limited to{" "}
              <span className={"font-normal"}>
                Greek students currently enrolled in university programs,
              </span>{" "}
              either in Greece or abroad.
            </p>
            <p className={"text-md font-thin text-white"}>
              Recruitment cycle applications open 1st November
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center-center max-w-4xl text-center mx-auto gap-16 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-medium"}>
            Recruitment Process
          </h1>
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"}>
            {cards.map((card, index) => (
              <div key={index} className={"flex flex-col items-center gap-4"}>
                {card.icon}
                <p className={"text-xl font-thin"}>{card.text}</p>
                <div className={"max-w-3xs"}>
                  <p className={"text-md font-thin"}>{card.description}</p>
                  <p className={"text-md font-thin"}>{card.description2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16 bg-[#324157] px-4 md:px-16 py-32 items-center text-white text-center">
        <h1 className={"text-5xl font-normal"}>What we Look for</h1>
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <p className="text-md font-thin max-w-s">
            <span className="mr-4">{"•"}</span>
            Intellectual Curiosity & Ambition for High Finance Industry
          </p>
          <p className="text-md font-thin max-w-s">
            <span className="mr-4">{"•"}</span>
            {
              "Seeking members who not only grow within the community but strengthen it through mentorship and participation."
            }
          </p>
          <p className="text-md font-thin max-w-s">
            <span className="mr-4">{"•"}</span>
            Competitive Academic Track Record
          </p>
        </div>
      </div>

      <div className={"bg-chart-2 pb-24 pt-16 md:pt-40 px-4"}>
        <div className={"max-w-6xl mx-auto flex relative"}>
          <ContactForm />
          <div className={"hidden md:block w-2/3 h-120 -ml-60"}>
            <img
              src={laptops}
              alt={"Apply image"}
              className={"size-full object-rights object-cover"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
