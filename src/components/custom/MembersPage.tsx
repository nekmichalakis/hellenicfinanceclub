import { Button } from "@/components/ui/button.tsx";
import backgroundImage from "@/assets/backGeo.webp";
import { Link } from "react-router-dom";
import chess2 from "@/assets/chess2.webp";
import workshop from "@/assets/workshop.webp";
import competition from "@/assets/competition.webp";
import { cn } from "@/lib/utils.ts";

const MembersPage = () => {
  const options = [
    {
      src: chess2,
      className: "object-left",
      caption: "Strategy Blueprint",
      text: "We work with each candidate to develop a clear, actionable roadmap tailored to their goals — from targeting specific recruitment cycles to planning master’s studies for maximum impact. This includes one‑to‑one CV optimisation and personalised career consultations, ensuring every application reflects both skill and ambition at the highest standard.",
    },
    {
      src: workshop,
      className: "object-center",
      caption: "Technical Workshops",
      text: "We provide hands‑on training in the core technical skills that top‑tier finance firms demand — from valuation and M&A financial modelling to advanced Excel and data visualisation. These sessions are immersive, practical, and delivered by experienced practitioners, so candidates graduate with confidence as well as capability.",
    },
    {
      src: competition,
      className: "object-left",
      caption: "Competitions",
      text: "Our signature competitions place candidates in the spotlight to demonstrate technical skill, strategic thinking, and collaboration. Whether through internal trials or selective match‑ups with accomplished Hellenic Finance Network members, every challenge is designed to impress mentors, earn recognition, and prove readiness for the next level.",
    },
  ];

  // const gridOptions = [
  //   {
  //     icon: <SmileIcon className={"size-7"} />,
  //     title: "Made‑to‑Measure Solutions",
  //     description:
  //       "Tailored strategies designed around your exact goals, not off‑the‑shelf templates.",
  //   },
  //   {
  //     icon: <StarIcon className={"size-7"} />,
  //     title: "Individual Mentorship Alliance",
  //     description:
  //       "Direct, ongoing guidance from seasoned experts committed to your personal journey.",
  //   },
  //   {
  //     icon: <GlobeIcon className={"size-7"} />,
  //     title: "Limited Admission Cohort",
  //     description:
  //       "An exclusive circle where fewer seats mean deeper connections and richer collaboration.",
  //   },
  //   {
  //     icon: <ZapIcon className={"size-7"} />,
  //     title: "Invested in Your Growth",
  //     description:
  //       "We measure our success by the milestones you reach and celebrate them with you.",
  //   },
  // ];

  return (
    <div>
      <div className={"pt-40 pb-24 bg-white"}>
        <div
          className={"max-w-3xl mx-auto flex flex-col gap-16 items-center px-8"}
        >
          <h1 className={"text-3xl md:text-5xl font-normal"}>
            Members' Advantage
          </h1>
          <p className={"font-thin"}>
            <span className={"font-medium"}>
              At HFN, our core value lies in the power of networking—connecting
              ambitious individuals with peers, mentors, and opportunities that
              accelerate growth.
            </span>{" "}
            This vibrant exchange of ideas and experiences is what makes our
            community thrive.
            <br />
            <br />
            We foster these connections both through meaningful one-on-one
            relationships such as mentor-to-student guidance and through curated
            events that bring students together with industry professionals,
            advisors, and thought leaders.
          </p>
          <Link to={"/events"}>
            <Button
              variant={"primary"}
              className={"rounded-none px-12 py-6 font-light"}
            >
              Our Events
            </Button>
          </Link>
        </div>
      </div>

      <div className={"bg-primary py-24 px-4"}>
        <div
          className={
            "max-w-5xl mx-auto flex flex-col md:flex-row text-white gap-16 items-center text-center md:text-start"
          }
        >
          <h1 className={"text-5xl font-normal md:w-2/5"}>
            For Our Early Career Students
          </h1>
          <p className={"text-md font-thin md:w-1/2"}>
            HFN is committed to supporting emerging career members by offering{" "}
            <span className={"font-medium"}>
              dedicated services that address their unique needs and
              aspirations.
            </span>
          </p>
        </div>
      </div>

      <div className={"bg-white p-4 md:p-24"}>
        <div className={"py-16 bg-chart-1 px-4 md:px-16 mx-auto rounded-md"}>
          <div
            className={
              "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 justify-center"
            }
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={
                  "relative min-h-72 md:min-h-100 flex flex-col items-center"
                }
              >
                <div
                  className={
                    "w-full h-64 md:h-[90%] overflow-hidden rounded-md"
                  }
                >
                  <img
                    src={option.src}
                    className={cn(
                      "object-cover w-full h-full",
                      option.className,
                    )}
                    alt={"candidates image"}
                  />
                </div>
                <div
                  className={
                    "absolute bottom-0 w-[90%] bg-white py-2 px-4 md:p-7 rounded-md"
                  }
                >
                  <p className={"text-lg font-light md:whitespace-nowrap"}>
                    {option.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={
          "p-24 flex flex-col md:flex-row gap-4 justify-center items-center md:items-stretch"
        }
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={
              "w-[300px] relative flex flex-col gap-8 items-center justify-between bg-white p-10 pt-20 text-primary"
            }
          >
            <div
              className={
                "bg-chart-2 rounded-full flex items-center justify-center size-20 absolute -top-8 text-3xl font-bold"
              }
            >
              {index + 1}
            </div>
            <div className={"flex flex-col gap-8"}>
              <h2 className={"text-xl font-medium text-center"}>
                {option.caption}
              </h2>
              <p className={"text-md font-thin text-center"}>{option.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/*<div className={"bg-white p-24"}>*/}
      {/*  <div className={"max-w-5xl mx-auto grid grid-cols-2 gap-24"}>*/}
      {/*    {gridOptions.map((option) => (*/}
      {/*      <div className={"flex gap-6"}>*/}
      {/*        <div>{option.icon}</div>*/}
      {/*        <div className={"flex flex-col gap-8"}>*/}
      {/*          <h2 className={"text-xl font-semibold"}>{option.title}</h2>*/}
      {/*          <p className={"text-md font-light"}>{option.description}</p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default MembersPage;
