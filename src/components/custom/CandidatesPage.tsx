import { Button } from "@/components/ui/button.tsx";
import backgroundImage from "@/assets/backGeo.jpg";
import { GlobeIcon, SmileIcon, StarIcon, ZapIcon } from "lucide-react";

const CandidatesPage = () => {
  const options = [
    {
      src: "https://picsum.photos/200/300",
      caption: "Strategy Blueprint",
      text: "We work with each candidate to develop a clear, actionable roadmap tailored to their goals — from targeting specific recruitment cycles to planning master’s studies for maximum impact. This includes one‑to‑one CV optimisation and personalised career consultations, ensuring every application reflects both skill and ambition at the highest standard.",
    },
    {
      src: "https://picsum.photos/200/301",
      caption: "Technical Workshops",
      text: "We provide hands‑on training in the core technical skills that top‑tier finance firms demand — from valuation and M&A financial modelling to advanced Excel and data visualisation. These sessions are immersive, practical, and delivered by experienced practitioners, so candidates graduate with confidence as well as capability.",
    },
    {
      src: "https://picsum.photos/200/302",
      caption: "Competitions",
      text: "Our signature competitions place candidates in the spotlight to demonstrate technical skill, strategic thinking, and collaboration. Whether through internal trials or selective match‑ups with accomplished Hellenic Finance Network members, every challenge is designed to impress mentors, earn recognition, and prove readiness for the next level.",
    },
  ];

  const gridOptions = [
    {
      icon: <SmileIcon className={"size-7"} />,
      title: "Made‑to‑Measure Solutions",
      description:
        "Tailored strategies designed around your exact goals, not off‑the‑shelf templates.",
    },
    {
      icon: <StarIcon className={"size-7"} />,
      title: "Individual Mentorship Alliance",
      description:
        "Direct, ongoing guidance from seasoned experts committed to your personal journey.",
    },
    {
      icon: <GlobeIcon className={"size-7"} />,
      title: "Limited Admission Cohort",
      description:
        "An exclusive circle where fewer seats mean deeper connections and richer collaboration.",
    },
    {
      icon: <ZapIcon className={"size-7"} />,
      title: "Invested in Your Growth",
      description:
        "We measure our success by the milestones you reach and celebrate them with you.",
    },
  ];

  return (
    <div>
      <div className={"pt-40 pb-8 bg-white"}>
        <div className={"max-w-3xl mx-auto flex flex-col gap-16"}>
          <h1 className={"text-3xl md:text-5xl font-normal"}>
            Candidates' Advantage
          </h1>
          <p className={"font-light"}>
            At the Hellenic Finance Network our services are more than benefits
            - they are strategic investments in the future of Greek talent.
            Every member gains privileged access to career-shaping mentorship,
            elite networking, technical mastery and competitive platforms -{" "}
            <span className={"font-medium"}>
              all provided at no cost. Because when our members grow, achieve,
              and lead, we succeed.
            </span>
          </p>
        </div>
      </div>

      <div className={"bg-white p-24"}>
        <div className={"py-16 bg-secondary"}>
          <div className={"max-w-4xl mx-auto flex gap-8"}>
            {options.map((option) => (
              <div className={"w-[300px] h-[400px] relative"}>
                <div className={"w-[95%] h-[90%] overflow-hidden"}>
                  <img
                    src={option.src}
                    width={"100%"}
                    height={"100%"}
                    className={"object-cover"}
                    alt={"candidates image"}
                  />
                </div>
                <div
                  className={"absolute right-0 bottom-0 w-[90%] bg-white p-7"}
                >
                  <p className={"text-lg font-light"}>{option.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={"p-24 flex flex-col md:flex-row gap-4 justify-center"}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {options.map((option, index) => (
          <div
            className={
              "w-[300px] relative flex flex-col gap-8 items-center justify-between bg-white p-10 pt-20 text-primary"
            }
          >
            <div
              className={
                "bg-secondary rounded-full flex items-center justify-center size-20 absolute -top-8 text-3xl font-bold"
              }
            >
              {index + 1}
            </div>
            <div className={"flex flex-col gap-8"}>
              <h2 className={"text-xl font-medium text-center"}>
                {option.caption}
              </h2>
              <p className={"text-md font-light text-center"}>{option.text}</p>
            </div>
            <Button className={"rounded-none p-4 font-light"}>More Info</Button>
          </div>
        ))}
      </div>

      <div className={"bg-primary p-24"}>
        <div className={"max-w-5xl mx-auto flex text-white"}>
          <h1 className={"text-6xl font-semibold w-1/2"}>Our Edge</h1>
          <p className={"text-md font-light w-2/5"}>
            A distinctive blend of exclusivity, personal guidance, and
            tailor‑made strategies that put your success ahead of the pack
          </p>
        </div>
      </div>

      <div className={"bg-white p-24"}>
        <div className={"max-w-5xl mx-auto grid grid-cols-2 gap-24"}>
          {gridOptions.map((option) => (
            <div className={"flex gap-6"}>
              <div>{option.icon}</div>
              <div className={"flex flex-col gap-8"}>
                <h2 className={"text-xl font-semibold"}>{option.title}</h2>
                <p className={"text-md font-light"}>{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidatesPage;
