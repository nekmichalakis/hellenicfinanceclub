import { Button } from "@/components/ui/button.tsx";
import { InstagramSvg } from "@/assets/svgs/instagramSvg.tsx";
import { FacebookSvg } from "@/assets/svgs/facebookSvg.tsx";
import { XSvg } from "@/assets/svgs/XSvg.tsx";

const AboutPage = () => {
  const boardMembers = [
    {
      name: "Aris Papadopoulos",
      role: "Co-Founder & President",
      image: "https://picsum.photos/200/200?random=1",
    },
    {
      name: "Nikos Georgiou",
      role: "Co-Founder & Vice President",
      image: "https://picsum.photos/200/200?random=2",
    },
    {
      name: "Maria Ioannou",
      role: "Director of Events",
      image: "https://picsum.photos/200/200?random=3",
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

      <div className={"bg-chart-1 py-16"}>
        <div
          className={
            "max-w-6xl mx-auto bg-white flex flex-col md:flex-row px-4"
          }
        >
          <div className={"md:w-2/3 p-8 md:p-16 flex flex-col gap-12"}>
            <h1 className={"text-4xl font-normal sm:text-5xl mb-4"}>
              Our Story
            </h1>
            <p className={"text-md font-thin"}>
              The Hellenic Finance Network was born from a shared ambition.
              During an investment banking internship, two students — each from
              different backgrounds but united by a common vision — met,
              collaborated, and discovered a powerful synergy. That partnership
              between Aris and Nikos became the foundation for something bigger.
            </p>
            <p className={"text-md font-thin"}>
              After the internship ended, we knew our journey wasn’t just about
              personal success.{" "}
              <span className={"font-medium"}>
                It was about creating a pathway for others. So we founded HFN: A
                student‑led club helping Greek students break into elite finance
                through exclusive, high‑impact connections.
              </span>
            </p>
          </div>
          <div className={"md:w-1/3"}>
            <img
              src={"https://picsum.photos/400/600"}
              alt={"About us"}
              className={"w-full"}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center-center max-w-4xl text-center mx-auto gap-8 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-light"}>
            Why We're Different
          </h1>
          <p className={"text-md font-thin"}>
            Greece’s only independent finance club. Unlike university-affiliated
            clubs, we recruit top talent from any institution.{" "}
            <span className={"font-medium"}>
              Our mission? To help ambitious Greek students break into elite
              global finance — together. every event is a step toward your
              future.
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div
          className={
            "flex flex-col items-center-center max-w-4xl mx-auto gap-8 py-24 px-4"
          }
        >
          <h1 className={"text-4xl md:text-5xl font-light text-center"}>
            Meet the Board of Directors
          </h1>
          <div className={"w-12 h-1 bg-black self-center"} />
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-16 mt-16"}>
            {boardMembers.map((member, index) => (
              <div key={index} className={"flex flex-col"}>
                <div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={"w-full h-full object-cover"}
                  />
                </div>
                <div className={"flex items-center justify-between mt-2"}>
                  <h2 className={"text-lg font-medium"}>{member.name}</h2>
                  <div className={"flex items-center"}>
                    <Button size={"icon"} variant={"ghost"}>
                      <InstagramSvg width={16} height={16} />
                    </Button>
                    <Button size={"icon"} variant={"ghost"}>
                      <FacebookSvg width={16} height={16} />
                    </Button>
                    <Button size={"icon"} variant={"ghost"}>
                      <XSvg width={16} height={16} />
                    </Button>
                  </div>
                </div>
                <p className={"text-md font-light"}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
