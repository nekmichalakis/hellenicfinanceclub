import { Button } from "@/components/ui/button.tsx";
import LinkedInSvg from "@/assets/svgs/linkedInSvg.tsx";
import papadatos from "@/assets/papadatos.webp";
import tsolakis from "@/assets/tsolakis.webp";

const AboutPage = () => {
  const boardMembers = [
    // {
    //   name: "Aris Papadopoulos",
    //   role: "Co-Founder",
    //   image: "https://picsum.photos/200/200?random=1",
    //   linkedIn: "https://www.linkedin.com/",
    // },
    {
      name: "Nikos Papadatos",
      role: "Co-Founder",
      image: papadatos,
      linkedIn: "https://www.linkedin.com/in/nikolaspapadatos/",
    },
    {
      name: "Nikos Tsolakis",
      role: "Co-Founder",
      image: tsolakis,
      linkedIn: "https://www.linkedin.com/in/nikolaostsolakis/",
    },
  ];

  return (
    <div>
      <div className={"bg-primary"}>
        <div
          className={
            "max-w-3xl mx-auto pb-24 pt-40 px-4 sm:px-6 lg:px-8 text-center"
          }
        >
          <h1 className={"text-4xl font-normal text-white sm:text-5xl"}>
            About Us
          </h1>
        </div>
      </div>

      {/*<div className={"bg-chart-1 py-16"}>*/}
      {/*  <div className={"max-w-6xl mx-auto bg-white flex flex-col md:flex-row"}>*/}
      {/*    <div className={"md:w-2/3 p-8 md:p-16 flex flex-col gap-12"}>*/}
      {/*      <h1 className={"text-4xl font-normal sm:text-5xl mb-4"}>*/}
      {/*        Our Story*/}
      {/*      </h1>*/}
      {/*      <p className={"text-md font-thin"}>*/}
      {/*        <span className={"font-medium"}>*/}
      {/*          The Hellenic Finance Network*/}
      {/*        </span>{" "}*/}
      {/*        started with a simple shared goal. During an investment banking*/}
      {/*        internship, two students, Aris and Nikos, came from different*/}
      {/*        backgrounds but quickly found common ground. Working together,*/}
      {/*        they discovered a great synergy that turned into something bigger.*/}
      {/*      </p>*/}
      {/*      <p className={"text-md font-thin"}>*/}
      {/*        After the internship, we realized our journey was not just about*/}
      {/*        personal growth. It was about opening doors for others.{" "}*/}
      {/*        <span className={"font-medium"}>*/}
      {/*          That is how HFN was created, a student-led network that helps*/}
      {/*          Greek students connect, learn, and break into top-tier finance.*/}
      {/*        </span>*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className={"md:w-1/3"}>*/}
      {/*      <img*/}
      {/*        src={desk}*/}
      {/*        alt={"About us"}*/}
      {/*        className={"size-full object-cover object-center"}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*OUR STORY*/}
      <div className="flex flex-col bg-slate-300">
        <div
          className={
            "flex flex-col items-center-center max-w-4xl  mx-auto gap-8 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-light text-center"}>
            Our Story
          </h1>
          <p className={"text-md font-thin"}>
            <span className={"font-medium"}>The Hellenic Finance Network</span>{" "}
            started with a simple shared goal. During an investment banking
            internship, two students, Aris and Nikos, came from different
            backgrounds but quickly found common ground. Working together, they
            discovered a great synergy that turned into something bigger.
          </p>
          <p className={"text-md font-thin"}>
            After the internship, we realized our journey was not just about
            personal growth. It was about opening doors for others.{" "}
            <span className={"font-medium"}>
              That is how HFN was created, a student-led network that helps
              Greek students connect, learn, and break into top-tier finance.
            </span>
          </p>
        </div>
      </div>

      {/*OUR MISSION*/}
      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center-center max-w-4xl text-center mx-auto gap-8 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-light"}>Our Mission</h1>
          <p className={"text-md font-thin"}>
            The Hellenic Finance Network was founded on a shared commitment to
            advancing opportunities for Greek students interested in finance. .{" "}
            <span className={"font-medium"}>
              HFN was established to foster these connections and support
              students in pursuing careers across the financial sector
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center max-w-6xl mx-auto gap-8 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-light text-center"}>
            Meet the Board of Directors
          </h1>
          <div className={"w-12 h-1 bg-black"} />
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 mt-16"}>
            {boardMembers.map((member, index) => (
              <div key={index} className={"flex flex-col max-w-80 "}>
                <div className={"overflow-hidden h-96"}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={"w-full h-full object-cover"}
                  />
                </div>
                <div className={"flex items-center justify-between mt-2"}>
                  <h2 className={"text-lg font-medium"}>{member.name}</h2>
                  <div className={"flex items-center"}>
                    <Button
                      variant={"ghost"}
                      className={"p-0 size-5"}
                      onClick={() => window.open(member.linkedIn, "_blank")}
                    >
                      <LinkedInSvg className={"size-4"} />
                    </Button>
                  </div>
                </div>
                <p className={"font-thin"}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
