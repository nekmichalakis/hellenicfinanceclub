import Hero from "@/components/custom/Hero.tsx";
import { Button } from "@/components/ui/button.tsx";
import office from "@/assets/office.webp";
import {
  ChartNoAxesCombinedIcon,
  CircleDashedIcon,
  CircleDotIcon,
  LoaderCircleIcon,
  TargetIcon,
  UsersIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import LbsSvg from "@/assets/svgs/lbsSvg.tsx";
import bocconi from "@/assets/logos/bocconi.webp";
import hec from "@/assets/logos/hec.webp";
import papei from "@/assets/logos/papei.png";
import opa from "@/assets/logos/opa.png";
import { cn } from "@/lib/utils.ts";

const HomePage = () => {
  const cards = [
    {
      icon: <UsersIcon className={"size-14"} />,
      text: "Exclusive Mentorship Begins the Moment You Join",
    },
    {
      icon: <TargetIcon className={"size-14"} />,
      text: "Tailored Strategy to Achieve Optimal Results",
    },
    {
      icon: <ChartNoAxesCombinedIcon className={"size-14"} />,
      text: "Exclusive Access to Events with Industry Practitioners",
    },
  ];

  const pipeline = [
    {
      icon: <CircleDashedIcon className={"size-16"} />,
      text: "Recruitment",
      description:
        "Selective admission of top-performing final-year students with strong academic results and early internship experience in finance",
    },
    {
      icon: <LoaderCircleIcon className={"size-16"} />,
      text: "Mentorship & Networking",
      description:
        "Tailored guidance and advisory support for applications to leading international Master’s programs, complemented by direct connections to HFN alumni already studying or working in those institutions and industries.",
    },
    {
      icon: <CircleDotIcon className={"size-16"} />,
      text: "Break Into High Finance",
      description:
        "Leveraging advanced academic credentials, mentorship, and the HFN network across global financial hubs to secure roles in investment banking, private equity, or private credit.",
    },
  ];

  const logos = [
    { src: bocconi, alt: "Bocconi Logo", className: "" },
    { src: hec, alt: "HEC Logo", className: "" },
    { src: opa, alt: "OPA Logo", className: "w-52 max-w-60 mr-12" },
    { src: papei, alt: "PAPEI Logo", className: "" },
  ];

  return (
    <div>
      <Hero />

      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center-center max-w-4xl text-center mx-auto gap-8 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-medium"}>
            The Premier Finance Network for Greek Students
          </h1>
          <p className={"text-md font-thin"}>
            If you’re a Greek University Student, in the penultimate or final
            year of your studies, aiming for a career in Investment Banking,
            Private Equity, or Private Credit in an international financial hub,
            register your interest below.
          </p>
          <Link to={"/apply"}>
            <Button
              variant={"primary"}
              className={
                "rounded-full px-10 py-6 font-light hover:opacity-60 self-center my-8"
              }
            >
              Register your Interest
            </Button>
          </Link>
          <div className={"flex gap-8 items-center justify-center mt-8"}>
            {cards.map((card, index) => (
              <div key={index} className={"flex flex-col items-center gap-4"}>
                {card.icon}
                <p className={"text-md font-thin max-w-3xs"}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*CAROUSEL OF LOGOS*/}
      <div className="flex flex-col md:flex-row gap-16 bg-primary px-12 py-24 items-center justify-center">
        <div className={"md:w-1/4 min-w-1/4"}>
          <h1
            className={
              "text-4xl md:text-5xl text-white font-medium text-center md:text-start"
            }
          >
            Global Alumni Network
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          {/*<div className="flex gap-16 items-center [animation:scroll-right_15s_linear_infinite]">*/}
          {/* Repeat logos twice for seamless loop */}
          {/*{["A", "B", "C", "D", "A", "B", "C", "D", "E"].map((logo, idx) => (*/}
          {/*<div className={"size-36 flex items-center justify-center"}>*/}
          {logos.map((logo, index) => (
            <div
              className={cn(
                "max-w-[40vw] w-full flex items-center justify-center",
                logo.className,
              )}
              key={index}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={"w-full h-auto object-cover"}
              />
            </div>
          ))}
          <div
            className={"max-w-[40vw] w-full flex items-center justify-center"}
          >
            <LbsSvg className={"size-36 pl-2"} />
          </div>
        </div>
      </div>

      {/*PIPELINE*/}
      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center max-w-6xl text-center mx-auto gap-16 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-medium"}>
            Our Pipeline to High Finance
          </h1>
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"}>
            {pipeline.map((card, index) => (
              <div key={index} className={"flex flex-col items-center gap-4"}>
                {card.icon}
                <p className={"text-lg font-medium"}>{card.text}</p>
                <p className={"text-sm font-thin"}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col py-24 px-4 gap-6 items-center bg-secondary text-center md:text-start">
        <h1 className={"text-4xl md:text-6xl font-medium"}>
          Explore Our Network
        </h1>
        <p className={"text-xl font-[200]"}>
          Eligible for both penultimate & final year students
        </p>
        <Link to={"/members"}>
          <Button
            className={"rounded-full py-6 px-10 mt-12 text-md font-light"}
          >
            Learn More
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row bg-white">
        <div
          className={
            "flex flex-col gap-6 p-16 md:w-1/2 items-center md:items-start"
          }
        >
          <h1
            className={
              "text-4xl md:text-6xl font-medium text-center md:text-start"
            }
          >
            Get to Know Us
          </h1>
          <p className={"text-xl font-thin"}>Hellenic Finance Network</p>
          <Link to={"/about"}>
            <Button
              variant={"primary"}
              className={
                "rounded-full px-10 py-6 md:self-start font-light hover:opacity-60"
              }
            >
              Start Now
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 h-[400px] overflow-hidden bg-gray-200">
          <img
            src={office}
            alt={"About Us"}
            loading={"lazy"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
